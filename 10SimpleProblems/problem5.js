// 5. Optional & Readonly
// Extend the Person interface with an optional phone?: string and a readonly id: number.
// Try modifying the id after creating a person object — TypeScript should show an error.
function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
    console.log(person.phone);
    console.log(person.id);
}
printPerson({ name: "sachin", age: 23, email: "sachin@gmail.com", phone: 123, id: 2 });
