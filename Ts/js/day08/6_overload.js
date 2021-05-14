"use strict";
// 2.定义一个调用的函数
function pay(x, y) {
    if (x == undefined) {
        console.log('手机支付');
    }
    else if (y == undefined) {
        console.log("\u73B0\u91D1\u652F\u4ED8\uFF0C\u6536\u60A8" + x + "\u5143");
    }
    else {
        console.log("\u5237\u5361\u652F\u4ED8\uFF0C\u4ECE\u60A8\u5361\u53F7" + x + "\u4E2D\u6263\u6B3E\u6210\u529F...");
    }
}
// 3.调用会限制规范
pay();
pay(23);
pay('65549754', '56');
