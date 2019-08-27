
                     // Merger - Merge Your Qrcode Together. Even Quicker.
                     // User docs: https://merger.hxco.dev/#/
                     // Released under GNU General Public License v3.0. Open source at https://github.com/hifocus/merger.
                     // Author @hifocus (https://github.com/hifocus), @LF112 (https://github.com/lf112)
                     // Copyright reservation is required.
                     
                     var client;
                     var selected;

                     // Set profile photo
                     document.getElementById("i").style.background = "url('" + profile + "') no-repeat center/cover";                     
 
                     // UserAgent Verify Part Starts
                     var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
 
                    //  document.getElementById("titleinfo").innerHTML = "";
                     
                    // To add spaces before and after the user's name
                    // if first or final character contains English or number
                    var firstchar = myname.charAt(0); // get first character
                    var lastchar = myname.charAt(myname.length - 1); // get last character
                    var english = /^[A-Za-z0-9]*$/; // "select" all English character and numbers
                    if (english.test(firstchar || lastchar)) { // See if first or last character matches condition stated above
                        console.log("English or numbers in user name was detected")
                        var finalname = " " + myname + " "; // add spaces
                        var finalsub = subtitle.replace(myname, finalname); // Replace name in subtitle
                    }
                    else {
                        var finalname = myname; // if condition stated above is not matched, do nothing
                        console.log("English or numbers in user name was not detected")
                    }

                     // General UserAgent verify rules
                     if (navigator.userAgent.match(/Alipay/i)) {
                         console.log("ALIPAY CLIENT");
                         // Redirect directly
                         window.location.href = alipay;
                         var title = "";
                         var finalsub = "";
                         removal();
                     }
                     else if (navigator.userAgent.match(/MicroMessenger\//i)) {
                        if(location.href.substr(location.href.lastIndexOf('#')+1) == "showqrcode" && !selected) document.getElementById('showqrcode').style.display = "none";
                        console.log("WECHAT CLIENT");
                        client = wechat;
                         // Click the button, import from js
                        document.getElementById("toclick").click();
                        document.getElementById("titleinfo").innerHTML = "长按识别二维码 向" + finalname + "支付";
                        var title = "";
                        var finalsub = "";
                        removal();
                         }
                     
                     else if (navigator.userAgent.match(/QQ\//i)) {
                         console.log("MOBILE QQ CLIENT");
                         var title = "";
                         var finalsub = "";
                         removal();
                         window.location.href = window.location.href.match(/^[^\#\?]+/)[0] + "#showqrcode";
                         document.getElementById("titleinfo").innerHTML = "长按识别二维码 向" + finalname + "支付";
                        //  Melt the car door (((
                         document.getElementById("qrcontainer").removeChild(document.getElementById("currentqrcode")); // remove default qrcode (mobile qq only)
                         // Import from api
                         document.getElementById("tenpayonly").src = qrcodeapi + urlencode(tenpay);
                     }
 
                     // Verify if mobile browser only
                     else {
                        if(location.href.substr(location.href.lastIndexOf('#')+1) == "showqrcode" && !selected) document.getElementById('showqrcode').style.display = "none";
                         document.getElementById('qrcodeclose').onclick = function (){ 
                             document.getElementById('currentqrcode').innerHTML = "";  
                             if(document.getElementById('showqrcode').style.display == "flex") document.getElementById('showqrcode').style.display = "";
                         }
                     }
                     if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
                         console.log("MOBILE BROWSER CLIENT");
                     }
                     else {
                         console.log("DESKTOP BROWSER CLIENT");
                     }
                     // UserAgent Verify Part Ends
                 
                         //  Verify if `paypal` is defined
                         if (typeof paypal !== "string") {
                             document.getElementById("depends").removeChild(document.getElementById("paypalbtn"));
                             console.log("PAYPAL BUTTON REMOVED");
                         }
                             else {
                                 function openbox() {
                                     selected = "yes";
                                     window.open(paypal, "_blank", "toolbar=no,scrollbars=no,visible=none,width=360,height=640");
                                 }
                                 console.log("PAYPAL BUTTON OPERATING")
                             }
 
                             // Onclick Function Part Starts         
                             function openwechat() {
                                 selected = "yes";
                                 document.getElementById("titleinfo").innerHTML = "微信扫一扫 向" + finalname + "支付";
                                 client = wechat;
                                 showqrcode();
                             }
                             function openalipay() {
                                 selected = "yes";
                                 document.getElementById("titleinfo").innerHTML = "支付宝扫一扫 向" + finalname + "支付";
                                 client = alipay;
                                 showqrcode();
                             }
                             function opentenpay() {
                                 selected = "yes";
                                 document.getElementById("titleinfo").innerHTML = "手机QQ扫一扫 向" + finalname + "支付";
                                 client = tenpay;
                                 showqrcode();
                             }
                             function removal() {
                                document.getElementById("h").removeChild(document.getElementById("i")); // remove profile photo
                                document.getElementById("pending").removeChild(document.getElementById("depends")); // remove buttons
                                document.getElementById("btncontainer").removeChild(document.getElementById("qrcodeclose")); //remove exit buttons
                                console.log("REMOVAL DONE");
                             }
                             function urlencode(String) { // Code from MKBlog - http://lab.mkblog.cn/oneqrcode/
                                return encodeURIComponent(String).replace(/'/g,"%27").replace(/"/g,"%22");	
                            }
                             // Onclick Function Part Ends
 
                             // Fill in tile and subtitle
                             document.getElementById("name").innerHTML = title;
                             document.getElementById("description").innerHTML = finalsub;
 
                             // See if `debugmode` is defined
                                if (typeof debugmode !== "undefined" && debugmode !== null) {
                                    console.log("DEBUG MODE ENABLED ↑");
                                    // Copyright console log from https://github.com/MoePlayer/APlayer/. Thank you.
                                    console.log(`${'\n'} %c merger.html %c https://github.com/hifocus/merger ${'\n'}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
                                }
                                else {
                                    console.clear();
                                    console.log("DEBUG MODE DISABLED ↑");
                                }

                                function showqrcode() {
                                    if (location.href.substr(location.href.lastIndexOf('#') + 1) == "showqrcode" && selected == "yes") document.getElementById('showqrcode').style.display = "flex";
                                    $("#currentqrcode").qrcode({
                                        render: "image",
                                        size: 300 * scale,
                                        text: client
                                    });
         }                             