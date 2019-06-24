// make a to do List
// 1- type inside a form
// 2- click a button
// 3- add items to the
// 4- we want to strike through the taskes
// that are complete want to clear all tasks
// 5- calculate how many tasks are on our to do list


// these elements control the buttons
document.getElementById("addButton").onclick = addToList;
document.getElementById('clearComplete').onclick= clearComplete;
document.getElementById('clearButton').onclick= clearList;

// this count stands for the counters starter point
let count = 0


let form = document.querySelector("form")
form.addEventListener('submit', function(e) {
  let item = document.getElementById("userInput").value;
  // e stands for events// queryselector get first element on html with the parameter that's passed into
  e.preventDefault()// keeps you on the same page w/o refreshing
  if (item ==""){
    alert ("please write something.")
  }else{
    addToList()
    document.getElementById('userInput').value = ""
  }
})
// this is for the input
function addToList() {
  let item = document.getElementById("userInput").value;
  let ul = document.getElementById('listItems');
  let textNode = document.createTextNode(item)
  let li = document.createElement('li');

// // this is the value for the input. if the string is empty it will alert
// "please write something"
  if (item ==""){
    alert("Set your goals then crush them!")
  }else{
    li.appendChild(textNode);
    // this appendchild tells text to become a child of the ul and add it to the list on the dom
    ul.appendChild(li);
    count++
    document.getElementById('userInput').value = ""
    document.getElementById("counterItems").innerHTML= count
  }
}
// this is event delegation, targeted all the li's in the ul and if it is clicked on,
// all of things are given the class name completed and goes away
let ul = document.querySelector("ul")
ul.addEventListener("click", function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("completed")
    let completedNumber = document.getElementsByClassName("completed").length
     let totalNumber = count - completedNumber
     document.getElementById("counterItems").innerHTML=totalNumber
  }
})

function clearList(){
ul.innerHTML=""
count=0
document.getElementById("counterItems").innerHTML= count
}

function clearComplete(){
let completed = ul.querySelectorAll(".completed")
completed.forEach(function(li){
  count--
  ul.removeChild(li)
  document.getElementById("counterItems").innerHTML= count

})
}
