//Generics in TypeScript
function identity(arg) {
    return arg;
}
let output1 = identity("satyam");
let output2 = identity(23);
// generic with array
function getFirstEle(arr) {
    return arr[0];
}
let myNum = getFirstEle([1, 2, 3]);
let myName = getFirstEle(["rohit", "Sunakhsi"]);
console.log(myName + " " + myNum);
