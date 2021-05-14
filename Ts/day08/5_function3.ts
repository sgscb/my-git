"use strict";
var addAll=(...arr: number[])=>{
  var result = 0;
  for (var n of arr) {
    result += n;
  }
  return result;
}

var addRes1 = addAll(1, 2, 3);
console.log(addRes1)
var addRes1 = addAll(1, 2, 3,4,5);
console.log(addRes1)