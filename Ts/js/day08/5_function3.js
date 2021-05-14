"use strict";
var addAll = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var n = arr_1[_a];
        result += n;
    }
    return result;
};
var addRes1 = addAll(1, 2, 3);
console.log(addRes1);
var addRes1 = addAll(1, 2, 3, 4, 5);
console.log(addRes1);
