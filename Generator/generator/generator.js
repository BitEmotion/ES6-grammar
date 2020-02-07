const anotherGenerator1 = function* (i) {
    yield i + 1;
    yield i + 3;
    yield i + 5;
}

const anotherGenerator2 = function* (i) {
    yield i + 2;
    yield i + 4;
    yield i + 6;
}
  
const basicGenerator = function* (i) {
    let ret = 0;
    yield i;
    yield* anotherGenerator1(i);
    yield* anotherGenerator2(i);
    yield ret + 10;
}
  
const gen = basicGenerator(10);
  
let temp = 0;
for(let a of gen){
    temp += a;
    console.log(temp);
}