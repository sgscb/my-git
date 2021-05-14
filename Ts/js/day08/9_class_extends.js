"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father = /** @class */ (function () {
    function Father() {
        //   private; // 私有的
        //   public; // 公开的（默认）
        //   protected; // 受保护的
        this.money = "爸爸的 500元";
    }
    Father.prototype.pay = function () {
        console.log("\u7238\u7238\u81EA\u5DF1\u82B1" + this.money);
    };
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Son.prototype.pay = function () {
        console.log("\u5B69\u5B50\u82B1" + this.money);
    };
    return Son;
}(Father));
var s1 = new Son();
s1.pay();
var f1 = new Father();
console.log("\u5916\u5730\u4EBA\u4E5F\u77E5\u9053" + f1.money);
console.log(f1.pay());
