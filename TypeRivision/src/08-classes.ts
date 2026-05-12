class Person {
  // properties
  private name: string;
  protected age: number;
  public email: string;

  // Constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  // methods
  public introduce(): string {
    return `Hi I'm ${this.name} and I'm ${this.age} year old`;
  }

  //   getter
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
}

class Employee {
    constructor (
        private ID : number,
        public name : string,
        protected department : string
    ) {

    }
    getDetails() : string {
        return `${this.name} works on ${this.department} department`
    }
}

// let piush = new Employee(1, "Piush", "HR");
// console.log(piush.getDetails())

class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamSize : number
    ) {
        super(id, name, department);
    }

    getTeamInfo() : string {
        return `${this.name} manages ${this.teamSize} people`
    }
}

let keshav = new Manager(23,"keshav","Team Leader",36);
console.log(keshav.getTeamInfo());