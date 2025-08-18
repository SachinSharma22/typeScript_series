// let helloWorld  = "Hello World"

// function myData(name:string, age:number):void{
//     console.log(name.charAt(2))
//     console.log(age.toFixed(2))
// }
// myData('sachin',23.000)

// interface User{
//     name:string,
//     age:number,
//     email:string
// }

// function myData(obj:User):void {
//     console.log(obj.name)
//     console.log(obj.age)
//     console.log(obj.email)
// }

// myData({name:"sachin",age:23,email:"sachin@gmail.com"})

// There is no difference between how classes and objects conform to shapes:

// class virtualPoint  {
//     x: number;
//     y: number;

//     constructor(x: number, y: number){
//         this.x = x;
//         this.y = y;
//     }
// }
// const newPoint = new virtualPoint(23, 34)


// we can also extends property of one interface to another
// interface car {
//     color: "black";
//     price: "30000";
//     company: "TATA"
// }

// interface myCar extends car {
//     type: "EV"
// }

// function collection (obj : myCar) {
//     console.log(obj.company)
// }

// when two interface with same name is declare then both of them merge

// interf

// let firstName : String = "sachin"
// firstName = 33

// type any in typescript

// let u: any = true
// u = "sachin"
// Math.round(u)

// type a = number | string | null;
// let myNum: a = "sachin"

type User = {
    name: string,
    email: string
}
type Admin  = User & {
    getDetails(age:number): void
}
function abcd(a: Admin) {
    a.email = "sachin@gmail.com"
}