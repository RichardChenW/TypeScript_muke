// 根类型
let obj: Object = [];
let obj1: Object = '123';
// let obj2:Object = undefined;
// let obj3:Object = null;

// 联合类型（或）
let unionType: string | number;
unionType = 10;
console.log(unionType); // 当被赋值之后，就会成为对应的类型

// 交叉类型
// let crossType: { name: string } = { name: 'richard' };

let crossObj: { name: string } & { age: number } = { name: 'richard', age: 18 };

// 字面量类型
type num = 1 | 2 | 3;
let instance: num = 1;

type increaseFlag = 0 | 1
function isStartUp(increase: increaseFlag) {
	if (increase) {
		console.log('open');
	} else {
		console.log('close');
	}
}
isStartUp(0)

// never 数据类型
let never123:never;