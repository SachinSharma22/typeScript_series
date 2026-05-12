class Person {
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // methods
    introduce() {
        return `Hi I'm ${this.name} and I'm ${this.age} year old`;
    }
    //   getter
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
class Employee {
    constructor(ID, name, department) {
        this.ID = ID;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works on ${this.department} department`;
    }
}
// let piush = new Employee(1, "Piush", "HR");
// console.log(piush.getDetails())
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
let keshav = new Manager(23, "keshav", "Team Leader", 36);
console.log(keshav.getTeamInfo());
