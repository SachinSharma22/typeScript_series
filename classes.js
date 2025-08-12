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
var Person = /** @class */ (function () {
    function Person(private, name) {
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Sachin");
console.log(person.getName());
