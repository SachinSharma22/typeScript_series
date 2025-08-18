// enum cardinalDirection  {
//     north,
//     south,
//     east,
//     west
// }

// let currentDirection = cardinalDirection.north
// console.log(currentDirection)

// currentDirection = "North" Type '"North"' is not assignable to type 'cardinalDirection'.

// enum cardinalDirection  {
//     north = 1,
//     south,
//     east,
//     west
// }

// let currentDirection = cardinalDirection.north
// console.log(currentDirection)

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400
// }
// // logs 404
// console.log(StatusCodes.NotFound);
// // logs 200
// console.log(StatusCodes.Success);

// enum CardinalDirections {
//   North = 'North',
//   East = "East",
//   South = "South",
//   West = "West"
// };
// // logs "North"
// console.log(CardinalDirections.North);
// // logs "West"
// console.log(CardinalDirections.West);

function myFunc (code: string | number) {
    console.log(`My status code is ${code}`)
    // console.log(`My status code is ${code.toUpperCase()}`)
}
myFunc(404)