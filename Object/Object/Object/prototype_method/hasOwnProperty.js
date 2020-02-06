/*
    Object.prototype.hasOwnProperty

    @param string | number | symbol

    @return boolean
*/

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false