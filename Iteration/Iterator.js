
/*
    iterator protocol
    반복의 형식 순서에 대한 규약
*/
/* 
    example1
*/
{
    const iterator = () => {
        const arr = [1,2,3,4,5];
        let i = 0;
        let value = '';
        let isBoolean = false;
        return {
            next: () => {
                if(i == (arr.length -1)){
                    isBoolean = true;
                }
                value = arr[i];
                i++;
                return {
                    value,
                    done: isBoolean
                }
            }
        }
    }
    const iter = iterator()
    iter.next();
}

/* 
    example2 
*/
const makeIterator = (array) => {
    let nextIndex = 0;
    
    return {
       next: () => {
           return nextIndex < array.length 
               ? {value: array[nextIndex++], done: false} 
               : {done: true};
       }
    };
}

const arr = [];
for(let i = 0; i < 10; i++){
    const promise = new Promise(res => res(fetch(`https://jsonplaceholder.typicode.com/todos/${i+1}`)));
    arr.push(promise);
}
const iterable = makeIterator(arr);
iterable.next().value.then(v => v.json()).then(v => console.log(v));