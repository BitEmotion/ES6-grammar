var a = 1;
a = 2;

for(var i = 0; i < 10; i++){
    console.log("i",i);
}

var b = 2;
{
    console.log("b",b);
}

{
    var c = 3;
}
console.log("c",c);