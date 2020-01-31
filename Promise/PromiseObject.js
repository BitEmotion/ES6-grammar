//promise res
const promise = new Promise(res => res(fetch(`https://jsonplaceholder.typicode.com/todos/1`)));
promise.then(data => {
   return data.json();
}).then(data => {
    console.log("data",data)
}).catch(error => {
    console.log("error",error);
}).finally(() => {
    console.log("end");
});

//promise All
const arr = [1,2,3,4,5];
const promiseArr = [];
const ret_arr = [];

arr.forEach(el => {
    const promise = new Promise(res => res(fetch(`https://jsonplaceholder.typicode.com/todos/${el}`)));
    promiseArr.push(promise);
});

Promise.all(promiseArr).then(promiseAllData => {
    promiseAllData.forEach(el => {
        ret_arr.push(el.json());
    });
});
console.log("ret_arr",ret_arr);


//Promise.race()
{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
    });
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'two');
    });
    
    Promise.race([promise1, promise2]).then(value => {
      console.log(value);
      // Both resolve, but promise2 is faster
    });
}

//Promise.race() 2
{
    const p5 = new Promise((resolve, reject) => { 
        setTimeout(() => resolve('five'), 500); 
    });
    const p6 = new Promise((resolve, reject) => { 
        setTimeout(() => reject(new Error('six')), 100);
    });
    
    Promise.race([p5, p6]).then((value) => {
      // Not called
    }, (error) => {
      console.log(error.message); // "six"
      // p6 is faster, so it rejects
    });
}