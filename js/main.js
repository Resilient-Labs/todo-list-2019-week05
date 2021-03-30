/*
1. collect info from input
2. add to List on click of add button
3.


*/

var listInput  = document.querySelector('#listInput')

document.querySelector('#addItem').addEventListener('click', addToList)
document.querySelector('[name = "clear"]').addEventListener('click', clearAll)
document.querySelector('[name = "removeCompleted"]').addEventListener('click', deleteFinished)

function addToList(){
var  node = document.createElement('li');
node.addEventListener('click', clickItem => {clickItem.target.classList.add("crossedOut")
incompleteItems()})
var  textNode = document.createTextNode(listInput.value);
  if (listInput.value === '') {
  alert ('enter item in field')
  } else {
    node.appendChild(textNode);
  document.querySelector('ul').appendChild(node);
  }
  listInput.value = ''
  incompleteItems()
}

function incompleteItems(){
  all = document.querySelectorAll('li').length
  done = document.querySelectorAll('.crossedOut').length

  document.querySelector('span').innerText = (all - done)
}

function deleteFinished(){
  document.querySelectorAll('.crossedOut').forEach(element =>{ element.remove()
  incompleteItems()})
}


function clearAll(){
  document.querySelectorAll('li').forEach(element => element.remove())
}
