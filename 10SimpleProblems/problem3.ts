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

// 10. Async / Promise with Types

// Write an async function fetchData(url: string): Promise<string> that simulates fetching data (use setTimeout to return "Data from ${url}").
// Call the function and log the result.
