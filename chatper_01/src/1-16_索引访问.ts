const synm = Symbol()
interface Person {
  name:string,
  age:number,
  [synm]:any
}

// interface Person{
//   weight:string
// }

// interface Man extends Person{
//   sex:'M'
// }

// // 使用索引

type too = Person['name'];
type foo = Person['name' | 'age']
type xoo = Person[typeof synm]
// export {}

type Pkeys = keyof Person 
// 相当于 👇
type Pkeys1 = 'name' | 'age' | typeof synm


