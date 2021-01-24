function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));

// let isDone: boolean = false;  //编译通过
let createdByNewBoolean: Boolean = new Boolean(0);
console.log(createdByNewBoolean)

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// Void  在 ts 中只能赋值为 undefined 或者 null 
// viod 主要用法是定义一个没有返回值的函数吧
let u: void;
// let num: number = u; // Type 'void' is not assignable to type 'number'.\

// any 所有都能被赋值 1.可访问任何属性和方法 2.返回的内容的类型都是任意值
let myFavoriteNumber: any = 'seven';// ||myFavoriteNumber;
myFavoriteNumber = 7;

// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');

// 联合类型 会根据类型推论的规则推断出一个类型：
let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5 被推断成了string
myFavoriteNumber3 = 7;
// myFavoriteNumber3 = true; // Type 'boolean' is not assignable to type 'string | number'.
// console.log(myFavoriteNumber4.length); // 编译时报错 被推断成了 number

// 对象类型接口 赋值的时候，变量的形状必须和接口的形状保持一致
// interface Person {// 少了或者多了一些属性是不允许的
//     name: string;
//     age: number;
// }
interface Person {// 属性可以不存在
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
    age: 12345
}
