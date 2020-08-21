let item= document.getElementById('itemInput');
let toDoList=document.getElementById("list");
var listItems = [];
let count = 0;


document.querySelector("#submitButton").addEventListener("click", () => {
         event.preventDefault();
         addItem();
         count++;
         document.getElementById("count").innerHTML = count;
}, false);

function addItem(){
  let item = document.getElementById('itemInput').value;
  if(item == " "){
    alert("Oh no! You forgot to enter a todo!");
  }else{
    listItems.push(item);
    var newLi = document.createElement("li");
    newLi.className = "done";
    newLi.style.listStyle="none";
    var text = document.createTextNode(item);
    newLi.appendChild(text);
    toDoList.appendChild(newLi);
    document.getElementById('itemInput').value= " ";
  }
}

toDoList.addEventListener("click", addStrikeAndUpdate);
function addStrikeAndUpdate(e){
  if(e.target.classList.contains("strike")){
    e.target.classList.remove("strike")
    count++;
    document.getElementById("count").innerHTML = count;
  }else{
    e.target.classList.add("strike")
    count--;
    document.getElementById("count").innerHTML = count;
  }
}
document.querySelector("#clearCompleted").addEventListener("click", clearDone)
function clearDone(){
  let completedLi = document.getElementsByClassName("strike");
  while(completedLi.length>0){
    var i = 0;
    completedLi[i].remove();
    i++;
  }
}
document.querySelector("#clearAll").addEventListener("click", clearEverything)
function clearEverything(){
    while(toDoList.firstChild){
      toDoList.removeChild(toDoList.firstChild);
    }
    count = count-count;
    document.getElementById("count").innerHTML = count;
  }
