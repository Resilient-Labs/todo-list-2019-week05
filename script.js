
//connect clear all button and add button
//Add Items
//Cross Out completed
//Counter for Items

// Connects to the Dom
// Connects to the Dom
document.getElementById("addButton").onclick = addItem;
let eraseAll = document.getElementById("clearAllButton").onclick = clearAllButton;

// This function adds items to the list
function addItem(){
  let item = document.getElementById("inputValue").value;
  let ol = document.getElementById("listItems")
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(item));
  ol.appendChild(li);
}

// This function removed all the items
eraseAll.addEventListener("click", function() {
  // let listedItems = **Find the build in method() that will select all the li**
  let list = document.getElementById("listItems");
  let listedItems = list.getElementsByTagName("li");
  let i; // i will literate through the loop and delete the items
    for(i=0; i<listedItems.length;i++){
      listedItems[i].style.display="none"
    }
});
