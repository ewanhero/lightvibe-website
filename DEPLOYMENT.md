# 官网部署记录

更新：2026-09-08

- 主站源码与静态产物：https://github.com/ewanhero/lightvibe-website
- 主站 Pages：main 分支 /docs，绑定 lightvibe.net。
- 中文域名镜像：https://github.com/ewanhero/lightvibe-website-cn
- 镜像 Pages：main 分支根目录，绑定 lightvibe.cn，内容与主站一致。
- 目前没有公开任何安装包，下载标注“准备中”。
- 未操作阿里云服务器，不得影响其已有服务、组件、端口或代理配置。

## 待完成

易名验证已由用户完成，但浏览器控制连接报告 Debugger unattached；本次尚未提交任何 DNS 记录修改。恢复 Chrome 控制后，检查并保留现有记录，再配置两个域名的 GitHub Pages 解析。待域名生效、GitHub 签发证书后分别开启 HTTPS 强制跳转。不能把构建成功视为域名上线完成。

## 更新流程

运行 pnpm build；仅发布 dist/client 的静态文件，不发布 dist/server。将首页、404、icon.png、_next 资源与 .nojekyll 同步到 docs；将 en.html 和 en.rsc 放入 docs/en/index.html 与 index.rsc，以适配 /en/ 链接。保留 docs/CNAME 为 lightvibe.net。

镜像仅同步上述公开静态内容，CNAME 改为 lightvibe.cn。两个仓库不自动互相同步，每次发布必须同步更新并检查。不得包含 App 源码、APNs 密钥、配对码、私密截图或未批准的安装包。
