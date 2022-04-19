// Assign variables for the html elements so that there's less redundant typing in the function.
//create a function
//add event object so it doesn't refresh
//stop function from running with input is empty
//get the input
//create the li
//put input in the li
//append li to the ul
//reset input field so it's empty

// Assign variables for the html elements so that there's less redundant typing in the function.
const input = document.getElementById('todoInput')
const button = document.getElementById('submitBtn')
const ul = document.getElementById('todoList')
const clearAllBtn = document.getElementById('clearBtn')
const clearCrossedBtn = document.getElementById('clearCrossed')
const listCount = document.getElementById('listCount')

//create a function
function toDoList(e){
    // add event object so it doesn't refresh
    e.preventDefault()
    
    // stop function from running with input is empty
    if(input.value === ""){
        return
    }
    
    //get the input
    let text = input.value
    
    //create the li
    const li = document.createElement('li')
  
    li.className = 'notcrossed'

    //put input in the li
    li.innerText = text
    
    //append li to the ul
    ul.appendChild(li)
    
    //reset input field so it's empty
    input.value = ""
    
    let count = document.querySelectorAll('.notcrossed').length
    listCount.innerText = count
}

function makeCrossedList(e){

    if(e.target.classList.contains('notcrossed')){
        e.target.className = 'crossed'
        e.target.style.textDecoration = 'line-through'
        e.target.style.color = 'gray'

    }else if(e.target.classList.contains('crossed')){
        e.target.className = 'notcrossed'
        e.target.style.textDecoration = 'none'
        e.target.style.color = 'black'

    }
  
    let nc = document.querySelectorAll('.notcrossed').length

    listCount.innerText = nc
}

function clearAllList(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}

function clearCrossedList(){
    Array.from(ul.childNodes).forEach( el => {
        console.log(el)
        if(el.classList.contains('crossed')){
            el.remove()
        }
    })
}




//add event listener
button.addEventListener('click', toDoList)

ul.addEventListener('click', makeCrossedList)

clearAllBtn.addEventListener('click', clearAllList)

clearCrossedBtn.addEventListener('click',clearCrossedList )























