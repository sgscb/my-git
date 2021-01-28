interface Radio {
  switchRadio(strigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): void;
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio(strigger: boolean) {

  }
}

// 要实现多个接口，我们只需要中间用 逗号 隔开即可。
class Cellphone implements Radio, Battery {
  switchRadio(strigger: boolean) {

  }
  checkBatteryStatus() {

  }
}
class Cellphones implements RadioWithBattery {
  switchRadio(strigger: boolean) {

  }
  checkBatteryStatus() {

  }
}
