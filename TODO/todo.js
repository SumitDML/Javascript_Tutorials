
function create(){
    console.log("Updating Item...");
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;


    if(desc == "" || tit ==""){
        alert("You must fill out the form first!");
    }
    else{
        if(localStorage.getItem("items")==null){
            itemsArray = [];
            itemsArray.push([tit,desc]);
            localStorage.setItem("items",JSON.stringify(itemsArray))
        }
        else{
            itemsArray = JSON.parse(localStorage.getItem("items"));
            itemsArray.push([tit,desc]);
            localStorage.setItem("items",JSON.stringify(itemsArray))
        }
    }
    update(itemsArray);
}
function update(getArray){
    if(localStorage.getItem("items")==null){
        itemsArray = [];
    }
    else{
        itemsArray = getArray;
    }
    let str = "";
    let tablebody = document.getElementById("tableBody");
    itemsArray.forEach((element,index) => {
        str += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-delete" onClick="remove(${index})">Delete</button></td>
            </tr>
        `   
    });
    tablebody.innerHTML = str;
    document.getElementById("title").value = "";
    document.getElementById("description").value ="";
}

function remove(itemIndex){
    itemsArray = JSON.parse(localStorage.getItem("items"));
    console.log("Deleting Item :",itemIndex+1);
    //Delete
    itemsArray.splice(itemIndex,1); 
    localStorage.setItem("items",JSON.stringify(itemsArray));
    update(itemsArray);
}

searchButton.addEventListener("click",()=>{


    let localValue = localStorage.getItem("items");
    let searchValue = document.getElementById("search-bar").value;
    console.log(localValue);
    console.log(searchValue);


})

clearStorage.addEventListener("click",()=>{
    if(confirm("Do you really want to clear the list?")){
        console.log("Clearing...")
        localStorage.clear();
        update(JSON.parse(localStorage.getItem("items")));
    }
})


add.addEventListener("click",create)
add = document.getElementById("add");
update(JSON.parse(localStorage.getItem("items")));

