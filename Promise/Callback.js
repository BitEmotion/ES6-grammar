
//callback
{
    const add = (num, callback) => {
        const sum = num + num;
        return callback(sum);
    }
    add(1, async(index) => {
        const resultNum = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
            .then(v => v.json());
        add(resultNum.id +1, async(index) => {
            const resultNum = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
                .then(v => v.json());
            add(resultNum.id +1, async(index) => {
                const resultNum = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
                    .then(v => v.json());      
                return resultNum.id;
            });
        });
    });
}