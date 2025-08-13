// class Person{
//     name: string;
// }

// const person = new Person();
// person.name = "sachin"
// console.log(person)

// class Person {
//     private name: string;
//     public constructor(name: string){
//         this.name = name;
//      }
    
//      public getName(): string{
//        return this.name
//      }
// }

// const person = new Person("Sachin")
// console.log(person.getName())
// console.log(person.name)

// class Person{
//     public constructor(private
//         name: string
//     ) {}

//     public getName():string{
//         return this.name;
//     }
// }

// const person = new Person("Sachin");
// console.log(person.getName())

class myProfile {
    constructor(private name : string, public email:string, public age: number){
       
    }

    printData() {
        console.log(this.name)
        console.log(this.email)
        console.log(this.age)
    }
    getData() {
        return this.name
    }
}

// const data = new myProfile("sachin","sachin@gmail.com",23)
// data.printData();
// console.log(data.getData())

class bottleMaker{
    private price : number = 12;
    constructor(public name: string){}
}
class metalBottleMaker extends bottleMaker {
    constructor(name: string, price: number){
        super(name)
    }

    getValue() {
        console.log(this.name)
        // console.log(this.price)
    }
}

// const value1 = new metalBottleMaker('milton',12)
// value1.getValue()

// protected class
// Example of getting relation via protected class
class Relation{
    constructor(protected who: string){

    }
}
// For getting the relation 
class Me extends Relation{
    public mySelf: string = "sachin"
    constructor(who: string) {
        super(who)
    }

    getRelation(){
        console.log(`${this.who} and ${this.mySelf} are brother.`)
    }
}

// const m1 = new Me('saurabh')
// m1.getRelation()

class User{
    constructor(public readonly name: string){}
    changeName() {
        // this.name = "sachin"
    }
}

// const m1 = new User("Sachin")

class User1{
    constructor(public name: string, public age: number, public gender?: string) {
    }
}
const u1 = new User1("sachin",23, "male")
const u2 = new User1("lagbatak",18)
console.log(u1)
console.log(u2)