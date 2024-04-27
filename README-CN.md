<p align="center">
  <a href="https://merger.huangxin.org">
    <img alt="merger" src="https://edge.huangxin.org/images/2024/04/404313540.png" height="75">
  </a>
</p>

<p align="center">
<a href="https://qr.huangxin.org">qr.huangxin.org</a>
<br>
轻量，集成的二维码支付界面
</p>
<p align="center">
语言：<a href="/README.md">English 英语</a> / <strong>中文</strong>
</p>


<p align="center">
<a href="https://github.com/qr-merger/merger/releases"><img alt="Version" src="https://img.shields.io/github/release/qr-merger/merger/all.svg?style=flat-square"/></a>
<a href="https://github.com/qr-merger/merger/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/qr-merger/merger.svg?style=flat-square"/></a>
<a href="https://github.com/qr-merger/merger/stargazers"><img alt="Stargazers" src="https://img.shields.io/github/stars/qr-merger/merger.svg?style=flat-square"/></a>
<a href="https://github.com/qr-merger/merger/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/qr-merger/merger.svg?style=flat-square"/></a>
<a href="https://www.jsdelivr.com/package/gh/qr-merger/merger"><img alt="jsDelivr" src="https://data.jsdelivr.com/v1/package/gh/qr-merger/merger/badge"/></a>
</p>

在[这里](https://github.com/qr-merger/merger/issues/4)提交你的 merger 站点以供[展示](https://merger.huangxin.org/#/?id=%e5%85%b6%e4%bb%96%e6%bc%94%e7%a4%ba%e7%ab%99%e7%82%b9)

## 特性

- 支持微信、支付宝和PayPal。
  - 当扫描URL二维码时，在微信（显示支付码）或支付宝（重定向）内引导用户进行支付。
- 支持多语言，有两种模式：`donate`（捐赠）和`payment`（支付）。
- 提供 Gulp 支持，增强开发者体验并支持 JAMStack 部署。
- 静态文件托管于 [cdnjs.com](https://cdnjs.com/libraries/merger)，可作为独立的HTML文件运行。

## 使用方法

### 使用 NPM 和 Gulp（推荐）
```bash
git clone https://github.com/qr-merger/merger
cd merger

# 编辑 merger.html

pnpm i
pnpm build
```
优化后的版本将出现在`/build`目录中。适用于 JAMStack 平台，如 [CloudFlare Pages](https://pages.cloudflare.com)、[Vercel](https://vercel.com) 和 [Netlify](https://www.netlify.com)。

### 独立使用

1. 下载 [merger.html](https://github.com/qr-merger/merger/blob/master/merger.html)。
2. 编辑其内容。
3. 根据喜好部署HTML文件。

## 开源许可证

[GNU General Public License v3.0](https://github.com/qr-merger/merger/blob/master/LICENSE)
