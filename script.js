// Connects to the Dom

document.getElementById("addButton").onclick = addItem;
const removeBtn = document.getElementById("remove")
const eraseAll = document.getElementById("clearAllButton").onclick = clearAllButton;
const ol = document.querySelector("#listItems")
ol.addEventListener("click", deleteItems)


// This function adds items to the list
function addItem(){
  const item = document.getElementById("inputValue").value;
  const ol = document.getElementById("listItems")
  const li = document.createElement("li");
  li.className = "notThru";
  li.appendChild(document.createTextNode(item));
  ol.appendChild(li);
}

//Emily and Vonds helped
// This function crosses out items
function deleteItems(e) {
  if (e.target.classList.contains("notThru")) {
    e.target.style.textDecoration = "line-through"
    e.target.style.color = "darkgray"
    e.target.className = "thru"
  } else if (e.target.classList.contains("thru")) {
    e.target.style.textDecoration = "none"
    e.target.style.color = "black"
    e.target.className = "notthru"
  }
}

//Clears everything-clear button
eraseAll.addEventListener("click", function() {
  const list = document.getElementById("listItems");
  const listedItems = list.getElementsByTagName("li");
    for(let i=0; i<listedItems.length;i++){
      listedItems[i].style.display="none"
    }
});

removeBtn.addEventListener("click", function() {
  const list = document.getElementById("listItems");
  const listedItems = list.getElementsByTagName("li");
  const strikeThru = document.getElementsByClassName("thru")
    for(let i=0; i <strikeThru.length; i++){
      strikeThru[i].style.display="none"
    }
});
