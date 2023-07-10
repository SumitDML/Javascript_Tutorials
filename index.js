//Write
console.log("Hello World", 10, "Bye World");
// alert("Welcome To JavScript Tutorial");
document.write("Heyyy")


//Console
console.warn("This is a Warning!!!!!!")
console.error("This is an error!!!!!")
console.error("This is an error 2!!!!!")
console.assert(4 == 5)

//Styling
document.querySelector(".heading").style.padding = "40px"
document.querySelector(".heading").style.background = "red"
document.querySelector(".heading").style.fontSize = "50px"

//variables

var number = 34;
var number2 = 35

console.log(number+number2)


var str = "Hello"
var str2 = "Hello2"

var marks = {
    sumit:45,
    shankar:80,
    sorabh:90
}

var a = true;
var b = false;


console.log(a, b)

console.log(marks)

// At very high level , there are two types of data types in JavaScript


//Primitive Datatypes : undefined,null,number,string,boolean,symbol
//Reference Datatypes : Arrays, Objects

var arr = [1,2,3,"sumit",4,5]


//Arithmetic Opertion

var c = 34;
var d = 36;


console.log("The Value Of c + d : ",c+d);
console.log("The Value Of c - d : ",c-d);
console.log("The Value Of c * d : ",c*d);
console.log("The Value Of c / d : ",c/d);


function avg(a,b){
    return (a+b)/2;
}

e = avg(2,3)
console.log(e)



var age = 19;

if(age>=18){
    console.log("You are eligible");
}
else{
    console.log("Not Eligible!");
}

console.log("For Loop")
var arr1 = [8,9,2,3,4,5]
for(var i = 0;i<arr1.length;i++){
    console.log("i is ",arr1[i]);
}

console.log("For Each Loop")

var arr2 = [9,8,7,6,5]
arr2.forEach(function(x){
    console.log(x)
})


let f = 20
console.log(f)


console.log("while loop")
let k = 0
while(k<arr2.length){
    console.log(arr2[k])
    k++
}

let y = 0
console.log("Do While loop")
do{
    console.log(arr2[y])
    y++

}while(y<arr2.length)



console.log("Pop , Shift and Unshift")
let myArr = ["Sumit","Sourabh",34,true]
console.log(myArr);
console.log(myArr.length);
myArr.pop();
console.log(myArr);
console.log(myArr.length);


myArr.shift()
console.log(myArr);


const z = myArr.unshift("Sumit")
console.log(myArr);
console.log(z)



console.log("String Operations")
let myString = "Sumit is a good boy"
console.log(myString.length)
console.log(myString.indexOf("is"))
console.log(myString.slice(1,4))

console.log(myString.replace("Sumit","Sejaj"));


let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());


//DOM manipulation

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");


tn = document.getElementsByTagName("div");
console.log(tn);


createdElement = document.createElement('p');
createdElement.innerText = "This is a created element"
tn[0].appendChild(createdElement);


//createdElement2 = document.createElement('b');
//createdElement2.innerText = "This is bold!";

//tn[0].replaceChild(createdElement2,createdElement);



console.log(document.location);
console.log(document.title);
console.log(document.URL);
console.log(document.scripts);
console.log(document.links);
console.log(document.images);
console.log(document.domain);



sel = document.querySelector('.container')
console.log(sel);

sel1 = document.querySelectorAll('.container')
console.log(sel1);


//Events 


let prevHtml = document.querySelectorAll('.container')[1].innerHTML;


// firstContainer.addEventListener('click',function(){
//     console.log("Container Clicked!!");
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Container is clicked</b>"
// })


// firstContainer.addEventListener('mouseover',function(){
//     // console.log("Mouseover!!");
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Mouse Over</b>"
// })

// firstContainer.addEventListener('mouseout',function(){
//     // console.log("Mouseout!!");
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Mouse Out</b>"
// })

// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHtml;
//     console.log("Mouse Up!!");
// })


// firstContainer.addEventListener('mousedown',function(){
//     console.log("Mouse Down!!");
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Container is Pressed</b>"
// })



function clicked(){
    console.log("Button is clicked!!");
}

window.onload = function(){
    console.log("Document was loaded!!");
}



//Arrow Functions 


// function sum1(a,b){
//     return a+b;
// }
// console.log(sum1(2,5))


// sum = (a,b) => {
//     return a+b;
// }

// console.log(sum(2,8))



//Set Timeout and Set Interval

logger = ()=>{
    console.log("Logged In After 2 seconds!");
    document.querySelectorAll('.container')[1].innerHTML = "<b>Timeout Active</b>"
}
setTimeout(logger,2000);

//Repeatative 

// clr = setInterval(()=>{
//     console.log("Logged In");

// },2000)


// clearInterval(clr)  //Stop The Interval


//JavaScript LocalStorage

// localStorage.clear()

// localStorage.setItem("Name","Sumit")

// console.log(localStorage)

// console.log(localStorage.getItem("Name"))


//JSON

// obj = {name:"Sumit",length:1,a:{key:"Nothing"}}

// jsonString = JSON.stringify(obj);


// parsed = JSON.parse(jsonString);


// console.log(obj)
// console.log(jsonString)
// console.log(parsed)


// Template Literals 

a = 45;

console.log(`This is a Template Literal : ${a}`)
