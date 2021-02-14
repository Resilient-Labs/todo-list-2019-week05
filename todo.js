
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
document.querySelector("#addButton").addEventListener('click', newElement)
function newElement() {
  console.log("working")
  var li = document.createElement("li");
  var inputValue = document.getElementById("listToDo").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.querySelector("ul").appendChild(li)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById(".evanesco").appendChild(li);
  }
  document.getElementById("addButton").value = "";

  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}











