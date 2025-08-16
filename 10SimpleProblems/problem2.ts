// Create a function printId that accepts either a number or a string and logs it.
// If it’s a string, log "ID is string: value".
// If it’s a number, log "ID is number: value".

interface data {
    data1: number | string
}

function printId(data:data):void{
    if(typeof data.data1 === 'number'){
        console.log(`ID is number : ${data.data1}`)
    }
    else if(typeof data.data1 === "string") {
        console.log(`ID is string : ${data.data1}`)
    }
}
printId({data1:3})
printId({data1:"sachin"})