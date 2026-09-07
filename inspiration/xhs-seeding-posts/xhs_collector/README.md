# xhs_collector

采集小红书种草帖(截图 + 原图),产物在 `../xhs_posts/`,报告见 `../采集报告.md`。

## 跑之前(2026-08-31 清理后必读)

`node_modules/` 与 `chrome-profile/` 已删除(共 520M;profile 里含登录凭据,不该留在项目里)。重跑步骤:

1. `npm install`
2. `npm run collect` —— 首次会在本目录重建 `chrome-profile/`(collect.js:17),需**重新扫码登录小红书**

用完记得再删掉这两个目录,别让登录态和依赖留在库里。
