//Create list items when clicking add

document.querySelector('#clearCompleted').addEventListener('click', clearCompleted)
document.querySelector('#button').addEventListener('click', newElementAndCrossOut)

let input = document.querySelector('#input')
let list = document.querySelector('#listContainer')
var count = 0

document.querySelector('#listContainer').addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() === 'li'){
    e.target.classList.toggle('crossout')
  } 
} )
document.querySelector('#clear').addEventListener('click', function(c){
  document.querySelector('#listContainer').innerHTML = ''
  document.getElementById('counter').innerHTML = 0
}
)

function newElementAndCrossOut(){
  let li = document.createElement("li");
  li.classList.add('item')
  li.appendChild(document.createTextNode(input.value))
  list.appendChild(li)
  count++
  document.getElementById('counter').innerHTML = count;
}
function clearCompleted(){
  let  clearItems= document.querySelectorAll('.crossout')
clearItems.forEach(e => e.classList.add('clear'))
count = count - clearItems.length
document.getElementById('counter').innerHTML = count;
}


// function count(){
//   let counter = document.querySelector('counter');
//   let completedItems = document.querySelector('.crossout')
//   let listItems = document.querySelectorAll('li.item');
//   let total = listItems - completedItems;
//   counter.innerHTML = total;
// }
// function clearList(){
//   let clear = document.getElementById('li')
//   clear.parentNode.removeChild(clear)
//   }


// function uncrossout(){
//   let listItems = document.querySelectorAll('.item')
//   listItems.forEach(e => e.addEventListener('click', function(){
//     e.classList.remove('crossout')
//   }))
// }

//Create a button
//Select same class in li
//have same class li cleared/hidden when button is pressed.


