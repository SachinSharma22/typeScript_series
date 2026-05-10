// Interface
interface User {
    name: string,
    age: number,
    email?: string  //optional property ?
    readonly id: number  //readonly property
}

// object type annotation
let user: User = {
    name: "Sachin",
    age: 23,
    id: 1
}

// user.id = 2  we cann't reassign to readonly property



interface Product {
    name: string,
    price: number,
    getDiscount(percent: number) : number
}

let laptop : Product = {
    name: "Mac book pro",
    price: 20000,
    getDiscount(percent) {
        return this.price * (percent/100);
    }
}