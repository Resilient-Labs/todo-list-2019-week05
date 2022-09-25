document.querySelector('#addBtn').addEventListener('click', addItems)


function addItems () {
    let items = document.querySelector ('#items').value
    // this variable I created items is equal to the text inside the input
    let toDoList = document.querySelector('#itemsToDo')
    // this variable I created toDoList is grabbing the ol which is signaled by the id 'itemsToDo'  
    let li = document.createElement('li')
    // I created an 'li' element here in main.js and named the variable li
    let checkbox = document.createElement('input')
    // I created an 'input' element here in main.js and named the variable checkbox
    checkbox.type = 'checkbox'
    // I changed my input type to checkbox 
    li.appendChild(checkbox)
    // I put the checkbox inside the li elements that I created earlier 
    li.innerHTML += items
    // We put the items inside the li BUT not displayed until line 19. += allows you to append more items 
    toDoList.appendChild(li)
    // We displayed the li items into the ol this updated the ol to have the li items which can now be displayed


li.addEventListener('click', ()=> {
        
    let completedItems = document.querySelector('#completedItems')
    // this variable I created completedItems is grabbing the ol which is signaled by the id 'completedItems'  
    completedItems.appendChild(li)
    // I put the li inside the ol elements 
    li.removeEventListener('click', ()=>{})
    li.childNodes[0].disabled = true
    // using childNodes, we selected the first item inside the li (checkbox) and disabled it. so it cant be checked. 
    } ,{once:true} ) 
    // this makes it so that the eventListener on the li can be clicked only one time.
} 








