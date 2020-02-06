/*
    Object.setPrototypeOf
    
    Object.setPrototypeOf() 메소드는  
    지정된 객체의 프로토타입 (즉, 내부 [[Prototype]] 프로퍼티)을 다른 객체 또는 null 로 설정합니다.
*/

const object1 = Object.setPrototypeOf({}, null);
//{} -> No properties

const object2 = {};
//{} -> __proto__: Object
