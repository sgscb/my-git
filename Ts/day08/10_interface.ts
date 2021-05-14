// 接口的目的是为了规范（只定义属性，不要的属性值）
interface IStudent {
  sname: string;
  sage: number;
  intr: () => void; // 只定义方法名、参数和返回值，不要写{}方法实现！
}

class Student2 implements IStudent {
  sname: string = "lilei";
  sage: number = 13;
  className: string = ""; // 可以随意添加
  constructor(sname: string, sage: number, className: string) {
    this.sname = sname;
    this.sage = sage;
    this.className = className;
  }
  intr() {
    console.log(`I'm ${this.sname},I'm ${this.sage}`);
  }
}

var lilei3 = new Student2("LI Lei", 11, "初一2班");
console.log(lilei3);
lilei3.intr();
