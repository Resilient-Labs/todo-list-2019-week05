const taskInput = document.querySelector('#taskInput')
const submitBtn = document.querySelector('#submitBtn')
const printUl = document.querySelector('#printTask')
const clearAllBtn = document.querySelector('#clearAll')
const clearCompleteBtn = document.querySelector('#clearComplete')
const counter = document.querySelector('#counter')
const music = document.querySelector('.music')
const audio = new Audio('../To Do list/audio/12 The Little Sprite.mp3');

function addTask() {
  if (taskInput.value === '') {
    alert('please enter a valid task')
  } else {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    printUl.appendChild(li)
    li.addEventListener('click', () =>{li.classList.toggle('complete')
    taskTotal()}
    )
    li.classList.add('task')
  }
  taskTotal()
}

function clearAll() {
  printUl.innerText = ''
  taskTotal()
}
function clearComplete() {
  let completed = document.querySelectorAll('.complete')
  for (let i = 0; i < completed.length; i++) {
    completed[i].remove()
  }
  taskTotal()
}

function taskTotal() {
  let tasks = document.querySelectorAll('.task').length
  let completedTasks = document.querySelectorAll('.complete').length
  counter.innerHTML = tasks - completedTasks

}
function playAudio(){
  audio.volume=.04
 audio.play()
  
}


submitBtn.addEventListener('click', addTask)
clearCompleteBtn.addEventListener('click', clearComplete)
clearAllBtn.addEventListener('click', clearAll)
music.addEventListener('click', playAudio)



// had some help on the counter function from Julia and Shawn
