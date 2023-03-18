const input = document.querySelector(".taskInput");
const btn = document.querySelector(".submit");
const todo = document.querySelector(".showList");
const clear = document.querySelector("#clear");
const complete = document.querySelector("#hide");

clear.addEventListener("click", reset);
let count = document.querySelector("h2");
let num = 0;

const createTask = () => {
  if (input.value === "") return alert("Please Insert a Task. ");

  const chore = document.createElement("li");
  chore.innerText = input.value;
  todo.appendChild(chore);
  input.value = "";
  chore.addEventListener("click", crossOut);

  num++;
  if (num === 1) {
    count.innerText = "You have " + num + " task";
  } else if (num === 0) {
    count.innerText = "No tasks yet";
  } else {
    count.innerText = "You have " + num + " tasks";
  }
}



btn.addEventListener("click", createTask);

function reset() {
  //     const todoList = document.querySelectorAll("li");
  //  while (todoList.firstChild) {
  //   todoList.firstChild.remove();
  // }
  // let bye = document.querySelectorAll('li');
  // bye.forEach(li => li.remove());

  while (todo.firstChild) {
    todo.removeChild(todo.lastChild);
    count.innerText = "No tasks yet";
  }
}



complete.addEventListener("click", clearComplete);

function clearComplete() {
  document.querySelectorAll(".strike").forEach((li) => li.remove());
  let listItems = document.querySelectorAll("li");
  let number = listItems.length;
  if (number === 1) {
    count.innerText = "You have " + number + " task";
  } else if (number === 0) {
    count.innerText = "No tasks yet";
  } else {
    count.innerText = "You have " + number + " tasks";
  }
}



function crossOut(e) {
  e.target.classList.toggle("strike");

  if (e.target.classList.contains("strike")) {
    num--;
  } else {
    num++;
  }

  if (num === 1) {
    count.innerText = "You have " + num + " task";
  } else if (num === 0) {
    count.innerText = "No tasks yet";
  } else {
    count.innerText = "You have " + num + " tasks";
  }
}
