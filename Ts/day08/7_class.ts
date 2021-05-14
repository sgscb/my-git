class Student {
    // class 中要想包含一些属性
    // 必须现在构造函数外定义属性
    sname:string=''
    sage:number=0
  constructor(sname: string, sage: number) {
    this.sname = sname;
    this.sage = sage;
  }
  intr(): void {// void 表示没有 return
    console.log(`I'm ${this.sname},I'm${this.sage}`);
  }
}
var lilei2 = new Student("Li Lei", 11);
var hmm = new Student("Man Meimei", 12);
lilei2.intr();
hmm.intr();
