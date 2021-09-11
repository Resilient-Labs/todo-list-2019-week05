let counter = 0


document.querySelector('#submit').addEventListener('click', addTask)
document.querySelector('#clearList').addEventListener('click', clearTask)


document.querySelector('#listHere').addEventListener('click', (items) =>{
  items.target.classList.toggle('lineThrough')
})

document.querySelector('#clearCompleted').addEventListener('click', ()=> {

let itemline = document.getElementsByClassName('lineThrough')
let completedItems = itemline.length
while(itemline.length > 0){
  itemline[0].parentNode.removeChild(itemline[0])

}

counter -= completedItems
document.querySelector('#counters').innerText = counter
  // fix counter
 // document.querySelector('#counters').innerText = counter - aub
})





function addTask(){
  let tag = document.createElement('li');
  let text = document.createTextNode(document.querySelector('#task').value);
  tag.appendChild(text);
  let element = document.getElementById('listHere');
  element.appendChild(tag);
  counter += 1
  document.querySelector('#counters').innerText = counter
}




// // only line through what i click
// function lineThroughTask(){
// }


// fix reset after clear
function clearTask(){
  let node = document.querySelector('#listHere')
  //node.childNodes  document.querySelector('#listHere').childNodes
  while(node.firstChild){
    node.removeChild(node.firstChild)
  }
  counter = 0
  document.querySelector('#counters').innerText = counter
}
