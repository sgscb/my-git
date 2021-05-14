"use strict";
var Student2 = /** @class */ (function () {
    function Student2(sname, sage, className) {
        this.sname = "lilei";
        this.sage = 13;
        this.className = ""; // 可以随意添加
        this.sname = sname;
        this.sage = sage;
        this.className = className;
    }
    Student2.prototype.intr = function () {
        console.log("I'm " + this.sname + ",I'm " + this.sage);
    };
    return Student2;
}());
var lilei3 = new Student2("LI Lei", 11, "初一2班");
console.log(lilei3);
lilei3.intr();
