interface Person {
	name: string;
	age: number;
	[x:string]: number;
}

const p1: Person = {
	name: 'richard',
	age: 18,
	sex: 'M',
};

export {};
