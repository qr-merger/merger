<p align="center">
<img src="https://i.imgur.com/HuooObj.jpg" alt="Grouper Render Poster">
</p>

<a href="https://grouper.hxco.de/Grouper.html" target="_blank"><h1 align="center">Grouper.html</h1></a>

<p align="center">
<a href="https://tech.hxco.de" target="_blank"><img alt="Author" src="https://img.shields.io/badge/author-Huangxin-red.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/Grouper/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/hifocus/Grouper.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/Grouper/stargazers"><img alt="Contributors" src="https://img.shields.io/github/stars/hifocus/Grouper.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/Grouper/fork"><img alt="Forks" src="https://img.shields.io/github/forks/hifocus/Grouper.svg?style=flat-square"/></a>
<a href="https://github.com/hifocus/Grouper/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/hifocus/Grouper.svg?style=flat-square"/></a>
</p>

> 🙂 The Best Way to Share Your Chatting Group to Public

## Introduction

Grouper is a simple `HTML` page which can help you share your [QQ](https://im.qq.com) Groups to public easily.

[See Our Blog Post (Chinese Introduction & Documents Also Inclued)](https://tech.hxco.de/announcement/grouper.html)

## Features

- Easy to config.
- Excellent performance. 
- Muilt-devices optimization.
- Dynamic background effects.
- More features waiting for you to discover: [https://Grouper.HXCO.DE/Grouper.html](https://Grouper.HXCO.DE/Grouper.html)

## Performance

According to our tests, when we use a CDN, the entire site can be fully loaded in 1 second. Tested in a normal home bandwidth network environment.

<img src="https://i.imgur.com/4zIzeJJ.png" alt="Grouper Performance Test">

## Config

1. Download the whole repo [here](https://github.com/hifocus/Grouper/archive/master.zip) or clone it to local.
1. Open `Grouper.html`.
1. You may see the following code between line `34` and `41`:
```        
        <script>
            // Fill In Your QQ Group Number And Join Link
            var groupnumber = "579332933";
            var joinlink = "http://qm.qq.com/cgi-bin/qm/qr?k=F2u_B2RzMJYVkIFAy8aD_9TdMgMDnRF6";
            // Fill In Your QQ Group Name And Description
            var groupname = "惶心剑阁";
            var groupdescription = "黄埃散漫风萧索 云栈萦纡登剑阁";
        </script>
```
4. Modifiy `groupnumber` `joinlink` `groupname` `groupdescription`. For a better experience, please get the `joinlink` by decoding your group QR code.
5. You are done! Rename `Grouper.html` to `index.html`, then upload the entire site to your server, serve it through one of your domain or subdomain, then share it to everyone!

## Credit

Many thanks to [@Dreamer-Paul](https://github.com/Dreamer-Paul), he helped me a lot when developing this project.
The original version was done by [@nexmoe](https://github.com/nexmoe), opensourced at [his blog](https://i.chainwon.com/946.html).

If you have any further questions, please open a `issue`. Pull requests will be most welcome. 

If you like this project, don't forget to star it! <a href="https://github.com/hifocus/Grouper/stargazers"><img alt="Contributors" src="https://img.shields.io/github/stars/hifocus/Grouper.svg?style=social"/></a>


Authur: [@hifocus](https://github.com/hifocus) | Blog: [Tech HXCO](https://tech.hxco.de)


