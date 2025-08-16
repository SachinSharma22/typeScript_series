// 4. Interfaces

// Create an interface Person with name (string), age (number), and email (string).
// Write a function printPerson(person: Person) that logs their details.

interface Person{
    name: string;
    age: number;
    email: string;
}

function printPerson(person:Person):void {
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
}

printPerson({name:"Sachin",age:23,email:"sachin@gmail.com"});