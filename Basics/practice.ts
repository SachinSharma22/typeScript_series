let num1 : null;
num1 = null;
console.log(num1)

// num1 = 20; Not assignable to null

enum carDetail  {
    Tata = 10,
    Volvo,
    Mahindra
}

// console.log(carDetail);
// console.log(`The place of Volov is ${carDetail.Volvo}`)

enum fruits {
    apple="APPLE",
    banana="BANANA",
    mango = "MANGO",
    orange = "ORANGE"
}

// console.log(fruits);
// console.log("Fruit is: ",fruits.apple)

// Heterogeneous enums
enum studentDetail {
    name="sachin",
    age=23,
    email="sachin@gmail.com",
    mobileNo = 123456,
    address = "Chandrawar Rasra Ballia"
} 
console.log(studentDetail);
console.log("Age of the student is : ",studentDetail.age)
