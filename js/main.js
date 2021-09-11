document.getElementById('addButton').addEventListener('click', submitTask)
document.getElementById('clearButton').addEventListener('click', clearList)
document.getElementById('clearCompleted').addEventListener('click', clearCompleted)

let listCounter = 0

function submitTask(){
    
    let addLi = document.createElement('li')
    let addP = document.createElement('p')
    let addTask = document.querySelector('input').value
   
    
    if(addTask === ''){
        alert('add a task!')
    }

    else{
        listCounter++
        
        document.querySelector('ul').appendChild(addLi)

        addP.innerText = addTask
        
        addLi.appendChild(addP)
        
        document.querySelector('#span').innerText = listCounter
        
        document.querySelector('input').value = ''
        
    }
    
    addLi.onclick = function(){
        addLi.classList.toggle('zebra')
    }
  
    
}


function clearList(){
    
    let list = document.querySelector('ul')
    
    list.innerHTML = '';
    span.innerText = 0
    listCounter = 0
}


function clearCompleted(){
    let li = document.querySelectorAll('.zebra')
    let ul = document.querySelector('ul')
    
    for(let i = 0; i < li.length;i++){
        ul.removeChild(li[i])
    }

    listCounter -= li.length
    document.querySelector('#span').innerText = listCounter
}



/// input
    //add button from input value

// list of added tasks and completed tasks
    //click function to complete task

// paragraph that counts how many task are left

//clear button
    //clears the li

//clear completed
    //click function that only remove what has been//