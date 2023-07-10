//Primitive datatypes
//nn ss bb u

let a = null;
let b = 87
let c = "String"
let d =  Symbol("Hello")
let e = true
let f = BigInt("652")
let g = undefined

console.log(a,b,c,d,e,f,g)

//Objects in Javascript

const item = {

    "Sumit":"Hello",
    "Garam":28,
    name: "Sumit"
}
item["Sita"] = "Gita"

console.log(item["Garam"])
console.log(item["Sita"])
console.log(item.Garam)



//prompt

// let answer = prompt("What is your name??");
// console.log(answer)



//ternary operator
let age = 18;
let question = age>=18? "You are eligible" : "You are not eligible"


console.log("You can", age<=18? "not drive" : "drive")

console.log(question)


switch(age){
    case 1: 
        console.log("It is 1")
        break
    case 2: console.log("It is 2")
    case 3: console.log("It is 3")
    case 18: console.log("It is 18")
    default:console.log("Unknown input!!")
}
    