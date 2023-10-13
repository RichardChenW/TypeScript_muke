type Product = {
	name: string;
	age: number;
	sayHi(): void;
};

// type Product1 = {
//   name:string,
//   age:number,
//   sayHi():void
// }

// const p:Product = {
//   name:'richard',
//   age:18,
//   sayHi(){
//     return 1
//   }
// }

// console.log(p.sayHi())

interface Animal {
	sex: string;
	type: string;
}

interface Person extends Animal {
	name: string;
	age: number;
}

interface Pet extends Animal {
  name:string
	master: string;
	breed: string;
	weight: number;
}

let myPerson:Person = {
  name:'richard',
  age:18,
  sex:"M",
  type:"哺乳动物"
}


interface List {
  add():void,
  remove():void
}

class AList implements List{
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
};

class BList implements List{
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
};

