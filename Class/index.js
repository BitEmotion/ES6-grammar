const User = class {
    id;
    name;
    email;
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    print(){
        console.log("id name email", this.id, this.name, this.email);
    }
}

const user = new User(1, `bitEmotion`, `bitEmotion@gmail.com`);
user.print();