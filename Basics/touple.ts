// let arr_Tuple : [number , string, string, number] = [23, "sachin", "sharma", 63]
// console.log(arr_Tuple)

// Declaration and initialization

let toupe1 : [number, string] = [23, "sachin"];
 //Push operation
toupe1.push(2,"sharma")
// console.log("Length of touple is ", toupe1.length)
// console.log(toupe1)

//POP operation 
// toupe1.pop()
// console.log("Length of touple is ", toupe1.length)
// console.log(toupe1)

// Update of modefy the touple value
// toupe1[0] = 55;
// console.log("First value is changed",toupe1[0])

// Clear touple field

// toupe1 = [0,""]
// console.log("Empty touple is ", toupe1)

// DeStructuring the touple
let [age, name, ] = toupe1
// console.log("Name is " ,name)
// console.log("age is " ,age)

// Passing the touple as parameter
 function printParaTouple(toupe_arr: any[]) :void {
    console.log("Length of the touple is : ", toupe_arr.length)
 }

 printParaTouple(toupe1);
