// Define a type alias Point with properties x and y (both numbers).
// Write a function distance(p1: Point, p2: Point) that returns the Euclidean distance between two points.
type Point = {
  x: number;
  y: number;
};
function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
const a: Point = { x: 3, y: 2 };
const b: Point = { x: 4, y: 3 };

console.log(distance(a, b));


// 5. Optional & Readonly

// Extend the Person interface with an optional phone?: string and a readonly id: number.
// Try modifying the id after creating a person object — TypeScript should show an error.

// 6. Generics

// Write a generic function wrapInArray<T>(value: T): T[] that takes a value of any type and returns it wrapped inside an array.
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
