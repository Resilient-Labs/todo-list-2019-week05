
//gets value from input when click "Add to List"
document.getElementById('addListButton').addEventListener('click', function(){
  let value = document.getElementById('inputItem').value
  if (value) addToList(value)
  numberOfTasks()
});

//creates li and marks li as completed when clicked on
function addToList(text){
  let list = document.getElementById("myList")
  let item = document.createElement("li")
  item.innerText = text;
  myList.appendChild(item)
  item.setAttribute("class", "listItem")
  item.onclick=completedTasks
  return item
}

// updates the number of tasks as li are added
function numberOfTasks (){
  let ulId = document.getElementById("myList");
  let totalLi = ulId.children.length;
  document.getElementById("listNumber").innerHTML=totalLi;
  return totalLi
}

//marks tasks as completed when clicked on. updates number of tasks to do
function completedTasks (){
  this.classList.toggle("completed");
  let completedNumber = document.getElementsByClassName("completed").length
  let totalNumber = numberOfTasks() - completedNumber
  document.getElementById("listNumber").innerHTML=totalNumber
}

//clears all items from list and sets number of tasks to 0
function clearList (){
  let items = document.getElementsByClassName("listItem");
  while(items.length > 0){
    items[0].parentNode.removeChild(items[0]);
  }document.getElementById("listNumber").innerHTML=0;
}

document.getElementById('clearListButton').onclick = clearList;

//clears all completed item from list and updates count to number of tasks to do
function clearCompleted(completed){
  let completedItems = document.getElementsByClassName("completed");
  while(completedItems.length > 0){
    completedItems[0].parentNode.removeChild(completedItems[0]);
  }
}
document.getElementById('clearCompletedButton').onclick = clearCompleted;
