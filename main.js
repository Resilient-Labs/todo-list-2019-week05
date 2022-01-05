//clickable buttons
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".deleteAll");
const filterAll = document.querySelector(".deleteEverything");
//more element creators
const toDoSection = document.createElement("section");
const newTodo = document.createElement("li");
const deletebutton = document.createElement("button");
const completeButton = document.createElement("button");
//I need event listeners for the buttons
toDoButton.addEventListener("click", add);
toDoList.addEventListener("click", erase);
filterOption.addEventListener("click", filterTodo);
filterAll.addEventListener("click", eraseAll);

function add(event) {
  event.preventDefault();
  if (toDoInput.value != "") {
    const toDoSection = document.createElement("section");
    toDoSection.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add("todo-item");
    toDoSection.appendChild(newTodo);
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deletebutton.classList.add("delete-btn");
    toDoSection.appendChild(deletebutton);
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completeButton.classList.add("complete-btn");
    toDoSection.appendChild(completeButton);
    toDoList.appendChild(toDoSection);
    toDoInput.value = "";
    updateCount();
  } else {
    alert("Please enter a valid task.");
  }
}

function erase(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  updateCount();
}

//   I got this example from google, it uses the target method to select the button and then creates a new variable which is the parent element corresponding section. It then runs a remove method on the variable which gets rid of the entire section created by the submit function. 0 corresponds to the first class I believe.
//

function filterTodo() {
  const checkList = document.querySelectorAll(".todo");

  checkList.forEach(function (checkList) {
    const isCompleted = checkList.classList.contains("completed");
    if (isCompleted) {
      checkList.remove();
      updateCount();
    }
  });
}

function eraseAll() {
  const allList = document.querySelectorAll(".todo");
  allList.forEach(function (allList) {
    const isCompleted = allList.classList.contains("todo");
    if (isCompleted) {
      allList.remove();
      updateCount();
    }
  });
}

function updateCount() {
  const countList = toDoList.childElementCount;
  const counterButton = document.querySelector(".counterButton");
  counterButton.innerHTML = `${countList} left`;
  //FIRST TRY BABYYY....I had to google childElementCount....SECOND TRY BABYYYYYY
}
