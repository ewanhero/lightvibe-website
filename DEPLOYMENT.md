# 官网部署记录

更新：2026-09-08

- 主站源码与静态产物：https://github.com/ewanhero/lightvibe-website
- 主站 Pages：main 分支 /docs，绑定 lightvibe.net。
- 中文域名镜像：https://github.com/ewanhero/lightvibe-website-cn
- 镜像 Pages：main 分支根目录，绑定 lightvibe.cn，内容与主站一致。
- 目前没有公开任何安装包，下载标注“准备中”。
- 未操作阿里云服务器，不得影响其已有服务、组件、端口或代理配置。

## DNS 已配置，HTTPS 待完成

2026-09-08 23:37（北京时间）：通过 Chrome 易名解析页面为 lightvibe.net 和 lightvibe.cn 分别添加以下记录，TTL 600、默认线路；每条均在 UI 显示正常，并通过 ns1.ename.net 权威查询核验。保留各域名原有两条 NS，不修改名称服务器。

| 主机 | 类型 | 值 |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | ewanhero.github.io. |

实测 lightvibe.net 的 HTTP 首页返回 GitHub 200；lightvibe.cn 的本机公共 DNS 缓存尚未更新。两个仓库 Pages 构建均为 built，但 https_certificate 仍为空、https_enforced 为 false；.net HTTPS 校验尚报证书域名不匹配，未绕过校验。等待公共 DNS 传播与 GitHub 证书签发后，核验两个域名和 www，再开启 HTTPS 强制跳转。不能把 DNS 保存成功视为 HTTPS 上线完成。

## 更新流程

运行 pnpm build；仅发布 dist/client 的静态文件，不发布 dist/server。将首页、404、icon.png、_next 资源与 .nojekyll 同步到 docs；将 en.html 和 en.rsc 放入 docs/en/index.html 与 index.rsc，以适配 /en/ 链接。保留 docs/CNAME 为 lightvibe.net。

镜像仅同步上述公开静态内容，CNAME 改为 lightvibe.cn。两个仓库不自动互相同步，每次发布必须同步更新并检查。不得包含 App 源码、APNs 密钥、配对码、私密截图或未批准的安装包。
