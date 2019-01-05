<p>
<img src="https://i.imgur.com/J8Njimw.jpg" alt="Merger Render Poster">
</p>

<a href="https://demo.qrcdn.com/merger.html"><h1 style="text-align:center">Merger.html</h1></a>

<p>
<a href="https://github.com/hifocus/merger/releases"><img alt="Version" src="https://img.shields.io/github/release/hifocus/merger/all.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/merger/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/hifocus/merger.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/merger/stargazers"><img alt="Stargazers" src="https://img.shields.io/github/stars/hifocus/merger.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/merger/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/hifocus/merger.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/merger/releases"><img alt="jsDelivr" src="https://img.shields.io/github/downloads/hifocus/merger/total.svg?style=flat-square"/></a>
<a href="https://www.jsdelivr.com/package/gh/hifocus/merger"><img alt="jsDelivr" src="https://data.jsdelivr.com/v1/package/gh/hifocus/merger/badge"/></a>
</p>

> Merge your qrcode quicker. 

> Demo Site: [https://demo.qrcdn.com](https://demo.qrcdn.com) | [中文文档](https://github.com/hifocus/merger/blob/master/README_CN.md) | [博客文章](https://tech.hxco.de/solutions/merger.html)

> **Reminder:** The document (or `README.md`) was written in en_GB `Spoken`. Please do `Alt` + `F4` immediately if you feel uncomfortable while reading this.

## Why
 In China, we use at least three different apps to pay, with all different qrcodes. It's a problem that you might get it wrong while you are super busy. Why don't we merge them into one with fantastic styles that everyone would love'in it. And...additionally, being a bit more international? 

 ## Screenshots
<img src="https://i.imgur.com/cpJFFG6.jpg" alt="Merger Style">
 
 ## Definitions
 `Merger` is a HTML template that allows you to merge muiltple payment qrcode together.

 [hifocus/merger](https://github.com/hifocus/merger) is an open source project, released under the [GNU General Public License v3.0
](https://www.gnu.org/licenses/gpl-3.0.en.html) as a part of [HXCO](https://hxco.org)'s cooperate project.

 ## Features
- Fast speed. Every static file can be distribute by [jsDelivr](https://jsdelivr.com), a global accelerated CDN.
- Highly customizable. You can modify everything displayed on the page with no special programming technique required.
- Straightforward configuration. You may want to create your own version, and we have provided you with convenience. All you have to do is fill in the content you want, and our code will support you and do all the other work.
- "Transformer" style. Your user may open your site to pay to you in a couple of different ways. `Merger` considered everything for you and it will present itself in different ways to make sure the user's need is fitted.

## Downloads

- Please use the `release` function of this project at: [https://github.com/hifocus/merger/releases](https://github.com/hifocus/merger/releases). Please only use the latest, non pre-release version of `Merger` in production environment.

- If you have no idea about how to edit the `.html` file to get your own merged qrcode, we suggest you to use [Visual Studio Code](https://code.visualstudio.com/), an open source code editor.
Download it directly from HXCO Get: [https://get.soft.org/vscode](https://get.soft.org/vscode).

## Notices

### Bugs Notice
During the development of this project, bugs might appear and affect your site. Here are two suggestions:
1. Make sure your `Merger` version is at **stable**. To do this, download the latest release which is not `pre-release`. Stable version of `Merger` often contains latest security update and bug fixes. Stick with them to make sure nothing goes wrong.
2. Check out frequently, or subscribe to our [Bugs Notice Board](https://github.com/hifocus/merger/issues/2). All knwon bugs will appear over there and their status will also be updated.

### ICP Notice for China
In some Chinese app, especially for WeChat, the internal browser will display a security remind page for those domains that have no ICP record in China. Obviously, this is not friendly to users and they might doubt the safety of your site. Here are two solutions:
1. Use **ICP recorded domain**, like our demo site: [https://demo.qrcdn.com](https://demo.qrcdn.com)
2. Use **GitHub Pages subdomain**. GitHub's domain was marked as green in QQ and WeChat by somehow without having ICP records. So Use GitHub Pages to build your own `Merger` but do not use a custom domain. Use the default `username.github.io` subdomain. Please try out this one: [https://hifocus.github.io/Merger_Demo/merger.html](https://hifocus.github.io/Merger_Demo/merger.html) to see how it works in WeChat.

## How to configure
The configuration is easy. We made it!

### Head Section
You will need to configure the `head` tag of the `merger.html` first.

```
     <title>Merger Demo - merge your qrcode quicker</title>
```
The `title` tag will decide what to display in browser's tab. Edit it to something like "Pay to David" to make more sense to users.

```
     <meta name="Keywords" content="Merger,open source,hxco,hifocus,merge qrcode,qrcode" />
     <meta name="Description" content="Merger is the most simple way to merge your qrcode together." />     
```
There are `meta` tags with SEO information included in the `head` section. Please remove them if you don't want the search engine to list your site in its results.

```
     <link rel="shortcut icon" type="image/x-icon" href="https://ws1.sinaimg.cn/large/0072Lfvtly1fyegd14voyj30dw0dwt9x.jpg">
```
Here comes with the icon part. Replace the image link with yours to get your own icon in browser's tab. Not sure where to host your icon? Try [imgur](https://imgur.com) or [SM.MS](https://sm.ms) out!

You are more then welcome to edit other parts of the `head` tag if you know what to do, expect the `<meta name="author" content="Huangxin, LF112" />` bit. You can only remove them if you really don't want them to appear while copyright reservation is require if you decide to use this project.

### Main Config Section
Right under the `<body>` tag that you can see underneath the `<head>` section, there is the `Config part`. Configure everything you need here. and no where else.

There are detailed code comments in the `Config part`. Basically, everything is this format:

```
var something = "something actual";
```

Please be careful about the part after the `=`. Don't forget to quote your own information (like your wechat pay link) with the double quotes `""` and add a semicolon `;` at the end.

You will have to fill in your payment links, from WeChat Pay, Alipay, Tenpay(from Mobile QQ) and Paypal. For Wechat Pay, Alipay and Tenpay, you can get your actual link by decoding your payment qrcode. For Paypal, simply create your own [paypal.me](https://paypal.me) link and put it in.

Then you fill in your preferred name and profile photo link (at least 200x200 px). Other variable guide please follow the code comment.

## How to Deploy
`Merger` is a html template so anywhere can run static website would be fine. If you don't have your own `Shared Hosting Service` or `Virtual Private Server`, use service like [GitHub Pages](https://pages.github.com). Simply upload everything involved to your service and serve it from your domain. If you don't have a domain, get one for free from [Freenom](https://freenom.com) or buy one.

## Principle

`Merger` detacts user's `UserAgent` and sort them into different categories. Every sinle category will have different presentation of the site.

If the user opens the site from desktop end (like a PC browser), he will get the desktop view of the site. In this case, he gets to choose a way to pay you. For wechat pay, alipay and tenpay, he will get the direct qrcode instantly (which are generated by JQuery qrcode plugin). He scans it, you can paid. Simple.

If the user opens the site from mobile end, and in a mobile browser (like Chrome for Android), he will still get the option to choose payment method and pay you. The style will be adjusted slightly.

If the users open the site from mobile end, and in those specifc app (wechat pay, alipay, etc.) he will be shown with the direct qrcode. He will need to keep pressing the qrcode until the menu pops out and show the option to `Identify the qrcode`. Then you get paid.

For Mobile QQ only, the internal browser does not support the identify of qrcode that is in `data:image` type (default type), so `Merger` will import the qrcode from the qrcode API, which is configurable in the `Config Part`.

For Alipay only, user will be redirect to the payment link directly. No need for second-time scaning.

## Contribute
Any kind of contribute will be more than welcome.

Please `star` this project if you like it, or using it, or find it helpful to you in any form.

Please consider to donate to me by https://demo.qrcdn.com. It really does take me a long time to develop this project.

## Credit

This project uses several open source projects. Thanks to them.
- [Spectre.css](https://picturepan2.github.io/spectre/). Powers `Merger`'s style.
- [JQuery](https://jquery.com). Powers `Merger`'s javascript code and qrcode's generation.
- [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode). Generate qrcode for `Merger`.
- [jsDelivr](https://jsdelivr.com). Merge `Merger`'s static files to reduce the request amount and its CDN service `cdn.jsdelivr.net` to accerlate the loading speed.
- [hifocus/Grouper](https://jsdelivr.com). Provide with good html framework to draw with.
- [Pure CSS3 Gradient Background Animation](https://codepen.io/P1N2O/pen/pyBNzX) A nice little background animation on [codepen.io](https://codepen.io). Code by [Manuel Pinto](https://codepen.io/P1N2O/).

This project also uses [iconfont](http://iconfont.cn)'s service to display different icons in buttons, and its CDN service `at.alicdn.com` to accerlate the loading speed.

And thanks to [@LF112](https://github.com/lf112). He wrote the `JavaScript` code for several major features. Browse his blog: [https://blog.lf112.net](https://blog.lf112.net) to support him!

## Requirements
Please do keep our copyright information.

If you decide to use `Merger` in any form,

**You may remove:**
- The author meta tag
- The console copyright information (by disabling the `debugmode`)

**You may not remove:**
- Any copyright information in `.js`, `.css` files.
- `merger.html`'s copyright information in code comments (unless you keep the console copyright information by enabling the `debugmode`, which is defaulted.)

If you against our copyright reservation requirements, your name might appears in our shame wall. Which is currently blank.

Please be aware that `Merger` is opensourced and released under the **GNU General Public License v3.0**, you are **not allowed** to disclose source and you are restricted to use the same license when doing modifications. More about permissions, limitations and conditions of our license, please see [https://github.com/hifocus/merger/blob/master/LICENSE](https://github.com/hifocus/merger/blob/master/LICENSE) to learn more in detail.

Author: [@hifocus](https://github.com/hifocus)
