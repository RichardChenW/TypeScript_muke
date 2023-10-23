interface sayHiType {
	name: string;
	age: number;
	sex: string;
}

const sayHi = (sayHiObj: sayHiType) => {
	console.log('name:', sayHiObj.name);
	console.log('age:', sayHiObj.age);
	return 3;
};

// 若只需要两个参数
const sayHi1 = ({ name, age }: sayHiType) => {
	console.log('name:', name);
	console.log('age:', age);
	return 3;
};

let stuObj: sayHiType = { name: 'richard', age: 18, sex: 'M' };
sayHi(stuObj);
sayHi1({ name: 'james', age: 19, sex: 'M' });

interface sayHiType {
	name: string;
	age: number;
	sex: string;
}

let subInfo = ({ name, age }: sayHiType): void => {
	console.log('name:', name);
	console.log('age:', age);
	return;
};

subInfo({ name: 'richard', age: 18, sex: 'M' });

let { name, age }: sayHiType = {
	name: 'richard',
	age: 18,
	sex: 'M',
};

console.log(name);

export {};
