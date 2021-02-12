// eventlistenrs to add words to todo list when empty
document.getElementById("fresh").addEventListener("click", function () {
  var task = document.getElementById("words").value;
  if (task) {
    addNewTask(task);
    document.getElementById("words").value = "";
  }
});
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode reference to parentNode
function removeItem() {
  var item = this.parentNode.parentNode; // this targets li
  var parent = item.parentNode; // this targets  ul

  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var parentId = parent.id;

  //this is to change between complete and uncomplete tasks
  var target =
    parentId === "todoL"
      ? document.getElementById("ready")
      : document.getElementById("todoL");

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes reference to childNodes
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

// function to add new tasks to todo list
function addNewTask(item) {
  var list = document.getElementById("todoL");

  var newItem = document.createElement("li");
  newItem.innerText = item;

  var buttonS = document.createElement("div");
  buttonS.classList.add("ticks");

  //this makes remove/complete button
  var remove = document.createElement("button");

  remove.classList.add("strikeOut");
  remove.addEventListener("click", removeItem);

  var complete = document.createElement("button");

  complete.classList.add("finish");
  complete.addEventListener("click", completeItem);
  // https://www.javascripttutorial.net/javascript-dom/javascript-append//
  buttonS.appendChild(remove);
  buttonS.appendChild(complete);
  newItem.appendChild(buttonS);

  //inserts a task/item before first element
  list.insertBefore(newItem, list.childNodes[0]);
}

// event listener to the premadelist tasks
var deleteIt = document.getElementsByClassName("strikeOut");
for (var i = 0; i < deleteIt.length; i++) {
  deleteIt[i].addEventListener("click", removeItem);
}

var changeIt = document.getElementsByClassName("finish");
for (var i = 0; i < changeIt.length; i++) {
  changeIt[i].addEventListener("click", completeItem);
}

function count() {
  var ul = document.getElementById("todoL");
  var i = 0,
    c = 0;
  while (ul.getElementsByTagName("li")[i++]) c++;
  alert(c);
}

