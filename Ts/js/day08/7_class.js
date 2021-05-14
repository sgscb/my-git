"use strict";
var Student = /** @class */ (function () {
    function Student(sname, sage) {
        // class 中要想包含一些属性
        // 必须现在构造函数外定义属性
        this.sname = '';
        this.sage = 0;
        this.sname = sname;
        this.sage = sage;
    }
    Student.prototype.intr = function () {
        console.log("I'm " + this.sname + ",I'm" + this.sage);
    };
    return Student;
}());
var lilei2 = new Student("Li Lei", 11);
var hmm = new Student("Man Meimei", 12);
lilei2.intr();
hmm.intr();
