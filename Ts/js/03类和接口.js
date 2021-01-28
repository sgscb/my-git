"use strict";
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function (strigger) {
    };
    return Car;
}());
// 要实现多个接口，我们只需要中间用 逗号 隔开即可。
var Cellphone = /** @class */ (function () {
    function Cellphone() {
    }
    Cellphone.prototype.switchRadio = function (strigger) {
    };
    Cellphone.prototype.checkBatteryStatus = function () {
    };
    return Cellphone;
}());
var Cellphones = /** @class */ (function () {
    function Cellphones() {
    }
    Cellphones.prototype.switchRadio = function (strigger) {
    };
    Cellphones.prototype.checkBatteryStatus = function () {
    };
    return Cellphones;
}());
