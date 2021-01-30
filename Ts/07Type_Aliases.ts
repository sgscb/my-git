// 类型别名 和 交叉类型  类型别名，就是给类型起一个别名，让它可以更方便的被重用。
let ref: (x: number, y: number) => number
ref = (x, y) => x + y
console.log(ref(6, 7))

type PlusType = (x: number, y: number) => number
let ref2: PlusType = (e, t) => { return e + t }
console.log(ref2(3, 6))
// 支持联合联合
type StrOrNumber = string | number
let result2: StrOrNumber = '123'

// 字符串字面量
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Up'