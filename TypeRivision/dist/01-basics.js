const str = "Hello world";
// console.log(str);
// Arrays in Typescript
let arr = [1, 2, 3, 4, 5,];
let names = ["joyti", "muskan", "nikki", "sanvi", "sunakshi"];
// Tuples
let arrr = ["gargi", 16];
//enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let favoriteColor = Color.BLUE;
// ANY {avoid when possible}
let value = 23;
value = "sachin";
value = true;
// Unknown (safer than any)
let newVal = 5;
newVal = "sachin";
newVal = true;
// Function (void type - for function that don't return)
function subs(message) {
    console.log("Subscribe now.");
}
// Null and undefined
let nulVal = null;
let undefinedVal = undefined;
