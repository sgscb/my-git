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
// Void  在 ts 中只能赋值为 undefined 或者 null 
// viod 主要用法是定义一个没有返回值的函数吧
var u;
// let num: number = u; // Type 'void' is not assignable to type 'number'.\
// any 所有都能被赋值 1.可访问任何属性和方法 2.返回的内容的类型都是任意值
var myFavoriteNumber = 'seven'; // ||myFavoriteNumber;
myFavoriteNumber = 7;
// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');
// 联合类型 会根据类型推论的规则推断出一个类型：
var myFavoriteNumber3;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5 被推断成了string
myFavoriteNumber3 = 7;
var tom = {
    name: 'Tom',
    age: 123
};
var lilei = {
    id: 12646,
    name: 'lilei',
    age: 25,
    gender: 'male'
};
// console.log(lilei)
