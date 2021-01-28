"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// private 私有的  protected 受保护的 子类可以访问
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('lily');
// snake.name="132"
// 继承的特性 
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
var xiaobao = new Dog('xiaobao');
console.log(xiaobao.run());
console.log(xiaobao.bark());
// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return 'Meow, ' + _super.prototype.run.call(this);
    };
    Cat.categories = ['mammal'];
    return Cat;
}(Animal));
var maomao = new Cat('maomao');
console.log(maomao.run()); //  ?----
console.log(Cat.categories);
