function sum(a, b) {
    return a + b;
}
function greeting(name, greet) {
    if (greet) {
        return `${greet} ${name}`;
    }
    return name;
}
//default parameter
function multi(a, b = 3) {
    return a * b;
}
//Rest parameter
function sum1(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Arrow function
const divide = (a, b) => a / b;
let seeker = {
    title: "Software Developer",
    JobId: 220093,
    location: "noida"
};
console.log(seeker.location + " " + seeker.title);
