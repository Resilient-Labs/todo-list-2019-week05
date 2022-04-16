const input = document.querySelector("#inputText");
const ul = document.querySelector("#items");
const btn = document.querySelector("#addBtn");
const clearListBtn = document.querySelector("#clearBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const todosLeft = document.querySelector('#todosLeft')

const addItem = (e) => {
    if (input.value === "") {
        return alert('write something!');
      }
  const li = document.createElement("li");
  e.preventDefault();
  li.innerText = input.value;
  li.onclick = () => {
    li.classList.toggle("lineThrough");
  };
  ul.appendChild(li);
  todosLeft.innerHTML = Number(todosLeft.innerHTML) + 1
  input.value = "";
};

const clearCompleted = () => {
    const completedTasks = document.querySelectorAll(".lineThrough")
    completedTasks.forEach((element) => element.remove());
    todosLeft.innerHTML = Number(todosLeft.innerHTML) - completedTasks.length 
};

const clearList = () => {
    document.querySelectorAll('li').forEach((element) => element.remove())
    todosLeft.innerHTML = 0

};

btn.addEventListener("click", addItem);
clearCompletedBtn.addEventListener("click", clearCompleted);
clearListBtn.addEventListener("click", clearList);
