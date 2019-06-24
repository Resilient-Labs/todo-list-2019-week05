
var li = document.createElement("li")
document.getElementById('clearCompletedButton').onclick = clearCompleted;
document.getElementById('clearListButton').onclick = clearWholeList;
document.getElementById('addListButton').onclick = addToList;
let count= document.getElementById("howMuchToDo").innerText=""

function addToList(){
  let userInput = document.getElementById('inputItem').value;
  var ul = document.getElementById("listToAddTo");
   li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput));
  let clearlist=li.className="unChecked"
  li.onclick=crossOut
  li.style.background="rgba(216, 216, 216, 0.7)"
  ul.appendChild(li);
  countList ()
}

function crossOut(){
  this.className = "completed"
}


function clearCompleted (){
  let x = document.querySelectorAll(".completed");
  let z = document.querySelectorAll("li");
  let hold = z.length - x.length;
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  let y = document.getElementById('howMuchToDo').innerHTML = hold;

  console.log('cleared completed')
}


function clearWholeList (){

  let x = document.querySelectorAll("li");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  let y = document.getElementById('howMuchToDo').innerHTML = 0;
  console.log('cleared all')
}
function countList (){
  let x = document.querySelectorAll("li")
  let y = document.getElementById('howMuchToDo').innerHTML = x.length;
  console.log(y);

}
