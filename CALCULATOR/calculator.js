let allButtons = document.querySelectorAll(".buttons");
allButtons.forEach((element)=>{
    console.log("Hello");
    if(element.innerHTML == "AC" || element.innerHTML == "DE" || element.innerHTML == "." || element.innerHTML == "/" || element.innerHTML == "X" || element.innerHTML == "-" || element.innerHTML == "+" || element.innerHTML == "="){
        element.style.color = "cyan";
    }
    if(element.innerHTML == "="){
        element.style.width = "225px";
    }
})




let string = "";

function enter(values){
    if(values=="AC"){
        document.getElementById("inputs").innerHTML = '0';
        string = "";
    }
    else if(values == "DE"){
        string = string.substring(0,string.length-1);
        document.getElementById("inputs").innerHTML = string;
    }
    else if(values == "="){
        string = eval(string);
        document.getElementById("inputs").innerHTML = string;
    }
    else{
        string += values;
        document.getElementById("inputs").innerHTML = string;
    }
}