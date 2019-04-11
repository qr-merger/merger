<h1 align="center">Merger Documents</h1>

The configuration of [merger](https://github.com/hifocus/merger) is simple. Generally, you would only need to modify the `Config Part` in `merger.html` to create your own merger page.

`Config Part`：[https://github.com/hifocus/merger/blob/master/merger.html#L38](https://github.com/hifocus/merger/blob/master/merger.html#L38)


The format of `Config Part` is: `var something = "something_actual"` Please do not ignore the spaces before and after the equal sign `=`, as well as the double quotes `" "` before and after the `something_actual` part.

## Configure Payment Links

In `Config Part`, you will firstly see 4 lines of codes as below; you must modify them to your own.

```javascript
var wechat = "wxp://f2f0xFuBE5tqPeKuwZxWkpE0CBf4-GkfwdpN";
var alipay = "https://qr.alipay.com/fkx01299q4zug8xxsp2vc0a?t=1545238142543";
var tenpay = "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=26E3D12F23952F04A9553D36B31F18BC3AEA141B073F9DD9BC3747C823819645&u=1031092401&n=惶心";
var paypal = "https://paypal.me/hxco";
```

The table below explained the meanings of variables.

| Variables   |       Repersents        | Official Sites                                         | Link Styles           | Method to Get the Link   |
| ------ | :---------------: | ------------------------------------------------ | ------------------------------------------------- | -------------- |
| wechat |  WeChat Pay  | [https://weixin.qq.com](https://weixin.qq.com)   | `wxp://{personalised-content}`                    | Decode Payment QR Code |
| alipay |  Alipay  | [https://www.alipay.com](https://www.alipay.com) | `https://qr.alipay.com/{personalised-content}`    | Decode Payment QR Code |
| tenpay | QQ Walllet | [https://im.qq.com](https://im.qq.com)           | `https://i.qianbao.qq.com/{personalised-content}` | Decode Payment QR Code |
| paypal |   Paypal   | [https://www.paypal.com](https://www.paypal.com) | `https://paypal.me/{username}`                    | From Website     |

For apps that require decode payment QR Code, please display your payment QR Code in the app, then use the internal save function or screenshot to get the QR Code, after that use QR Code decode program to get the payment link; you can get some QR Code decode programs from the search engine:

- [https://www.google.com/search?q=qr+code+decoder](https://www.google.com/search?q=qr+code+decoder)

For Paypal, you need to generate your personal payment link at [https://paypal.me](https://paypal.me).

If you don't have a Paypal, please leave `var paypal = "xxx` blank or comment it out.
If you don't have either `wechat`, `alipay`, or `tenpay`, please fill in any websites, such as `https://github.com`.

## Configure Nickname and Profile Photo

The next section of `Config Part` needs you to fill in your nickname and profile photo url. This section is as below:

```javascript
// Replace with your id and profile photo link ↓.
var myname = "惶心";
var profile = "https://ae01.alicdn.com/kf/UTB8R57Nn0nJXKJkSaiyq6AhwXXak.jpg";
```

`var myname = "xxx"` needs you to fill in your preffered nickname.
`var profile = "xxx"` needs you to fill in **the url** of your preffered profile photo. If you don't know how to do it, the simplist way is upload your photo to [Imgur](https://imgur.com), then fill in the url returned by Imgur.

```javascript
var profile = "https://i.imgur.com/LgEduDF.jpg";
```

In order to guarantee the highest possible availability, we do not recommend to self-host the profile photo unless you've got total confident.

Now, you have fully configured each variable required.

## Configure Guiding Texts (Optional)

The section after of `Config Part` is guiding texts. These words are used to guide the visitor to the next step. For example, click on the buttons, scan the QR Codes, and so on.

The default guiding texts are as below, you can customise as you wish:

```javascript
// Replace the title and subtitle if preferred (not required) ↓.
var title = "Choose Your Payment Method";
var subtitle = "Follow Further Instruction to Pay to" + myname ;
```

## Debug Mode and API

The last section of `Config Part` contains debug mode switch and the choose of QR Code API. The specific code is as follows：

```javascript
// See if you would like to enable debug mode (as console.log). If debug mode is disabled, the console will be cleared.
// To disable it, comment out (or just delete) the `var debugmode = "xxx" part` ↓.
var debugmode = "true";
// QQ Mobile wouldn't decode qrcode from `data:image`, so for qq mobile only speical qrcode that generate from qrcode api is required.
var qrcodeapi = "https://www.zhihu.com/qrcode?url=";
// var qrcodeapi = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=L|1&choe=UTF-8&chl="; // Inaccessible in China. Backup use only.
```

Normally the debug mode is only enabled during developing process. If enabled, [merger](https://github.com/hifocus/merger) will output some pre-configured notices; they Can easily confirm if a component can work. Comment out or delate directly `var debugmode = "xxx"` to disable debug mode.

[merger](https://github.com/hifocus/merger) generates QR Codes needed locally from [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode), this can save HTTP requests account and accelerate the loading speed. However, QQ Mobile cannot decode QR Codes in `data:image` types which are generated as default by [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode), so at here we still need to use API to generate QR Code for decoding.

The QR Code API is changeable by Modifying `var qrcodeapi = "https://www.zhihu.com/qrcode?url=";` part. You can find more QR Code API from the search engine:
- [https://www.google.com/search?q=qr+code+generate+api](https://www.google.com/search?q=qr+code+generate+api)

Please be aware that you don't have to replace the QR Code API. In addition, please confirm the API you want is operational before you replace to it.

## Configure Page Title and Icon

You can find the following codes from the header of `merger.html`:

```html
<title>Merger - Merge your qrcode together. Even quicker.</title>
```

Modify the content between `<title> </title>` will be able to change the page title.

Modify the `href="xxx"` part in `<link rel="shortcut icon" type="image/x-icon" href="https://ae01.alicdn.com/kf/UTB8R57Nn0nJXKJkSaiyq6AhwXXak.jpg">` to change page icon. You may use your configured profile photo.

## Choose Loading Source for Static Files

[merger](https://github.com/hifocus/merger) provides options to switch between [jsDelivr CDN](https://www.jsdelivr.com) and local for static resources at [version 0.14](https://github.com/hifocus/merger/releases/tag/0.14). Although [jsDelivr](https://www.jsdelivr.com) has excellent loading speed throughout the globe without a question, but under some special situations the users might want to load static files from local. Below states how to switch loading source for static files.

### At Header of merger.html {docsify-ignore}

```html
<!-- Load style files from local -->
<!-- <link rel="stylesheet" href="assets/styles/spectre.css/spectre.min.css">
     <link rel="stylesheet" href="assets/styles/style.min.css"> -->

<!-- Load style files from jsDelivr - Default -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/gh/picturepan2/spectre@0.5.7/dist/spectre.min.css,gh/hifocus/merger@0.14/assets/styles/style.min.css"/>
```
The defualted setting is use jsDelivr CDN with files combination function enabled. If you wish to load relavent files from local, please comment out or delete this line of code:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/gh/picturepan2/spectre@0.5.7/dist/spectre.min.css,gh/hifocus/merger@0.14/assets/styles/style.min.css"/>
```

And reverse comment (recover) these two lines of codes:

```html
<!-- <link rel="stylesheet" href="assets/styles/spectre.css/spectre.min.css">
     <link rel="stylesheet" href="assets/styles/style.min.css"> -->
```

The final header after modification is as follows:

```html
<!-- Load style files from local -->
<link rel="stylesheet" href="assets/styles/spectre.css/spectre.min.css">
<link rel="stylesheet" href="assets/styles/style.min.css">

<!-- Load style files from jsDelivr - Default -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/gh/picturepan2/spectre@0.5.7/dist/spectre.min.css,gh/hifocus/merger@0.14/assets/styles/style.min.css"/> -->
```

---

Now, you have completed the configuration of [merger](https://github.com/hifocus/merger).

Major Mistake Fixes With Optiumise on Requests Amount

