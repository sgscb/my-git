class Father {
  //   private; // 私有的
  //   public; // 公开的（默认）
  //   protected; // 受保护的
  public money: string = "爸爸的 500元";
  pay() {
    console.log(`爸爸自己花${this.money}`);
  }
}

class Son extends Father {
  pay() {
    console.log(`孩子花${this.money}`);
  }
}

var s1 = new Son();
s1.pay();

var f1 = new Father();
console.log(`外地人也知道${f1.money}`);
console.log(f1.pay());
