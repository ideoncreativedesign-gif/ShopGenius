/**
 * 小红书美妆个护种草帖采集器
 * - 用本机 Chrome + 独立登录 profile（从 chrome-devtools-mcp profile 复制而来）
 * - 每篇帖子：详情页截图 page.png + 全部原图 img_XX.webp + meta.json
 * - 台账 xhs_posts/index.json，断点续采、全局去重
 * - 限速拟人化；检测到风控页立即停止
 *
 * 用法: node collect.js [--limit 55] [--headless]
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const ROOT = 'C:\\Users\\user\\Desktop\\shopping';
const OUT_DIR = path.join(ROOT, 'xhs_posts');
const INDEX_FILE = path.join(OUT_DIR, 'index.json');
const PROFILE_DIR = path.join(__dirname, 'chrome-profile');
const CHROME_EXE = 'C:\\Users\\user\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';

const KEYWORDS = [
  '护肤品 种草',
  '化妆品 购物攻略',
  '粉底液 测评',
  '精华 红黑榜',
  '防晒 合集',
  '口红 试色',
  '洗发水 推荐',
  '美妆 买前必看',
  '面膜 空瓶记',
  '彩妆 新手教程',
  '口红 平价 推荐',
  '新手 化妆品 清单',
];
const QUOTA_PER_KEYWORD = 25;

const argv = process.argv.slice(2);
const BATCH_LIMIT = (() => {
  const i = argv.indexOf('--limit');
  return i >= 0 ? parseInt(argv[i + 1], 10) : 55;
})();
const HEADLESS = argv.includes('--headless');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rand = (min, max) => min + Math.random() * (max - min);
const humanPause = async (minS, maxS) => sleep(rand(minS * 1000, maxS * 1000));

function loadIndex() {
  if (!fs.existsSync(INDEX_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8'));
  } catch (e) {
    console.error('index.json 解析失败，备份后重建', e.message);
    fs.copyFileSync(INDEX_FILE, INDEX_FILE + '.bak.' + Date.now());
    return [];
  }
}
function saveIndex(index) {
  const tmp = INDEX_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(index, null, 2), 'utf8');
  fs.renameSync(tmp, INDEX_FILE);
}
function sanitize(name) {
  return name.replace(/[\\/:*?"<>|\r\n\s]+/g, '_').slice(0, 24) || 'untitled';
}

async function downloadImage(url, filePath) {
  const res = await fetch(url, {
    headers: {
      Referer: 'https://www.xiaohongshu.com/',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url.slice(0, 80)}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error(`疑似非图片响应 (${buf.length}B)`);
  fs.writeFileSync(filePath, buf);
  return buf.length;
}

async function isRiskPage(page) {
  try {
    const url = page.url();
    if (/captcha|verify|security/i.test(url)) return true;
    return await page.evaluate(() => {
      const t = document.body ? document.body.innerText : '';
      return /安全验证|滑动验证|异常流量|扫码验证|请通过验证/.test(t.slice(0, 3000));
    });
  } catch {
    return false;
  }
}

async function checkLogin(page) {
  return await page.evaluate(async () => {
    try {
      const r = await fetch('https://edith.xiaohongshu.com/api/sns/web/v2/user/me', {
        credentials: 'include',
      });
      const j = await r.json();
      return j && j.data && j.data.guest === false ? j.data.nickname : null;
    } catch {
      return null;
    }
  });
}

/** 搜索页滚动加载并读取 feeds */
async function collectSearchFeeds(page, keyword, wantCount) {
  const url =
    'https://www.xiaohongshu.com/search_result?keyword=' +
    encodeURIComponent(keyword) +
    '&source=web_explore_feed';
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await humanPause(2.5, 4.5);
  if (await isRiskPage(page)) throw new Error('RISK_CONTROL');

  let lastCount = 0;
  let stall = 0;
  for (let i = 0; i < 15; i++) {
    const count = await page.evaluate(() => {
      const s = window.__INITIAL_STATE__;
      const f = s && s.search && s.search.feeds;
      const arr = f && f.value ? f.value : f;
      return Array.isArray(arr) ? arr.length : 0;
    });
    if (count >= wantCount) break;
    stall = count === lastCount ? stall + 1 : 0;
    if (stall >= 4) break;
    lastCount = count;
    await page.mouse.wheel(0, rand(700, 1400));
    await humanPause(0.9, 2.0);
  }

  return await page.evaluate(() => {
    const s = window.__INITIAL_STATE__;
    const f = s && s.search && s.search.feeds;
    const arr = f && f.value ? f.value : f;
    if (!Array.isArray(arr)) return [];
    return arr
      .filter((x) => x.modelType === 'note' && x.noteCard && x.noteCard.type === 'normal')
      .map((x) => ({
        id: x.id,
        token: x.xsecToken,
        title: x.noteCard.displayTitle || '',
        likes: x.noteCard.interactInfo ? x.noteCard.interactInfo.likedCount : '',
      }));
  });
}

