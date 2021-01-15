"use strict";
function sayHello(person) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    }
    else {
        throw new Error('person is not a string');
    }
}
var user = 'Tom';
console.log(sayHello(user));
// let isDone: boolean = false;  //编译通过
var createdByNewBoolean = new Boolean(0);
console.log(createdByNewBoolean);
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
