# XHS seeding-post corpus|小红书种草贴语料

**By:** Yihan · **Collected:** 2026-07 · **Source:** 小红书公开贴,按关键词采集(美妆/护肤/口红等 13 组)

What "种草" (seeding) posts look like as **screens**: layout, image sequencing, title tone,
comment dynamics. Reference material for how recommendation content is actually composed —
not our content, and **not for redistribution**; third-party creators own everything in here.

## Layout

```text
xhs_posts/<keyword>/<post-id_title>/   ← one folder per post: img_NN.webp + meta.json + page.png
xhs_posts/index.json                   ← manifest: title, likes/collects/comments, source URL
xhs_collector/                         ← the collection script (Node)
采集报告.md                             ← collection report
```

Browse via `index.json` (has source URLs + engagement numbers), or just open a keyword folder.
