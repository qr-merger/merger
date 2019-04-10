<h1 align="center">merger 使用文档</h1>

[merger](https://github.com/hifocus/merger) 的配置十分简单。通常来说，你只要修改 `merger.html` 里面的 `Config Part` 即可创建你自己的 merger 页面。

`Config Part`：[https://github.com/hifocus/merger/blob/master/merger.html#L38](https://github.com/hifocus/merger/blob/master/merger.html#L38)

在 `Config Part` 内，每一**行**配置都需要以半角分号 `;` 结尾。如果缺少或者填入了错误的分号，如全角的`；`，`Config Part` 将无法运作。

`Config Part` 的格式为：`var something = "something_actual"`。同样地，请勿忽略等于号 `=` 前后的空格以及 `something_acutal` 前后的半角双引号 `" "`。

## 配置支付链接

在 `Config Part` 中，你会首先看到如下四行代码；你需要将他们修改成你自己的：

```javascript
var wechat = "wxp://f2f0xFuBE5tqPeKuwZxWkpE0CBf4-GkfwdpN";
var alipay = "https://qr.alipay.com/fkx01299q4zug8xxsp2vc0a?t=1545238142543";
var tenpay =
  "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=26E3D12F23952F04A9553D36B31F18BC3AEA141B073F9DD9BC3747C823819645&u=1031092401&n=惶心";
var paypal = "https://paypal.me/hxco";
```

下列表格解释了各个变量的含义。

| 变量   |       代表        | 官方网站                                         | 链接样式                                          | 链接获取方式   |
| ------ | :---------------: | ------------------------------------------------ | ------------------------------------------------- | -------------- |
| wechat |  微信 / 微信支付  | [https://weixin.qq.com](https://weixin.qq.com)   | `wxp://{personalised-content}`                    | 解码支付二维码 |
| alipay |  支付宝 / 支付宝  | [https://www.alipay.com](https://www.alipay.com) | `https://qr.alipay.com/{personalised-content}`    | 解码支付二维码 |
| tenpay | 腾讯 QQ / QQ 钱包 | [https://im.qq.com](https://im.qq.com)           | `https://i.qianbao.qq.com/{personalised-content}` | 解码支付二维码 |
| paypal |   Paypal / 贝宝   | [https://www.paypal.com](https://www.paypal.com) | `https://paypal.me/{username}`                    | 网页端获取     |

对于需要解码支付二维码获取支付链接的应用，请在应用内显示你的支付二维码，用内置保存功能 / 屏幕截图获取该二维码，随后使用二维码解码程序即可获取支付链接；你可以从搜索引擎获取一些二维码解锁程序：
- [https://www.google.com/search?q=qr+code+decoder](https://www.google.com/search?q=qr+code+decoder)
- [https://www.baidu.com/s?wd=二维码解码](https://www.baidu.com/s?wd=二维码解码)

对于 Paypal，你需要到 [https://paypal.me](https://paypal.me) 生成个人支付链接。

如果你没有 Paypal，请留空或者注释掉 `var paypal = "xxx` 一行。
如果你没有 `wechat`, `alipay`, `tenpay` 内的任意一个，请填入任意网址，例如 `https://github.com`。

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

为了保证尽可能高的可用性，除非有绝对自信，否则不推荐自主托管头像图片文件。
至此，你已经配置完成所有必要变量。

## 配置引导文字（非必须）

`Config Part` 下一部分为引导文字。这些文字被用以引导访客进行下一步的操作；例如点击按钮，扫码等等。

默认的引导文字如下，你可以随意自定义：

```javascript
// Replace the title and subtitle if preferred (not required) ↓.
var title = "选择你的支付方式";
var subtitle = "跟随进一步的指示以向" + myname + "付款";
```

## 勘误模式以及应用程序编程接口

`Config Part` 最后的部分为勘误模式的开关以及二维码应用程序接口（API）的选择。具体代码如下：

```javascript
// See if you would like to enable debug mode (as console.log). If debug mode is disabled, the console will be cleared.
// To disable it, comment out (or just delete) the `var debugmode = "xxx" part` ↓.
var debugmode = "true";
// QQ Mobile wouldn't decode qrcode from `data:image`, so for qq mobile only speical qrcode that generate from qrcode api is required.
var qrcodeapi = "https://www.zhihu.com/qrcode?url=";
// var qrcodeapi = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=L|1&choe=UTF-8&chl="; // Inaccessible in China. Backup use only.
```

勘误模式一般只在开发的时候启用。如果启用，[merger](https://github.com/hifocus/merger) 会在控制台输出一些预先设定的提示；能够方便地确认某个组件能够工作。注释掉或者直接删除 `var debugmode = "xxx"` 这部分即可禁用勘误模式。

[merger](https://github.com/hifocus/merger) 默认从 [lrsjng/jquery-qrcode](https://github.com/lrsjng/jquery-qrcode) 本地生成所需的二维码，这样能够节省 HTTP 请求数量和加快页面加载速度。然而，QQ 手机版无法解码 [merger](https://github.com/hifocus/merger) 默认生成 `data:image` 类型的二维码图片，故此这里仍然需要使用应用程序编程接口（API）生成二维码以供解码。

修改 `var qrcodeapi = "https://www.zhihu.com/qrcode?url=";` 部分即可更换调用的二维码 API。你可以从搜索引擎找到更多的二维码 API：
- [https://www.google.com/search?q=qr+code+generate+api](https://www.google.com/search?q=qr+code+generate+api)
- [https://www.baidu.com/s?wd=二维码生成接口](https://www.baidu.com/s?wd=二维码生成接口)

请注意，一般情况下无需替换二维码 API。此外，替换之前请确保 API 可用。

## 配置页面标题和图标

你可以在 `merger.html` 的头部（header）找到这行代码：

```html
<title>Merger - Merge your qrcode together. Even quicker.</title>
```

更改 `<title> </title>` 中间的内容即可更换页面标题。


修改下方的 `<link rel="shortcut icon" type="image/x-icon" href="https://ae01.alicdn.com/kf/UTB8R57Nn0nJXKJkSaiyq6AhwXXak.jpg">` 内的 `href="xxx"` 部分即可修改页面图标。可以使用已经配置了的头像图片。

-------------------------------

至此，你已经将 [merger](https://github.com/hifocus/merger) 配置完毕。