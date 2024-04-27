<p align="center">
  <a href="https://merger.huangxin.org">
    <img alt="merger" src="https://edge.huangxin.org/images/2024/04/404313540.png" height="75">
  </a>
</p>

<p align="center">
<a href="https://qr.huangxin.org">qr.huangxin.org</a>
<br>
Lightweight, Integrated QR Code Payment Interface<br>轻量，集成的二维码支付界面
</p>
<p align="center">
Language: <strong>English</strong> / <a href="./README-CN.md">Chinese 中文</a>
</p>


<p align="center">
<a href="https://github.com/qr-merger/merger/releases"><img alt="Version" src="https://img.shields.io/github/release/qr-merger/merger/all.svg?style=flat-square"/></a>
<a href="https://github.com/qr-merger/merger/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/qr-merger/merger.svg?style=flat-square"/></a>
<a href="https://github.com/qr-merger/merger/stargazers"><img alt="Stargazers" src="https://img.shields.io/github/stars/qr-merger/merger.svg?style=flat-square"/></a>
<a href="https://github.com/qr-merger/merger/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/qr-merger/merger.svg?style=flat-square"/></a>
<a href="https://www.jsdelivr.com/package/gh/qr-merger/merger"><img alt="jsDelivr" src="https://data.jsdelivr.com/v1/package/gh/qr-merger/merger/badge"/></a>
</p>

Submit your merger site [here](https://github.com/qr-merger/merger/issues/4) for [presentation](https://merger.huangxin.org/#/en-gb/?id=other-demo-sites)

This project is sponsored by <a target="_blank" href="https://www.cloudflare.com"><img src="https://vip2.loli.io/2023/06/15/leUw2vnXKZRTcLE.png" height="30px"></a>

## Features

- Supports WeChat, AliPay and PayPal.
  - When scanning QR Code of URL in WeChat (shows payment code) or AliPay (redirects), directs users to pay.
- Multilingual adaption with two modes: `donate` or `payment`.
- Gulp support for developer experience and JAMStack deployment.
- Static files on [cdnjs.com](https://cdnjs.com/libraries/merger). Works as standalone html.

## Usage

### With NPM and Gulp (Recommended)

**Demo:** [https://qr.huangxin.org](https://qr.huangxin.org/)

```bash
git clone https://github.com/qr-merger/merger
cd merger

# Edit merger.html

pnpm i
pnpm build
```
An optimised version will appear at `/build` directory. Works well with JAMStack platforms such as [CloudFlare Pages](https://pages.cloudflare.com), [Vercel](https://vercel.com) and [Netlify](https://www.netlify.com).

### Standalone

**Demo:** [https://qr.huangxin.org/standalone](https://qr.huangxin.org/standalone.html)

1. Download [merger.html](https://github.com/qr-merger/merger/blob/master/merger.html).
2. Edit its contents.
3. Serve the html file per your liking.


## License

[GNU General Public License v3.0](https://github.com/qr-merger/merger/blob/master/LICENSE)
