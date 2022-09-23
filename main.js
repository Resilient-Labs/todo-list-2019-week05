const input = document.querySelector("#inputText");
const ul = document.querySelector("#items");
const btn = document.querySelector("#addBtn");
const clearListBtn = document.querySelector("#clearBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const todosLeft = document.querySelector("#todosLeft");
window.onload = () => {
  if (localStorage.getItem("todos")) {
    console.log("hello");
  } else {
    localStorage.setItem("todos", JSON.stringify([]));
  }
};

const addItem = (e) => {
  if (input.value === "") {
    return alert("write something!");
  }
  const li = document.createElement("li");
  li.classList.add(todosLeft.innerHTML);
  e.preventDefault();
  li.innerText = input.value;
  li.onclick = () => {
    const inputValue = li.innerHTML;
    console.log(li.classList, "b");
    li.classList.toggle("lineThrough");
    console.log(li.classList, "c");
    localStorage.getItem("todos")[li.classList[0]].linethrough =
      li.classList.contains("lineThrough");
    console.log(inputValue, li.classList[0]);
  };
  ul.appendChild(li);
  todosLeft.innerHTML = Number(todosLeft.innerHTML) + 1;
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  storedTodos.push({
    position: todosLeft.innerHTML,
    text: input.value,
    linethrough: false,
  });
  localStorage.setItem('todos', JSON.stringify(storedTodos))
  input.value = "";
};

const clearCompleted = () => {
  const completedTasks = document.querySelectorAll(".lineThrough");
  completedTasks.forEach((element) => element.remove());
  todosLeft.innerHTML = Number(todosLeft.innerHTML) - completedTasks.length;
};

const clearList = () => {
  document.querySelectorAll("li").forEach((element) => element.remove());
  todosLeft.innerHTML = 0;
};

btn.addEventListener("click", addItem);
clearCompletedBtn.addEventListener("click", clearCompleted);
clearListBtn.addEventListener("click", clearList);
