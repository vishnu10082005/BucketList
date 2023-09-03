//create an empty space
var bucketList = []

var listContainer = document.querySelector("#list-container")

function addValues(){
    //taking input from input field
    var value = document.getElementById("input-field").value
    //pushing it inside the array - bucketList
    bucketList.push(value)
    //Display the list
    displayList()
}

function displayList(){

    //clearing the previous list
    listContainer.innerHTML = ""

    for(let i=0;i<bucketList.length;i++){
        var li = document.createElement("li")
        //inserting an array element
        li.innerHTML = bucketList[i] + `<span><img onclick="remove(`+ i +`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt=""></span>`
        //inserting the <li></li> tag created into the ul #list-container
        listContainer.append(li)
    }
}


