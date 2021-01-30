"use strict";
// 类型别名 和 交叉类型  类型别名，就是给类型起一个别名，让它可以更方便的被重用。
var ref;
ref = function (x, y) { return x + y; };
console.log(ref(6, 7));
var ref2 = function (e, t) { return e + t; };
console.log(ref2(3, 6));
var result2 = '123';
var toWhere = 'Up';
