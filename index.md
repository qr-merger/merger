<h1 align="center">Merger 使用文档</h1>

<p align="center">
合并你的二维码。就是现在。
</p>

## 概述
merger 是一个使用 `JavaScript` 实现大部分功能的付款二维码合并程序。

日常生活里，我们往往需要使用多个途径收取款项。无论是QQ钱包还是微信支付，亦或是支付宝，甚至 Paypal - 轻松配置 merger 并部署到你的服务器，即可拥有无与伦比的一体化收款体验。

你可以为你的 merger 生成一张二维码 [(查看示例)](https://ae01.alicdn.com/kf/H25acb23448f34427bba3021072797105S.png)，或者直接把你的 merger 链接发送给对方。merger 会通过 `User Agent` 识别对方的客户端，随即展示相应的内容。

自从 [更新 0.20](https://github.com/hifocus/merger/releases/tag/0.20) 以来，merger 首次支持了多语言、用途定义和自动页面标题和图标；这意味着你可以更为简便地配置 merger，而你的用户也会获得更好的使用体验。

## 特性
- 多语言支持。
- 最少的请求数，最快的速度。
- 详尽的代码注释，方便后续开发。
- 结合实际使用场景为每一种支付方式单独设计的展示样式。
- 高度可定制化，页面上一切内容均可通过预设的 Javascript 代码更改。无需任何编程技巧。
- 所有静态文件均默认通过开源 CDN [jsDelivr](https://www.jsdelivr.com) 合并和分发。

## 演示站点
请浏览：[https://demo.qrcdn.com](https://demo.qrcdn.com)<br>托管环境：Ubuntu 18.04.2 LTS | nginx/1.16.0 | Accelerated By [CloudFlare](https://www.cloudflare.com) | Hosted By [Vultr](https://www.vultr.com/?ref=8002335-4F)

或者使用 手机相机 | QQ 手机版 | 微信 | 支付宝 [扫描这个二维码](https://ae01.alicdn.com/kf/H25acb23448f34427bba3021072797105S.png)

### 其他演示站点
- [https://pay.ryanc.cc](https://pay.ryanc.cc/)

[在这里提交你的 merger 站点以供展示](https://github.com/hifocus/merger/issues/4)

## 截图
以下截图展示了在不同客户端下打开 merger 链接的样式。[下载大图](https://dlc.justhx.com/Screenshot_Original.jpg.direct)
![](https://ae01.alicdn.com/kf/UTB8hFq3KlahduJk43Jaq6zM8FXaR.jpg)

## 社区
- 如果你在使用过程中发现了任何问题，请提交一个 [Issue](https://github.com/hifocus/merger/issues/new)。
- 如果你希望让 merger 变得更好，欢迎提交 [Pull Requests](https://github.com/hifocus/Merger/pulls)。

## 感谢
- 本文档使用 [Docsify](https://docsify.js.org) 创建，托管于 [GitHub Pages](https://pages.github.com)，以 [GNU General Public License v3.0](https://github.com/hifocus/merger/blob/master/LICENSE) 发布。
- 本文档内的图片使用 [upimg-cli](https://github.com/metowolf/upimg-cli) 上传。
- 本项目的[图标](https://github.com/hifocus/merger/blob/gh-pages/themes/merge.png)和[展示横幅](https://github.com/hifocus/merger/blob/gh-pages/themes/banner.psd)素材来自 [zylbiubiubiu, Iconfont](https://www.iconfont.cn/user/detail?uid=724490)
<hr>
- 本项目的部分 `JavaScript` 代码由 [@LF112](https://github.com/LF112) 贡献。
- 本项目基于 [Grouper](https://github.com/hifocus/Grouper) 项目（请参见 [Grouper 的感谢列表](https://github.com/hifocus/Grouper#credit)）。
- 本项目也使用了以下项目 / 服务：
  - [Spectre.css](https://picturepan2.github.io/spectre/)
  - [JQuery](https://jquery.com)
  - [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode)
  - [jsDelivr](https://www.jsdelivr.com)
  - [Pure CSS3 Gradient Background Animation](https://codepen.io/P1N2O/pen/pyBNzX)
  - [Iconfont.cn](https://www.iconfont.cn)


在 [GitHub](https://github.com/hifocus/merger/tree/gh-pages) 上编辑此页面。