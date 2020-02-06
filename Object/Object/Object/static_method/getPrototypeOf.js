/*
    -getPrototypeOf-

    @param object(if not object, converted object)

    @return [[Prototype]] 속성값

    its dangerous method. so not use 
*/

const a = Object.getPrototypeOf("foo");
//String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ
const str = a.constructor("aa");
str;
