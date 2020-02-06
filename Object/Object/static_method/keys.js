/*
    -keys-
*/
const object1 = {
    a: 1,
    b: 2,
    c: 3
}

console.log("keys", Object.keys(object1));

for(const a of Object.keys(object1)){
    console.log("a",a);
}