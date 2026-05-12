// Union Types OR
type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status) : void {
    console.log(`set status to ${status}`)
}

// setStatus("approved")

// Intersections Types AND
interface Colorful {
    color : string;
}
interface Circle{
    radius: number;
}
type ColorfulCircle = Colorful & Circle
let myCircle : ColorfulCircle = {
    color : "RED",
    radius: 10
}