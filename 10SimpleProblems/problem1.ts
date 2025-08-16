// Write a function that takes two numbers and returns their sum. Ensure the parameters and return type are correctly typed.

interface data{
    num1 : number;
    num2 : number
}

function add(data:data): number {
    return data.num1 + data.num2
}

console.log(add({num1:2,num2:3}))