
//input
const taskInput = document.querySelector('#task')

//buttons
const addBtn = document.querySelector('#addToList')
const clearBtn = document.querySelector('#clearList')
const completeBtn = document.querySelector('#completeList')

//list items
const ul = document.querySelector('#users')
const li = document.querySelectorAll('li')

//message boxes
const emptyMessage = document.querySelector("#emptyMsg")
const placeForCounter = document.querySelector("#message")


addBtn.addEventListener('click', taskMaster)
clearBtn.addEventListener('click', allClear)
completeBtn.addEventListener('click',iDidIt)


function taskMaster() {
    if (taskInput.value.length == 0){
        emptyMessage.innerText = "Please Enter A Task Below"
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value));
        users.appendChild(li);
        taskInput.value = '';
        emptyMessage.innerText = ""
        iDidIt()
        
        
            li.addEventListener('click', function(){
                li.classList.toggle('completed')
                iDidIt()
         })
            completeBtn.addEventListener('click', function(){
                let allCompletedTasks = document.querySelectorAll('.completed')
                for(let i = 0; i < allCompletedTasks.length; i++){
                    allCompletedTasks[i].remove()
                }
                
            })
    }
}

function allClear(){
        ul.innerHTML = ""
        placeForCounter.innerText = ""
    }

function iDidIt (){
    let allTask = document.querySelectorAll('li').length
    let allCompletedTasks = document.querySelectorAll('.completed').length
    if(allTask === 1 || allCompletedTasks === 1){
        placeForCounter.innerText = "I have " + (allTask - allCompletedTasks) + " thing left to do"
    }else if(allTask === 0 && allCompletedTasks === 0){
        placeForCounter.innerText = "I have " + (allTask - allCompletedTasks) + " nothing left to do"
        placeForCounter.innerText = ""
    }else{
        placeForCounter.innerText = "I have " + (allTask - allCompletedTasks) + " things left to do"
    }
}




