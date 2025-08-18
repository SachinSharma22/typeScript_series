function  myFunc() : number {
    return new Date().getTime()
}
console.log(myFunc())

function myFunc1 () : void {
    console.log("Nothing to return")
}
myFunc1()

function myFunc2 (x:number, y:number){
    return x*y;
}

console.log(myFunc2(3, 4))

function myFunc3(x:number, y:number, z?:number) {
    return (x + y + (z || 0))
}
console.log(myFunc3(3,3,3))

function myFunc4 (value: number, expon: number = 10) {
    return value** expon
}
console.log(myFunc4(2))

type myFunc5 = (value : number) => number;

const myData : myFunc5 = (value) => value * -1 