<h1 align="center">Merger 使用文档</h1>

[merger](https://github.com/hifocus/merger) 的配置十分简单。通常来说，你只要修改 `merger.html` 里面的 `Config Part` 即可配置你自己的 merger 页面。

> [在 GitHub.com 上浏览 Config Part](https://github.com/hifocus/merger/blob/master/merger.html#L33-L69)

在 `Config Part` 内，每一个变量都会有详细的英文注释帮助你的配置。如果无法阅读，你依然可以参照本页面。

在 `Config Part` 所使用的 Javascirpt 代码里，每一**行**配置都需要以半角分号 `;` 结尾。如果缺少或者填入了错误的分号，如全角分号 `；`，`Config Part` 将无法运作。

`Config Part` 的格式为：`var something = "something_actual"` （定义 某物 = 实际值）。同样地，请勿忽略等于号 `=` 前后的空格以及 `something_acutal` 前后的半角双引号 `" "`。

## 配置用途

在 `Config Part` 内，你需要首先定义 merger 的用途。

目前，我们提供两种用途：payment（付款）和 donate（捐款）。


```javascript
var usage = "payment";
// var usage = "donate";
```

提供这些变量是为了方便地标示页面的用途，例如：有人希望为博客的打赏通道创建一个 merger，此时就可以用 "donate" 变量；而有人希望为售卖的商品设立一个 merger 付款通道，此时就可以使用 "payment" 变量。

当不同的变量被设置，页面的显示文字也会随之改变。若 “多语言” 功能被禁用，此功能也会变为不可用。

## 配置支付链接

在 `Config Part` 中，你需要定义自己的收款链接 - 将以下内容修改为自己的：

```javascript
var wechat = "wxp://f2f0xFuBE5tqPeKuwZxWkpE0CBf4-GkfwdpN";
var alipay = "https://qr.alipay.com/fkx01299q4zug8xxsp2vc0a?t=1545238142543";
var tenpay = "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=26E3D12F23952F04A9553D36B31F18BC3AEA141B073F9DD9BC3747C823819645&u=1031092401&n=惶心";
var paypal = "https://paypal.me/hxco";
```

下列表格解释了各个变量的含义。

| 变量   |       代表        | 官方网站                                         | 链接样式                                          | 链接获取方式   |
| ------ | :---------------: | ------------------------------------------------ | ------------------------------------------------- | -------------- |
| wechat |  微信 / 微信支付  | [https://weixin.qq.com](https://weixin.qq.com)   | `wxp://{personalised-content}`                    | 解码支付二维码 |
| alipay |  支付宝 / 支付宝  | [https://www.alipay.com](https://www.alipay.com) | `https://qr.alipay.com/{personalised-content}`    | 解码支付二维码 |
| tenpay | 腾讯 QQ / QQ 钱包 | [https://im.qq.com](https://im.qq.com)           | `https://i.qianbao.qq.com/{personalised-content}` | 解码支付二维码 |
| paypal |   Paypal / 贝宝   | [https://www.paypal.com](https://www.paypal.com) | `https://paypal.me/{username}`                    | 网页端获取     |

对于需要解码支付二维码获取支付链接的应用，请在应用内显示你的支付二维码，用内置保存功能 / 屏幕截图获取该二维码，随后使用二维码解码应用即可获取支付链接；你可以从搜索引擎获取一些二维码解码程序：

- [https://www.google.com/search?q=qr+code+decoder](https://www.google.com/search?q=qr+code+decoder)
- [https://www.baidu.com/s?wd=二维码解码](https://www.baidu.com/s?wd=二维码解码)

对于 Paypal，你需要到 [https://paypal.me](https://paypal.me) 生成个人支付链接。

!> 如果你没有，或者不想展示以上四个收款方式的任意一个 / 数个，你可以删除或留空相应的变量。

如：我没有支付宝，且不希望展示我的 Paypal 收款地址：

```javascript
var wechat = "wxp://f2f0xFuBE5tqPeKuwZxWkpE0CBf4-GkfwdpN";
// Alipay removed
var tenpay = "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=26E3D12F23952F04A9553D36B31F18BC3AEA141B073F9DD9BC3747C823819645&u=1031092401&n=惶心";
var paypal = ""; // Leave paypal to blank
```

## 配置昵称和头像地址

`Config Part` 下一部分需要填入昵称和头像地址。这部分如下所示：

```javascript
// Replace with your id and profile photo link ↓.
var myname = "惶心";
var profile = "https://ae01.alicdn.com/kf/UTB8R57Nn0nJXKJkSaiyq6AhwXXak.jpg";
```

`var myname = "xxx"` 部分需要填入你喜欢的任意昵称。
`var profile = "xxx"` 部分需要填入你喜欢的头像的**地址**。如果你不知道怎么做，最简单的方式是将图片上传至 [https://sm.ms](https://sm.ms)，然后填入 SM.MS 返回的地址，如：

```javascript
var profile = "https://i.loli.net/2019/04/10/5cad38f6e8694.png";
```

!> 为了保证尽可能高的可用性，除非有绝对自信，否则不推荐自主托管头像图片文件。

?> 至此，你已经配置完成所有必要变量。

## 动态页面标题

Merger 支持动态页面标题。此功能会将你于上方设置的昵称嵌入于页面标题中，让用户清晰地知道付款对象。

同时，`branding` 变量会自动在标题后加入 `| Merger` 后缀，说明此页面由 merger 驱动。但是，你可以自由选择是否显示这个后缀。将 `branding` 变量设置为 `false` 以禁用添加后缀。

```javascript
var branding = false; // Disable branding
// var branding = true;
```

## 多语言

Merger 支持多语言用户界面。此功能会检测用户的浏览器语言，从而以不同的语言显示页面文字（目前支持 简体中文、繁体中文、英语）。

多语言功能需要配置三个变量：`myname_hans`, `myname_hant` 和 `myname_eng`；分别为于简体中文、繁体中文和英语界面下显示的你的昵称。

你可以分别配置三个变量的内容；若你不希望指定任意语言的内容，将变量内容修改为 `myname` 即可；例如：`var mayname_eng = myname`

```javascript
var multilingual = true; // Set variable to false to disable multilingual feature
var myname_hans = myname // Default setting for Chinese Simplified users; change it to a speicify value if needed
var myname_hant = "惶心"; // Choose how you want your name to be displayed for Traditional Chinese users
var myname_eng = "Focus Chen"; // Choose how you want your name to be displayed for English / Non-Chinese users - 
```

?> 你也可以通过设置 ` var multilingual = false;` 以禁用多语言。

## 配置引导文字

!> 仅在 multilingual 功能被禁用时，这个部分才会生效

`Config Part` 下一部分为引导文字。这些文字被用以引导访客进行下一步的操作；例如点击按钮，扫码等等。

默认的引导文字如下，你可以随意自定义：

```javascript
// Replace the title and subtitle if preferred (not required) ↓.
var title = "选择你的支付方式";
var subtitle = "跟随进一步的指示以向" + myname + "付款";
```

## 二维码接口

`Config Part` 最后的部分为调试模式的开关以及二维码应用程序接口（API）的选择。

[merger](https://github.com/hifocus/merger) 默认从 [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode) 本地生成所需的二维码，这样能够节省 HTTP 请求数和加快页面加载速度。然而，QQ 手机版无法解码 [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode) 默认生成 `data:image` 类型的二维码图片，故此这里仍然需要使用二维码接口（API）生成二维码以供解码。

```javascript
var qrcodeapi = "https://www.zhihu.com/qrcode?url=";
```

你也可以自由使用你喜爱的接口。

!> 通过非 HTTPS 调用（即 HTTP）的内容不会被加载。

修改 `var qrcodeapi = "https://www.zhihu.com/qrcode?url=";` 部分即可更换调用的二维码 API。你可以从搜索引擎找到更多的二维码 API：

- [https://www.google.com/search?q=qr+code+generate+api](https://www.google.com/search?q=qr+code+generate+api)
- [https://www.baidu.com/s?wd=二维码生成接口](https://www.baidu.com/s?wd=二维码生成接口)

请注意，一般情况下无需替换二维码 API。此外，替换之前请确保 API 可用。

## 选择静态文件加载源

[merger](https://github.com/hifocus/merger) 在 [0.14 版本](https://github.com/hifocus/merger/releases/tag/0.14) 为静态资源提供了在 [jsDelivr CDN](https://www.jsdelivr.com) 和本地之间切换的选项。虽然 [jsDelivr](https://www.jsdelivr.com) 毫无疑问在全球范围内都拥有优秀的加载速度，但是在某些特殊情况下使用者也许想要从本地加载静态资源。以下说明了如何切换静态文件加载源。

### 在 merger.html 的头部 {docsify-ignore}

```html
<!-- Load style files from local -->
<!-- <link rel="stylesheet" href="assets/styles/spectre.css/spectre.min.css">
     <link rel="stylesheet" href="assets/styles/style.min.css"> -->

<!-- Load style files from jsDelivr - Default -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/gh/picturepan2/spectre@0.5.7/dist/spectre.min.css,gh/hifocus/merger@0.14/assets/styles/style.min.css"/>
```
默认设定为使用 jsDelivr CDN 并且使用了文件合并功能。如果希望从本地加载对应的文件，请注释或者删除这行代码：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/gh/hifocus/merger@0.20/assets/styles/spectre.css/spectre-modified.min.css,gh/hifocus/merger@0.20/assets/styles/style.min.css">
```

并反向注释（恢复）这两行代码：

```html
    <!-- <link rel="stylesheet" href="assets/styles/spectre.css/spectre-modified.min.css">
    <link rel="stylesheet" href="assets/styles/style.css"> -->
```

最终修改以后的头部如下：

```html
<!-- Load style files from local -->
<link rel="stylesheet" href="assets/styles/spectre.css/spectre-modified.min.css">
<link rel="stylesheet" href="assets/styles/style.css">

<!-- Load style files from jsDelivr - Default -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/gh/hifocus/merger@0.20/assets/styles/spectre.css/spectre-modified.min.css,gh/hifocus/merger@0.20/assets/styles/style.min.css"> -->
```

### 在 merger.html 的尾部 {docsify-ignore}

```html
<!-- Footer Scripts -->
<!-- Please do not swap orders -->
<!-- Load Javascript files from jsDelivr - Default -->
<script src="https://cdn.jsdelivr.net/combine/gh/hifocus/merger@0.20/assets/js/jQuery/jquery.min.js,gh/hifocus/merger@0.20/assets/js/jquery-qrcode/jquery-qrcode.min.js,gh/hifocus/merger@0.20/assets/js/function.min.js,gh/hifocus/merger@0.20/assets/js/font_974919_xgtacm93vxp.min.js"></script>
    
<!-- Load Javascript files from local -->
<!-- <script src="assets/js/jQuery/jquery.min.js"></script>
<script src="assets/js/jquery-qrcode/jquery-qrcode.min.js"></script>
<script src="assets/js/dev-files/function.original.js"></script>
<script src="assets/js/font_974919_xgtacm93vxp.js"></script> -->
```

默认设定为使用 jsDelivr CDN 并且使用了文件合并功能。如果希望从本地加载对应的文件，请注释或者删除这行代码：

```html
<script src="https://cdn.jsdelivr.net/combine/gh/hifocus/merger@0.20/assets/js/jQuery/jquery.min.js,gh/hifocus/merger@0.20/assets/js/jquery-qrcode/jquery-qrcode.min.js,gh/hifocus/merger@0.20/assets/js/function.min.js,gh/hifocus/merger@0.20/assets/js/font_974919_xgtacm93vxp.min.js"></script>
```

并反向注释（恢复）这两行代码：

```html
<!-- <script src="assets/js/jQuery/jquery.min.js"></script>
<script src="assets/js/jquery-qrcode/jquery-qrcode.min.js"></script>
<script src="assets/js/dev-files/function.original.js"></script>
<script src="assets/js/font_974919_xgtacm93vxp.js"></script> -->
```

最终修改以后的尾部如下：

```html
<!-- Footer Scripts -->
<!-- Please do not swap orders -->
<!-- Load Javascript files from jsDelivr - Default -->
<!-- <script src="https://cdn.jsdelivr.net/combine/gh/hifocus/merger@0.20/assets/js/jQuery/jquery.min.js,gh/hifocus/merger@0.20/assets/js/jquery-qrcode/jquery-qrcode.min.js,gh/hifocus/merger@0.20/assets/js/function.min.js,gh/hifocus/merger@0.20/assets/js/font_974919_xgtacm93vxp.min.js"></script> -->
    
<!-- Load Javascript files from local -->
<script src="assets/js/jQuery/jquery.min.js"></script>
<script src="assets/js/jquery-qrcode/jquery-qrcode.min.js"></script>
<script src="assets/js/dev-files/function.original.js"></script>
<script src="assets/js/font_974919_xgtacm93vxp.js"></script>
```

> 至此，你已经将 [merger](https://github.com/hifocus/merger) 配置完毕。
