document.getElementById('enter').onclick = toDoAdd;
document.getElementById('clear').onclick = clearAll;
document.getElementById('complete').onclick = clearComplete;
document.getElementById('save').onclick = save;

var myStorage = window.localStorage;
var li = document.createElement("li");
var historyBtn = document.querySelector('#history');
var hisList= localStorage.getItem('toDoList');


var count = 0;

var form = document.getElementById("inputContainer");
form.addEventListener("submit", function (e) {
  var item = document.getElementById("input").value;
  e.preventDefault();
  if(item == ""){
    alert("enter something")
  }else{
  toDoAdd();
  document.getElementById("input").value = "";
}
});



function toDoAdd(){


  var item = document.getElementById("input").value;
  var ul = document.getElementById("toDoList");

  var text = document.createTextNode(item);

  var li = document.createElement("li");

  if(item == ""){
    alert("Must write something!")
  }else{

    li.appendChild(text)

    ul.appendChild(li)

    count++
    displayCompleteMessage(count + " items left" + " in your to-do list")

    document.getElementById("input").value = "";

  }

}



var ul = document.querySelector("ul")

ul.addEventListener("click", function(ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle("checked")
  }
})


function clearAll(){
  var ul = document.getElementById("toDoList");
  ul.innerHTML = "";
  localStorage.removeItem('todolist', ul.innerHTML);
  count = 0;
  displayCompleteMessage(count + " items left" + " in your to-do list")
}

function clearComplete(){
  var checkedLi = ul.querySelectorAll(".checked");
  checkedLi.forEach(function(li){
    count--
    ul.removeChild(li)
    displayCompleteMessage(count + " items left" + " in your to-do list")
  })
}

function displayCompleteMessage(msg) {
  document.getElementById("itemCount").innerHTML = msg;
}

var saveBtn = document.querySelector("#save");

saveBtn.addEventListener('click', function(){
   localStorage.setItem('todoList',ul.innerHTML);
   localStorage.setItem("countHistory", count)
   console.log(localStorage);
});

var li = document.createElement("li");
var historyBtn = document.querySelector('#Filter');
var hisList= localStorage.getItem('toDoList');

filterBtn.addEventListener('click', function(){
  const lis = localStorage.getItem('todoList');
  count = localStorage.getItem('countHistory')
   console.log(lis);
   ul.innerHTML=lis;
   displayCompleteMessage(count + " items left" + " in your to-do list")
});
