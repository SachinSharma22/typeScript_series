function sum (a : number, b: number) : number {
    return a + b;
}

function greeting (name: string, greet? : string) : string {
    if(greet){
        return `${greet} ${name}`
    }

    return name;
}

//default parameter
function multi(a : number, b: number = 3): number {
    return a * b;
}

//Rest parameter
function sum1(...numbers: number[]) : number {
    return numbers.reduce((total,n) => total + n, 0);
}

// Arrow function
const divide = (a: number, b:number) => a/b;

interface Job  {
    title: string,
    JobId: number,
    location: string
}
let seeker: Job ={
    title: "Software Developer",
    JobId: 220093,
    location: "noida"
};

console.log(seeker.location + " " + seeker.title);
