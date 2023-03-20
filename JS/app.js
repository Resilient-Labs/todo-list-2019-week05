//got advice from Randy on how to tackle it better since my call function/addeventlistner wasn't working wasn't working with original code
//create a ToDo list where a user can add text to it and is also able to clear it as well
//create variables for all the things that the user will be interacting with
const formInput = document.querySelector('#textInput')
const placeBtn = document.querySelector('#place')
const listInput = document.querySelector('#list')
const leftToDoInput = document.querySelector('#leftToDo')
const clearLiBtn = document.querySelector('#clearLi')
const clearDoneBtn = document.querySelector('#clearDone')
const ol = document.querySelector('#list')
const leftInput = document.querySelector('#leftToDo')

//and function that takes the todo item in when the button is clicked
    //possibly on top of that when the btn is clicked it then stores that info into our ul where a li will be created
function listed(e){ // the purpose of the e is to prevent refreshing
    e.preventDefault()//randy says this stops the page from refreshing, which fixed the issue of 
    let userInput = document.querySelector('#todo').value.trim()
    if(userInput === ''){ //this takes whatever the user types in it
        return
    }
    let li = document.createElement('li') //actually creates li in the ol
    let text = document.createTextNode(userInput) 
    li.appendChild(text)
    ol.appendChild(li)
    if(userInput != ''){   //this takes the user text out and refreshes the input
        formInput.reset()
    }
    counter()
    
}
function counter(){  //talked through this with Byhanka on how to get it working
    const callLi = document.querySelectorAll('li')
    console.log('countingli')
    leftInput.innerText = callLi.length
}

//create function that will 'erase' the whole list
    //with a call back function
function eraseList(){  //button for clearing the list
    formInput.reset() //resets the form and will clear the lines
    listInput.innerText = '' //this will actually clear the list in the html
    leftInput.innerText = '' //this clears the left to do counter

    counter()
}

//when user has done/collected/finished the todo create a function where it greys and gets crossed out
//create function that will 'erase' the grey items off the list
    //possibly a call back function if the person wanted to bring it back
//Once again Byhanka walked me through this T.T and helped me to understand what was going on with how to crossout and how to clear them as well, then effectively have my JS communicate with my CSS
//this communicates with my li to see which tasks are done
function strikeThrough(event){
    const callLi = event.target //targets the event and puts it through a variable
    const issaClass = callLi.classList //makes the li elements into a class list with variable classes
    const krissKross = issaClass.toggle('strikeThrough') //creates a class to target css and cross out the list
    
    counter()
}
//this is my clear button
function clearDone(){
    let finished = listInput.querySelectorAll('.strikeThrough')
    finished.forEach(toDo => {
        listInput.removeChild(toDo)
    }
    )
    counter()
}


placeBtn.addEventListener('click', listed)
clearLiBtn.addEventListener('click', eraseList)
ol.addEventListener('click', strikeThrough)
clearDoneBtn.addEventListener('click', clearDone)

// function list(){ old code
//     let text = document.createTextNode(todoInput)
//     let newLi = document.createElement('li')
//     newLi.appendChild(text)   
//     document.querySelector('#list').appendChild(newLi)
// }   