// # TO DO'S LEFT
function runCount(){
  document.getElementById("count").innerHTML = count()
  function count(){
    let allItems = document.querySelectorAll("li").length
    let completedItems = document.querySelectorAll(".completed").length
    let remainingItems = allItems - completedItems
    return remainingItems;
  }
}

// ADD LIST ITEM
document.getElementById('buttonAddToList').onclick = function addToList(){
  let newText = document.getElementById('userInput').value;
  let ul = document.getElementById("listToAddTo");
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(newText));
  ul.appendChild(newLi);
  newLi.onclick= completedItems

  runCount()
}

// TOGGLE COMPLETED
function completedItems (){
  this.classList.toggle("completed");

  runCount()
}

// CLEAR LIST
document.getElementById("buttonClearList").onclick = function clearList(){
  let completed = document.querySelectorAll("li");
  completed.forEach(function(element) {
    element.parentNode.removeChild(element);

    runCount()
  });
}

// CLEAR COMPLETED
document.getElementById("buttonClearCompleted").onclick = function clearCompleted(){
  let completed = document.querySelectorAll(".completed");
  completed.forEach(function(element) {
    element.parentNode.removeChild(element);
  });
}
