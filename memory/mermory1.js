const generateSymbol = Symbol();
const desSybol = Symbol('describe');

console.log(generateSymbol); // => Symbol()
console.log(desSybol); // Symbol(describe)

const obj = {
	name: 'richard',
	[desSybol]: '123',
};

const key = 'key';

const obj1 = {
	[key]: 'value',
};
obj1[key] = 'value';

obj.age = 18;
const des = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(des);

const des2 = Object.getOwnPropertyDescriptor(obj, desSybol);
console.log(des2);

for (let each in obj) {
	console.log(each);
}

const obj3 = {
	[Symbol('level')]: '有钱',
	[Symbol('level')]: '学习好',
};

console.log(typeof Symbol('level'));
console.log(typeof Symbol('level1'));

console.log("@",Object.getOwnPropertySymbols(obj3));


