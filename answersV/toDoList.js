
// Connets to the Dom
document.getElementById("addBtn").onclick = addItem;
let eraseOne = document.getElementById("removeCom");
let eraseAll = document.getElementById("clearBnt");


// Adds Items To List
function addItem() {
  let item = document.getElementById("toDoInput").value;
  console.log(item);
  let ul =   document.getElementById("toDoList")
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  li.onclick = markComplete;

  count();

}

// Cross Out Completed
function markComplete() {
  this.className = "completed"
  count();
}


// Remove Completed Button
eraseOne.addEventListener("click", function() {
  let listedItems = document.querySelectorAll(".completed");
  let i;
    for(i=0; i<listedItems.length;i++){
      listedItems[i].style.display="none"
    }
});

// Clear All Button
eraseAll.addEventListener("click", function() {
  let counter = document.getElementById("counting");
  let listedItems = document.querySelectorAll("li");
  let i;
    for(i=0; i<listedItems.length;i++){
      listedItems[i].style.display="none"
    }
  counter.innerHTML = 0;
});

// Does the counting of items left
function count(){
  let counter = document.getElementById("counting");
  let compItems = document.querySelectorAll(".completed");
  let allListItems = document.querySelectorAll("li");
  let total = allListItems.length - compItems.length;

  counter.innerHTML = total;
}
