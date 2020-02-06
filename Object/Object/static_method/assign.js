const obj = {};
Object.assign(obj, {a:1} );
console.log("obj",obj);

class User {
    id;
    email;
    constructor(id,email){
        Object.assign(this, {
            id, email
        });
    }
}

const user = new User("javascript", "hello@naver.com");
console.log("user",user);