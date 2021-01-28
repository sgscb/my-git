"use strict";
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function echo(arg) {
    return arg;
}
var result = echo(123);
console.log(result);
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any
function echo2(arg) {
    return arg;
}
console.log(echo("dskss"));
// 泛型也可以传多个值
// 泛型也可以传入多个值
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result3 = swap(['string', 123]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
echoWithLength('str');
var obj = echoWithLength({ length: 10, width: 10 });
var arr2 = echoWithLength([1, 2, 3]);
// echoWithLength(123) // 不能传没有length属性的值
