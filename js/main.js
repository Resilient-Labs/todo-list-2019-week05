const toDoList = document.querySelector('ul');
let form = document.querySelector('#addToDo');
form.addEventListener('submit',addItem);
let clearAll= document.querySelector('#clearAll');
clearAll.addEventListener('click', clearToDoList);
toDoList.addEventListener('click', toggleCompleted)

function addItem(e) {
  e.preventDefault()
  document.querySelector('input').value;
  let li = document.createElement('li');
  let addLi =
  document.createTextNode(document.querySelector('input').value);
  li.appendChild(addLi);
  toDoList.appendChild(li);
  document.getElementById('toDo').innerText = toDoList.getElementsByTagName("li").length;
}

function clearToDoList() {
  while (toDoList.firstChild){
    toDoList.removeChild(toDoList.firstChild);
  }
}

function toggleCompleted(e) {
  if (e.target.nodeName !== "LI") return;
  e.target.classList.toggle('crossOut');
}
function clearComplete() {
  while (toDoList.firstChild){
    if () {
      //check the class of the child with crossOut
    }
    toDoList.removeChild(toDoList.firstChild)
  }
}
// decrease the count of 'toDo' to reflect the remaining total
