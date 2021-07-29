interface bio{
    name: string,
    email: string,
    age: number;
    register();
    notification();
    payInvoice()
}

class User implements bio {
    name: string;
    email: string;
    age: number
    constructor(name: string, email:string, age: number) {
       this.name = name;
       this.email = email;
       this.age = age
    }

    notification(){
        console.log('User Created: '+ this.name)
    }

    register(){
        console.log(this.name+' is now registered')
    }
    payInvoice(){
        console.log(this.name+' paid invoice')
    }
}

// let John = new User('John Doe', 'pods@eamil.com', 50)
// John.notification()
// John.register()

// Inheritance

class Member extends User{
    id: number;

    constructor(id: number, name: string, email:string, age: number){
        super(name, email, age);
        this.id = id
    }

    payInvoice(){
        super.payInvoice()
    }
}

let mikky: User = new Member(1, 'Adam Levine', 'pods@email.com', 36)
mikky.payInvoice()