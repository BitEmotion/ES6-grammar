const asyncFunc = async function* () {
    yield await 1;
    yield await 2;
    yield await 3;
}

const asyncRender = async() => {
    for await(let c of asyncFunc()){
        console.log("c",c);
    }
}
asyncRender();