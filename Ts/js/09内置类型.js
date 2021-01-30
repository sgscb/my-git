"use strict";
var a = [1, 2, 3];
// 大家可以看到这个类型，不同的文件中有多处定义，但是它们都是 内部定义的一部分，然后根据不同的版本或者功能合并在了一起，一个interface 或者 类多次定义会合并在一起。这些文件一般都是以 lib 开头，以 d.ts 结尾，告诉大家，我是一个内置对象类型欧
var data = new Date();
var reg = /abc/;
console.log(Math.pow(2, 3));
// DOM 和 BOM 标准对象
// document 对象，返回的是一个 HTMLElement
var body = document.body;
// document 上面的query 方法，返回的是一个 nodeList 类型
var allLis = document.querySelectorAll('li');
//当然添加事件也是很重要的一部分，document 上面有 addEventListener 方法，注意这个回调函数，因为类型推断，这里面的 e 事件对象也自动获得了类型，这里是个 mouseEvent 类型，因为点击是一个鼠标事件，现在我们可以方便的使用 e 上面的方法和属性。
document.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e);
});