/** 采集单篇帖子 */
async function collectPost(page, cand, keyword) {
  const detailUrl =
    'https://www.xiaohongshu.com/explore/' +
    cand.id +
    '?xsec_token=' +
    encodeURIComponent(cand.token) +
    '&xsec_source=pc_search';
  await page.goto(detailUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });

  try {
    await page.waitForFunction(
      (id) => {
        const s = window.__INITIAL_STATE__;
        return !!(
          s &&
          s.note &&
          s.note.noteDetailMap &&
          s.note.noteDetailMap[id] &&
          s.note.noteDetailMap[id].note &&
          s.note.noteDetailMap[id].note.noteId
        );
      },
      cand.id,
      { timeout: 15000 }
    );
  } catch {
    if (await isRiskPage(page)) throw new Error('RISK_CONTROL');
    return { status: 'failed_load' };
  }

  const note = await page.evaluate((id) => {
    const n = window.__INITIAL_STATE__.note.noteDetailMap[id].note;
    return {
      id: n.noteId,
      type: n.type,
      title: n.title,
      desc: n.desc,
      tags: (n.tagList || []).map((t) => t.name),
      user: n.user ? n.user.nickname : '',
      time: n.time,
      likes: n.interactInfo ? n.interactInfo.likedCount : '',
      collects: n.interactInfo ? n.interactInfo.collectedCount : '',
      comments: n.interactInfo ? n.interactInfo.commentCount : '',
      images: (n.imageList || []).map((im) => {
        const dft = (im.infoList || []).find((x) => x.imageScene === 'WB_DFT');
        return (dft && dft.url) || im.urlDefault || '';
      }),
    };
  }, cand.id);

  if (note.type === 'video') return { status: 'skipped_video', note };

  const dir = path.join(OUT_DIR, sanitize(keyword), `${note.id}_${sanitize(note.title)}`);
  fs.mkdirSync(dir, { recursive: true });

  await humanPause(1.2, 2.2);
  await page.screenshot({ path: path.join(dir, 'page.png') });

  const imgResults = [];
  for (let i = 0; i < note.images.length; i++) {
    const url = note.images[i];
    if (!url) continue;
    const file = path.join(dir, `img_${String(i + 1).padStart(2, '0')}.webp`);
    try {
      const size = await downloadImage(url, file);
      imgResults.push({ i: i + 1, ok: true, size });
    } catch (e) {
      imgResults.push({ i: i + 1, ok: false, err: e.message });
    }
    await sleep(rand(200, 600));
  }

  fs.writeFileSync(
    path.join(dir, 'meta.json'),
    JSON.stringify({ ...note, keyword, detailUrl, collectedAt: new Date().toISOString() }, null, 2),
    'utf8'
  );

  const okImgs = imgResults.filter((r) => r.ok).length;
  return { status: okImgs > 0 ? 'ok' : 'failed_images', note, dir, okImgs, totalImgs: note.images.length };
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const index = loadIndex();
  const seen = new Set(index.map((r) => r.id));
  const okCountByKw = {};
  for (const r of index) {
    if (r.status === 'ok') okCountByKw[r.keyword] = (okCountByKw[r.keyword] || 0) + 1;
  }
  const totalOk = index.filter((r) => r.status === 'ok').length;
  console.log(`[启动] 已有 ${totalOk} 篇成功记录，本批上限 ${BATCH_LIMIT} 篇`);

  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    executablePath: CHROME_EXE,
    headless: HEADLESS,
    viewport: { width: 1440, height: 900 },
    args: ['--disable-blink-features=AutomationControlled', '--window-size=1480,960'],
    ignoreDefaultArgs: ['--enable-automation'],
  });
  const page = context.pages()[0] || (await context.newPage());

  try {
    await page.goto('https://www.xiaohongshu.com/explore', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await humanPause(2, 3);

    let nickname = await checkLogin(page);
    if (!nickname) {
      console.log('[登录] 未检测到登录态，请在打开的浏览器中扫码登录（最多等待 5 分钟）...');
      const deadline = Date.now() + 5 * 60 * 1000;
      while (!nickname && Date.now() < deadline) {
        await sleep(5000);
        nickname = await checkLogin(page);
      }
      if (!nickname) throw new Error('登录超时，退出');
    }
    console.log(`[登录] 已登录: ${nickname}`);

    let collected = 0;
    outer: for (const keyword of KEYWORDS) {
      const done = okCountByKw[keyword] || 0;
      if (done >= QUOTA_PER_KEYWORD) {
        console.log(`[跳过] "${keyword}" 已达配额 ${done}/${QUOTA_PER_KEYWORD}`);
        continue;
      }
      console.log(`[关键词] "${keyword}" 进度 ${done}/${QUOTA_PER_KEYWORD}`);

      let feeds;
      try {
        feeds = await collectSearchFeeds(page, keyword, 70);
      } catch (e) {
        if (e.message === 'RISK_CONTROL') throw e;
        console.log(`  搜索页失败: ${e.message}，跳过该关键词`);
        continue;
      }
      const candidates = feeds.filter((f) => !seen.has(f.id));
      console.log(`  图文候选 ${feeds.length} 篇，去重后 ${candidates.length} 篇`);

      let kwOk = done;
      for (const cand of candidates) {
        if (collected >= BATCH_LIMIT) {
          console.log(`[批次] 已达本批上限 ${BATCH_LIMIT}，停止`);
          break outer;
        }
        if (kwOk >= QUOTA_PER_KEYWORD) break;

        seen.add(cand.id);
        let result;
        try {
          result = await collectPost(page, cand, keyword);
        } catch (e) {
          if (e.message === 'RISK_CONTROL') throw e;
          result = { status: 'failed_error', err: e.message };
        }
        const rec = {
          id: cand.id,
          keyword,
          title: (result.note && result.note.title) || cand.title,
          status: result.status,
          likes: (result.note && result.note.likes) || cand.likes,
          collects: result.note && result.note.collects,
          comments: result.note && result.note.comments,
          imgOk: result.okImgs,
          imgTotal: result.totalImgs,
          dir: result.dir ? path.relative(OUT_DIR, result.dir) : undefined,
          url: `https://www.xiaohongshu.com/explore/${cand.id}`,
          xsecToken: cand.token,
          ts: new Date().toISOString(),
        };
        index.push(rec);
        saveIndex(index);

        if (result.status === 'ok') {
          collected++;
          kwOk++;
          console.log(
            `  [${collected}/${BATCH_LIMIT}] ok ${cand.id} 图${result.okImgs}/${result.totalImgs} 《${rec.title.slice(0, 20)}》`
          );
          await humanPause(4, 9);
        } else {
          console.log(`  [-] ${result.status} ${cand.id} ${result.err || ''}`);
          await humanPause(2, 4);
        }
      }
      await humanPause(3, 6);
    }

    const finalOk = index.filter((r) => r.status === 'ok').length;
    console.log(`[完成] 本批新增 ${collected} 篇，累计成功 ${finalOk} 篇`);
  } catch (e) {
    if (e.message === 'RISK_CONTROL') {
      console.error('!!! 检测到风控/验证页面，已停止采集。请手动在浏览器中完成验证后再重跑。');
      try {
        await page.screenshot({ path: path.join(OUT_DIR, 'risk_control.png') });
      } catch {}
    } else {
      console.error('[错误]', e);
    }
    process.exitCode = 1;
  } finally {
    await context.close();
  }
})();
