var num1;
num1 = null;
console.log(num1);
// num1 = 20; Not assignable to null
var carDetail;
(function (carDetail) {
    carDetail[carDetail["Tata"] = 10] = "Tata";
    carDetail[carDetail["Volvo"] = 11] = "Volvo";
    carDetail[carDetail["Mahindra"] = 12] = "Mahindra";
})(carDetail || (carDetail = {}));
// console.log(carDetail);
// console.log(`The place of Volov is ${carDetail.Volvo}`)
var fruits;
(function (fruits) {
    fruits["apple"] = "APPLE";
    fruits["banana"] = "BANANA";
    fruits["mango"] = "MANGO";
    fruits["orange"] = "ORANGE";
})(fruits || (fruits = {}));
// console.log(fruits);
// console.log("Fruit is: ",fruits.apple)
// Heterogeneous enums
var studentDetail;
(function (studentDetail) {
    studentDetail["name"] = "sachin";
    studentDetail[studentDetail["age"] = 23] = "age";
    studentDetail["email"] = "sachin@gmail.com";
    studentDetail[studentDetail["mobileNo"] = 123456] = "mobileNo";
    studentDetail["address"] = "Chandrawar Rasra Ballia";
})(studentDetail || (studentDetail = {}));
console.log(studentDetail);
console.log("Age of the student is : ", studentDetail.age);
