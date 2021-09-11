const addButton = document.querySelector("#add");
const myList = document.querySelector("#myList");

let allItems = 0;

function addItem() {
  //add item to list - declaring a new element li
  let toDo = document.createElement("li");
  //retrieve user input
  const newItem = myList.value;
  myList.value = "";
  
  
  toDo.innerText = newItem;
  
  allItems = document.querySelectorAll("li").length - document.querySelectorAll(".crossedOut").length
  document.querySelector(".remaining").innerText = allItems
  document.querySelector("ul").appendChild(toDo);
  
  
  //insert user input into toDo list
  toDo.addEventListener("click", function () {
    toDo.style.textDecoration = "line-through";
    toDo.classList.add("crossedOut");
    toDo.style.textDecorationColor = "blue";
    allItems = document.querySelectorAll("li").length - document.querySelectorAll(".crossedOut").length
  document.querySelector(".remaining").innerText = allItems
  });
}

function deleteItem() {
  let crossedOut = document.querySelectorAll(".crossedOut");
  crossedOut.forEach(function (el) {
    el.remove();
  });
  allItems = document.querySelectorAll("li").length - document.querySelectorAll(".crossedOut").length
  document.querySelector(".remaining").innerText = allItems

}

document.querySelector(".clear").addEventListener("click", deleteItem);
addButton.addEventListener("click", addItem);
// above refers to function to re-call from line 4

querySelectorAll(li).length;
