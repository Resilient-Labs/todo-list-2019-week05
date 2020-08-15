//Some help during Community Hours
const addBtn = document.querySelector('.addBtn');
const ul = document.getElementById('myUL')
const inputValue = document.getElementById('myInput');
//let myInput = document.getElementById('myInput');
let remain = document.querySelector('.remaining');
let remainder = 1;

function addList() {
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
  document.getElementById('myUL').innerHTML = "";
}
clearList.addEventListener('click', clearAll)

/*const checkMark =

function checkDone() {
  document.addEventListener('click', checkDone)
}*/

/*let remain = document.querySelector('.remaining').value;
let remainder = 0; */

function crossoutLi(e) {
  e.target.classList.toggle('strikeThrough')

  if (e.target.classList.contains('strikeThrough')){
    e.target.classList.toggle('.strikeThrough');
    /*let count = remainder--
    remain.innerHTML = count.toString()
      console.log(remain)*/
    document.querySelector('.remaining').innerText = parseInt(document.querySelectorAll('.toDo').length) - document.querySelectorAll('.strikeThrough').length
  }
}
ul.addEventListener('click', crossoutLi)


//CHECK BOXES
/*const completedTask = document.createElement('INPUT');
completedTask.setAttribute('type', 'checkbox');
li.appendChild(completedTask);
completedTask.setAttribute('id', 'box');*/



let clearDone = document.querySelector('.clearCom');

  function clearCom() {
    document.querySelectorAll('.toDo').forEach((item,) => {
      if (item.classList.contains('strikeThrough')) {
        item.parentNode.removeChild(item);
      }
    });
  }
clearDone.addEventListener('click', clearCom)

/* let remain = document.querySelector('.remaining').value;
let remainder = 0;

function remainingItems(e) {
  console.log('help')
  if (e.target.classList.contains('.toDo')){
    e.target.classList.toggle('strikeThrough');
    remainder++
    document.querySelector('.remaining').innerText = document.querySelector('myUL').length - document.querySelectorAll('.strikeThrough').length
  }
}
  remainingItems.addEventListener() */

//Vonds helped :)

/* let activityRemain = document.querySelector('.remaining');
  let activityRemain = 0;

  function remainingAct(){

  }
  /*function logKey(e){
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }*/
