//AsyncAwait

/*
    dangerous this code
    not good example 

    asyncFunc function return promise
    but not fetch yet
    you just take an empty promise object but have value after some second fetch time
    
    if you not want empty promise, you need Promise.all
*/
{
    const asyncFunc = async () => {
        const arr = [];
        for(let i = 1; i < 10; i++){
            const promise = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`); 
            arr.push(promise);
        }
        return arr;
    }
    console.log(asyncFunc());
}

{
    const asyncFunc = async () => {
        const arr = [];
        const numberArr = [1,2,3,4,5,6,7,8,9];
        await numberArr.forEach(async el => {
            const promise = await fetch(`https://jsonplaceholder.typicode.com/todos/${el}`); 
            arr.push(promise);
        });
        return arr;
    }
    console.log(asyncFunc());
}
