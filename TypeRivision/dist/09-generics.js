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
let StringNumberPair = {
    key: "age",
    val: 23
};
//generic classes
class dataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
let textStorage = new dataStorage();
textStorage.addItem("Hello");
//generic constraints
