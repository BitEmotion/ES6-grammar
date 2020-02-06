/*
    freeze
*/
const obj = {
    prop: 1
};
  
Object.freeze(obj);
  
obj.prop = 2;
// not error(if strict mode throw error), but not writable

Object.isFrozen(obj);
// true