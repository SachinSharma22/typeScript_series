//Generics in TypeScript
function identity<MyType>(arg: MyType) : MyType {
    return arg;
}

let output1 = identity<string>("satyam");
let output2 = identity<number>(23);

// generic with array
function getFirstEle<T>(arr: T[]) : T | undefined {
    return arr[0];
}

let myNum = getFirstEle([1,2,3]);
let myName = getFirstEle(["rohit","Sunakhsi"]);
// console.log(myName + " " + myNum)

// generics interfaces
interface keyValPair <K, V>{
    key: K;
    val: V;
}

let StringNumberPair: keyValPair<string, number> = {
    key: "age",
    val: 23
}

//generic classes
class dataStorage <T> {
    private data: T[] = [];

    addItem(item: T) : void {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data = this.data.filter((i) => i !== item)
    }

    getItems() : T[] {
        return [...this.data];
    }
}

let textStorage = new  dataStorage<string>();
textStorage.addItem("Hello")

//generic constraints