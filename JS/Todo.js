//Some help during Community Hours
const addBtn = document.querySelector('.addBtn');
const ul = document.getElementById('myUL')
const inputValue = document.getElementById('myInput');
//let myInput = document.getElementById('myInput');
let remain = document.querySelector('.remaining');
let remainder = 1;


function addList(e) {
  e.preventDefault();
  if (inputValue.value === ''){
    return alert("ENTER SOMETHING")
  }
  const li = document.createElement('li');
  //Adding the to-do item to the to-do list
  let addText = document.createTextNode(inputValue.value);
  li.className = 'toDo';
  li.appendChild(addText);
  ul.appendChild(li);
  document.getElementById("myInput").value = "";
  let count = remainder++
  remain.innerHTML = count.toString()
  console.log(remain)
}
addBtn.addEventListener('click', addList)


//Clear ALL list items button
let clearList = document.querySelector('.clearAll');

function clearAll() {
  remainder = 1;
  document.getElementById('myUL').innerHTML = "";
  document.querySelector('.remaining').innerHTML = "0";
}
clearList.addEventListener('click', clearAll)


function crossoutLi(e) {
  e.target.classList.toggle('strikeThrough')

  if (e.target.classList.contains('strikeThrough')){
    e.target.classList.toggle('.strikeThrough');

    document.querySelector('.remaining').innerText = parseInt(document.querySelectorAll('.toDo').length) - document.querySelectorAll('.strikeThrough').length
  }
}
ul.addEventListener('click', crossoutLi)



let clearDone = document.querySelector('.clearCom');

function clearCom() {
  remainder = 1;
  document.querySelectorAll('.toDo').forEach((item,) => {
    if (item.classList.contains('strikeThrough')) {
      item.parentNode.removeChild(item);
    }
  });
}
clearDone.addEventListener('click', clearCom)
