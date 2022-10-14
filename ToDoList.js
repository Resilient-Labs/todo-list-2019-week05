const text = document.getElementById("task");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clearBtn");
const tasks = document.getElementById("tasks");



addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTasks);

function addTask() {
  let li = document.createElement("li");
  li.innerText = text.value;
  li.addEventListener("click", checkDone);
  tasks.appendChild(li);
}

function checkDone(e) {
  let li = e.target;
  li.classList.toggle("done");
}
function clearTasks() {
  const list = (document.querySelector("ul").innerHTML = "");
  
}

// function updateCount (li) {
  
//   document.querySelector('#amount').innerText.count()


// }




