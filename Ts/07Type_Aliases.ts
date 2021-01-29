// 类型别名 和 交叉类型  类型别名，就是给类型起一个别名，让它可以更方便的被重用。
let sum: (x: number, y: number) => number
sum = (x, y) => x + y
sum(1, 2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType
// result(x: sum2, y: sum2)