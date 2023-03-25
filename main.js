let list = document.querySelector('#list')
let items = document.querySelector('#addBar')
let plus = document.querySelector('#addButton')
let clearBtn = document.querySelector('#clear')
let clearCompletedBtn = document.querySelector('#clearCompleted')

plus.addEventListener('click', add)
clearBtn.addEventListener('click', clear)
clearCompletedBtn.addEventListener('click', clearCompleted)

function add(){
  let item = document.createElement('li');
  item.innerText = items.value;
  item.addEventListener('click', toggleSelectedClass);
  list.appendChild(item);
  items.value='';
  
  let count = list.querySelectorAll('*').length; // get count of all child elements
  document.querySelector('#count').innerHTML = "Tasks: " + count; // update the count displayed on the page
}

function toggleSelectedClass(event){
  event.target.classList.toggle('selected');
  
  let count = list.querySelectorAll('*').length; // get count of all child elements
  document.querySelector('#count').innerHTML = "Tasks: " + count; // update the count displayed on the page
}


function clear() {
  list.innerHTML = ''; 
  document.querySelector('#count').innerHTML = "Tasks: " + 0;
}

function clearCompleted() {
  let selectedItems = list.querySelectorAll('.selected');
  selectedItems.forEach(item => {
    list.removeChild(item);
  });
  let count = list.querySelectorAll('*').length;
  document.querySelector('#count').innerHTML = "Tasks: " + count;
}

document.querySelector('#count').innerHTML = "Tasks: " + list.querySelectorAll('*').length ; // set initial count on page load
