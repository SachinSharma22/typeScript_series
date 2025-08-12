// let myTouple : [string, number, boolean];
// myTouple = ["sachin", 23, true]

// If we try to arrange them in random order we got some error
// myTouple = [23, "sachin", false]
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// let ourTouple : [number, boolean, string]
// ourTouple = [23, true, "sachin"]
// ourTouple.push('Something new and wrong')

// our readonly touple
// let ourTouple : readonly [number, boolean, string]
// ourTouple = [23, true, "sachin"]
// ourTouple.push('Something new and wrong') Property 'push' does not exist on type 'readonly [number, boolean, string]'

// Named Touple
// Named tuples provide more context for what our index values represent.

let myTouple : [x:string, y: number] = ["sachin", 23]
// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

let [first, second] = myTouple
console.log(first, second)

