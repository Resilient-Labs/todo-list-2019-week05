let addBtn = document.querySelector('#addBtn')
let myList = document.querySelector('#myList')
let addTask = document.querySelector('#addTask').value
let removeSelectBtn = document.querySelector("#removeSelectBtn")
document.querySelector('#howManyLeft').innerHTML = 0;

addBtn.addEventListener('click', addToList)
removeAllBtn.addEventListener('click', removeAllFromList)
myList.addEventListener('click', lineThrough)
removeSelectBtn.addEventListener('click', removeSelect)

function addToList() {
  let addTask = document.querySelector('#addTask').value
  let li = document.createElement('li')
  let liText = document.createTextNode(addTask)
  if (addTask != "") {
    li.appendChild(liText)
    myList.appendChild(li)
    document.querySelector('#addTask').value = ""
  }
  else {
    alert("Write Something Fam")
  }
  updateHowMany()
}

function removeAllFromList() {
  var ul = document.getElementById("myList");
  var items = ul.querySelectorAll("li");
  for (var i = 0; i < items.length; ++i) {
    ul.removeChild(items[i])
  }
  updateHowMany()
}

function lineThrough(listItem) {
  listItem.target.classList.toggle("lineThrough")
}

function removeSelect(check) {
  var ul = document.querySelector("#myList");
  var items = ul.querySelectorAll("li");
  for (var i = 0; i < items.length; ++i) {
    if(items[i].classList.contains('lineThrough')) {
      ul.removeChild(items[i])
    }
  }
  updateHowMany()
}

function updateHowMany(){
  var ul = document.getElementById("myList");
  var items = ul.querySelectorAll("li");
  let count = 0;
  for (var i = 0; i < items.length; ++i) {
    count++
  }
  document.querySelector('#howManyLeft').innerHTML = count;
}
