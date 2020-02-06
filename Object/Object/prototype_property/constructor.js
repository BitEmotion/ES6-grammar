/*
    인스턴스의 프로토타입을 만든 Object 함수의 참조를 반환합니다
    모든 객체는 자신의 prototype으로부터 constructor 속성을 상속합니다:
*/
const obj1 = {};
obj1.constructor === Object; // true

const obj2 = new Object;
obj2.constructor === Object; // true

const array = [];
array.constructor === Array; // true

const array2 = new Array;
array2.constructor === Array; // true

const number = new Number(3);
number.constructor === Number; // true