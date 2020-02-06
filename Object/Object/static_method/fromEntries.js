//Array에서 Object로
const entries = [
    ['foo', 'bar'],
    ['baz', 42]
];
  
const obj = Object.fromEntries(entries);
  
console.log(obj);
//객체 변환
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }