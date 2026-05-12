// object type annotation
let user = {
    name: "Sachin",
    age: 23,
    id: 1
};
let laptop = {
    name: "Mac book pro",
    price: 20000,
    getDiscount(percent) {
        return this.price * (percent / 100);
    }
};
