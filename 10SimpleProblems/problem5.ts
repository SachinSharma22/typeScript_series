// 5. Optional & Readonly
// Extend the Person interface with an optional phone?: string and a readonly id: number.
// Try modifying the id after creating a person object — TypeScript should show an error.

interface Person{
    name: string;
    age:number;
    email:string;
    phone?:number;
    readonly id :number;
}

function printPerson (person:Person): void{
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
    console.log(person.phone);
    console.log(person.id);
}

printPerson({name:"sachin", age:23, email:"sachin@gmail.com",phone:123,id:2})
const P :Person = {name:"saurab",age:22,email:"sayrab@gamil.com",phone:1254,id:4}
// P.id = 45; it throws an error because readonly make varibale immutable afte creating the object it throws an error while you try to reasign the variable