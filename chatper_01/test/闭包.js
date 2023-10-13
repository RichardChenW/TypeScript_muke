function outside(){
  let a = 0;
  function inside(x){
    a += x
    return a
  }
  return inside
}

fn = outside();

console.log(fn(1));
console.log(fn(2));


