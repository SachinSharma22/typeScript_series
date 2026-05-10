const str: string = "Hello world";
// console.log(str);

// Arrays in Typescript
let arr: number[] = [1,2,3,4,5,];
let names: string[] = ["joyti", "muskan","nikki","sanvi","sunakshi"];

// Tuples

let arrr: [string, number] = ["gargi", 16];

//enum
enum Color {
    RED,
    BLUE,
    Green
}

let favoriteColor : Color = Color.BLUE;

// ANY {avoid when possible}
let value: any = 23;
value = "sachin";
value = true;

// Unknown (safer than any)

let newVal : unknown = 5;
newVal = "sachin";
newVal = true;

// Function (void type - for function that don't return)
function subs(message: string) : void {
    console.log("Subscribe now.");
}

// Null and undefined
let nulVal : null = null;
let undefinedVal : undefined = undefined;