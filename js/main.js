//https://stackoverflow.com/questions/51573435/want-to-add-addeventlistener-on-multiple-elements-with-same-class
document.querySelector('.submit').addEventListener('click', newTask) //Calls function to make new LI
document.querySelector('#clearAll').addEventListener('click', clearAll)
document.querySelector('#clearC').addEventListener('click', clearCompleted)

let list = document.querySelector('#mainList') //ul from html document
let tasks = document.querySelector('.taskCount')
let newText //Holds text typed into dom input
let items = 0 //counter for how many lis there are in the dom


function newTask(){
  tasks.innerText = `Tasks: ${items}`
  newText = document.querySelector('.new').value
  if (newText == ""){ //Checks to see if blank
    alert('Please enter a task')
    return
  }
  items += 1
  if (items > 0){
    let newLi = document.createElement('li') //make new elements
    let newP = document.createElement('p')
    newP.innerText = newText //set
    let newI = document.createElement('i')
    newI.classList.add('fas')
    newI.classList.add('fa-backspace')
    newI.classList.add('hvr')
    newLi.appendChild(newI)
    newLi.appendChild(newP)
    list.appendChild(newLi)
    newP.classList.toggle('anim')

    document.querySelectorAll('.hvr').forEach(function(item) { //Got some help from stack over flow for this. Link above.
    item.addEventListener('click', erase)
     })

     document.querySelectorAll('main p').forEach(function(item) { //Got some help from stack over flow for this. Link above.
     item.addEventListener('click', strike)
      })

  }
}

function erase(event){
  let currentli = event.target.parentNode
  list.removeChild(currentli)
  items -= 1
  tasks.innerText = `Tasks: ${items}`
}

function strike(event){
  // alert('we in')
  let p = event.target

  if (p.parentNode.classList < 1){
    p.style.textDecoration = "line-through"
  }
  else{
    p.style.textDecoration = "none"
  }

  p.parentNode.classList.toggle('crossed')
}

function clearAll(){
  document.querySelectorAll('li').forEach(function(item) {
    list.removeChild(item)
    items -= 1
    tasks.innerText = `Tasks: ${items}`
   })
}

function clearCompleted(){
  for (i = 1; i <= items; i++){
    document.querySelectorAll('li').forEach(function(item) {
      if (item.classList.contains('crossed')){
        list.removeChild(item)
        items -= 1
        tasks.innerText = `Tasks: ${items}`
      }
     })

  }
}
