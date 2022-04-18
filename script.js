// Connects to the Dom

document.getElementById("addButton").onclick = addItem;
const removeBtn = document.getElementById("remove")
const eraseAll = document.getElementById("clearAllButton").onclick = clearAllButton;
const ol = document.querySelector("#listItems")
ol.addEventListener("click", deleteItems)
const counter = document.querySelector("#counting")
let numberOfThingsToDo = 0;



//Increase counter as list items are added
function increaseCounter() {
  numberOfThingsToDo += 1
  counter.innerText = numberOfThingsToDo.toString();
}

//Reset counter when list is cleared
function resetCounter() {
  counter.innerText = "0";
  numberOfThingsToDo = 0;
}


// if item is striked through decrease counter by number of items striked through
function decreaseCounter() {
  numberOfThingsToDo -= 1
  counter.innerText = numberOfThingsToDo.toString();
}


// This function adds items to the list
function addItem(){
  const item = document.getElementById("inputValue").value;
  const ol = document.getElementById("listItems")
  const li = document.createElement("li");
  li.className = "notThru";
  li.appendChild(document.createTextNode(item));
  ol.appendChild(li);
  increaseCounter()
}

//Emily and Vonds helped
// This function crosses out items
function deleteItems(e) {
  if (e.target.classList.contains("notThru")) {
    e.target.style.textDecoration = "line-through"
    e.target.style.color = "darkgray"
    e.target.className = "thru"
    decreaseCounter();
  } else if (e.target.classList.contains("thru")) {
    e.target.style.textDecoration = "none"
    e.target.style.color = "black"
    e.target.className = "notthru"
    increaseCounter();
  }
}

//Clears everything-clear button
eraseAll.addEventListener("click", function() {
  const list = document.getElementById("listItems");
  const listedItems = list.getElementsByTagName("li");
    for(let i=0; i<listedItems.length;i++){
      listedItems[i].style.display="none"
    }
      resetCounter();
});

removeBtn.addEventListener("click", function() {
  const list = document.getElementById("listItems");
  const listedItems = list.getElementsByTagName("li");
  const strikeThru = document.getElementsByClassName("thru")
    for(let i=0; i <strikeThru.length; i++){
      strikeThru[i].style.display="none"
    }
});
