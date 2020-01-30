let a = 1;
a = 2;

for(let i = 0; i < 10; i++){
    console.log("i",i);
}

let b = 2;
{
    console.log("b",b);
}

{
    let c = 3;
}
console.log("c",c);