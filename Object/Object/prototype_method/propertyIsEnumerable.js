/*
    Object.prototype.isPrototypeOf

    @param string | number | symbol
    
    @return boolean

   propertyIsEnumerable() 메서드는 
   특정 속성이 열거가능한지 여부를 나타내는 불리언 값을 반환합니다.
*/
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));