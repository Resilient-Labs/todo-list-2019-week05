let button = document.querySelector("button");
let clearList = document.getElementById("clear");
let clearDone = document.getElementById("clearDone")
//clear done for button clearComplete
// clearList.addEventListener("click",erase)
const list = document.getElementById("list")
let counter = 0
// counter to go up every time and down every time it strikes
// unstrike go back up

function addItem() {
  document.querySelector("input").value;
  let li = document.createElement("li");
  li.className = "toDo"
  let addLi = document.createTextNode(document.querySelector("input").value)
  li.appendChild(addLi);
  document.querySelector("ul").appendChild(li);
  document.getElementById("toDo").innerText = document.querySelectorAll("li").length;
  // you have 10 todos left
}

clearList.onclick = function(){
  list.innerHTML = "";
  document.getElementById('toDo').innerHTML = 0;
}


function cross(e) {
  // console.log(e.target.classList)
  if (e.target.classList.contains("toDo")){
    e.target.classList.toggle("crossOff");
    counter++
    document.getElementById("toDo").innerText = document.querySelectorAll("li").length - document.querySelectorAll(".crossOff").length

  }

}


function clearComplete() {
  document.querySelectorAll(".toDo").forEach((item,) => {
    if(item.classList.contains("crossOff")) {
      item.parentNode.removeChild(item);
    }
  });


}
clearDone.addEventListener("click", clearComplete);
list.addEventListener("click", cross)
button.addEventListener("click",addItem)
