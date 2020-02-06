/*
    -entries-
*/
const object1 = {
    a: 1,
    b: 2,
    c: 3
}

console.log("entries", Object.entries(object1));

for(const a of Object.entries(object1)){
    console.log("a",a);
}