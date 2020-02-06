let obj;

obj = Object.create(Object.prototype,{
    a: { writable: true, configurable: true, value: 'hello' }
});

console.log("create", obj.a);