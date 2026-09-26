# 心有一處 Heartroom 網站

「心有一處（Heartroom）」iOS App 的公開網站：首頁、聯絡我們、隱私權政策，中英文各一份。

純靜態網頁，沒有建置步驟，也不使用 Cookie、分析或廣告工具。

## 頁面

| 頁面 | 中文 | 英文 |
|---|---|---|
| 首頁 | `index.html` | `en/index.html` |
| 聯絡我們（支援網址） | `support.html` | `en/support.html` |
| 隱私權政策 | `privacy-policy.html` | `en/privacy-policy.html` |

`lang-redirect.js` 會依瀏覽器語言自動切換中英文，並記住使用者手動選擇的語言（只存在瀏覽器的 localStorage）。

## 上線前待辦

- [x] 把所有頁面的 `support@example.com` 換成正式聯絡信箱：`heartroom.app.support@gmail.com`（獨立 Gmail 帳號，已設定轉寄到個人信箱）。
- [ ] 在 GitHub 的 Settings → Pages 啟用 GitHub Pages（從 `main` 分支根目錄發布）。
- [ ] Heartroom 相關網域已查過，可用的都被註冊走了——暫時不加 `CNAME`，先用 GitHub Pages 預設網址（`wei-nan.github.io/heartroom-web/...`）。之後如果改用其他網域名稱，再回來加。
- [ ] 英文名稱 Heartroom 完成商標檢索後再正式使用（跟 heartroom repo 的 issue #14 是同一件事）。

## App Store Connect 使用的網址

啟用 GitHub Pages 後：

- 隱私權政策：`https://wei-nan.github.io/heartroom-web/privacy-policy.html`
- 支援網址：`https://wei-nan.github.io/heartroom-web/support.html`

## 本機預覽

```bash
python3 -m http.server 8000
```

然後開啟 <http://localhost:8000>。

## 修改注意

- 隱私權政策的內容必須和 App 實際行為一致。App 新增資料收集、第三方服務或帳號功能時，要同步更新中英文版本與生效日期。
- 色彩與 App 的 `Palette` 一致，定義在 `style.css` 的 `:root`。
