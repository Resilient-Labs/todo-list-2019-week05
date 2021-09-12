
const myInput = document.querySelector('#theInput')
const toDoList = document.querySelector('#theList')
const addToList = document.querySelector('#add')
const clear = document.querySelector('#clearList')
const myForm = document.querySelector('#myForm')
let counter = 0
const message = document.querySelector('#message')

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const text = myInput.value
  const li = document.createElement('li')
  li.innerText = text
  toDoList.appendChild(li)
  counter++
  message.innerText = counter
  li.addEventListener('click', function (event) {
    const element = event.target
    element.classList.toggle('strike');
  
    if (element.classList.contains('strike')){
      counter--
      message.innerText = counter
    } else { 
      counter++
      message.innerText = counter
    }
  
  })


})

clear.addEventListener('click', function(){
  // always add a console.log to check if its working before going to the next step 
  // console.log('I press clear')
  toDoList.innerHTML = ''
  counter = 0
  message.innerText = counter
})

