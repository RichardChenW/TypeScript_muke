// let myAny:any;
// let myNumber:number = 1;
// myAny = myNumber;

// any 和 object 的区别

let foo:any
let boo:Object;
// 1. Object 不能是 undefined 和 null 的父类, any 可以
boo = undefined; // 会报错
boo = null;
foo = undefined;
foo = null;
// 2. Object 不能是任何类型变量的子类
let num:number = 1;
num = boo;

export{}