function distance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
var a = { x: 3, y: 2 };
var b = { x: 4, y: 3 };
console.log(distance(a, b));
// 7. Enums
// Define an enum Role with values "Admin", "User", "Guest".
// Write a function checkRole(role: Role) that prints different messages depending on the role.
// 8. Classes
// Create a class Car with properties make, model, and year.
// Add a method getCarInfo() that returns a string with the car details.
// Then create an object and call the method.
// 9. Inheritance
// Extend the Car class to a ElectricCar class that has an additional property batteryLife.
// Override getCarInfo() to include battery life in the string.
// 10. Async / Promise with Types
// Write an async function fetchData(url: string): Promise<string> that simulates fetching data (use setTimeout to return "Data from ${url}").
// Call the function and log the result.
