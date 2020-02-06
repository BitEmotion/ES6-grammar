const object1 = {};

Object.defineProperties(object1, {
    property1: {
        value: 1,
        writable: true
    },
    property2: {
        value: 2,
        writable: false
    }
});

console.log("object1",object1.property1);