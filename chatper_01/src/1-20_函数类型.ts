// function info(name: string, age: number) {
// 	console.log(name, age);
// 	return age;
// }

// info('richard',18)
type sayHiType = (name: string, age: number) => number

let sayHi: sayHiType  = (name, age) => {
	console.log(name, age);
	return age;
};
