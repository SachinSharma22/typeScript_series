// class Person{
//     name: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Person{
//     public constructor(private
//         name: string
//     ) {}
//     public getName():string{
//         return this.name;
//     }
// }
// const person = new Person("Sachin");
// console.log(person.getName())
var myProfile = /** @class */ (function () {
    function myProfile(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    myProfile.prototype.printData = function () {
        console.log(this.name);
        console.log(this.email);
        console.log(this.age);
    };
    myProfile.prototype.getData = function () {
        return this.name;
    };
    return myProfile;
}());
// const data = new myProfile("sachin","sachin@gmail.com",23)
// data.printData();
// console.log(data.getData())
var bottleMaker = /** @class */ (function () {
    function bottleMaker(name) {
        this.name = name;
        this.price = 12;
    }
    return bottleMaker;
}());
var metalBottleMaker = /** @class */ (function (_super) {
    __extends(metalBottleMaker, _super);
    function metalBottleMaker(name, price) {
        return _super.call(this, name) || this;
    }
    metalBottleMaker.prototype.getValue = function () {
        console.log(this.name);
        // console.log(this.price)
    };
    return metalBottleMaker;
}(bottleMaker));
// const value1 = new metalBottleMaker('milton',12)
// value1.getValue()
// protected class
// Example of getting relation via protected class
var Relation = /** @class */ (function () {
    function Relation(who) {
        this.who = who;
    }
    return Relation;
}());
// For getting the relation 
var Me = /** @class */ (function (_super) {
    __extends(Me, _super);
    function Me(who) {
        var _this = _super.call(this, who) || this;
        _this.mySelf = "sachin";
        return _this;
    }
    Me.prototype.getRelation = function () {
        console.log("".concat(this.who, " and ").concat(this.mySelf, " are brother."));
    };
    return Me;
}(Relation));
// const m1 = new Me('saurabh')
// m1.getRelation()
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.changeName = function () {
        // this.name = "sachin"
    };
    return User;
}());
// const m1 = new User("Sachin")
var User1 = /** @class */ (function () {
    function User1(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return User1;
}());
var u1 = new User1("sachin", 23, "male");
var u2 = new User1("lagbatak", 18);
console.log(u1);
console.log(u2);
