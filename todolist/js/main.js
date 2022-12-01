


// create vlaue for input
//add event listener
//create li
// add input value in li
// input and value in the DOM, empty UL, append values to UL
// each todo is an LI, click LI to mark as done/not done - toggle class
// clear list - clear completed buttons
// number of todos left
//style.textDecoration = 'cross through'







document.querySelector('#addList').addEventListener('click', createItem)
document.querySelector('#endAll').addEventListener('click', clearList)
document.querySelector('#endComplete').addEventListener('click', clearComplete)

const input = document.querySelector('#task')
const ul = document.querySelector('#toDo')
const add = document.querySelector('#addList')
const amount = document.querySelector('#amount')


function createItem(e) {
    e.preventDefault()
    let enter = input.value
    if(enter === ' '){
        return
    }
    const li = document.createElement('li')
    li.className = 'notThru'
    ul.appendChild(li)
    li.innerText = enter
    input.value = ' '
    let totalLeft = ul.childNodes.length - 1
    amount.innerText = totalLeft

}

//help from lashay

function done(e){
    if(e.target.classList.contains('notThru')){
        e.target.style.textDecoration = 'line-through'
        e.target.style.color = 'grey'
        e.target.className = 'thru'
    } else if(e.target.classList.contains('thru')){
        e.target.style.textDecoration = 'none' 
        e.target.style.color = 'black'
        e.target.className = 'notThru'
    }
}

// help from lashay
function clearComplete(){
    Array.from(ul.childNodes).forEach(item => { 
        if(item.classList.contains('thru')){
            item.remove()
            let totalLeft = ul.childNodes.length - 1
            amount.innerText = totalLeft
        }
    }) 
    }   

function clearList(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
        amount.innerText = 0
    }
}





ul.addEventListener('click',done)
add.addEventListener('click',createItem)