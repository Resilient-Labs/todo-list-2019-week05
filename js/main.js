
let addToDoButton = document.getElementById('addToDo').addEventListener('click', addToList)
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('theInput');
let clearList = document.getElementById('clearList').addEventListener('click', removeList)
let resetButton = document.getElementById('clearButton').addEventListener('click', resetList)
let increaseCount = document.getElementById('clearList')

let total = 0

function addToList(){
    let list=document.createElement('li')
    list.classList.add('list-styling');
    list.innerText = inputField.value;
    toDoContainer.appendChild(list);
    inputField.value = " ";
    
    total +=1
    document.querySelector('#countIncrease').innerText = total
    
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
        list.classList.add("line-through")
        
        total -=1
        document.querySelector('#countIncrease').innerText = total

    })



    
    
   
   
}

function removeList(){
    let change = document.querySelectorAll('.line-through')
    change.forEach(element => {
        element.classList.add('hide')
    });
    
}
 
function resetList(){
    document.querySelector('#toDoContainer').innerText = ""

    total =  0
    document.querySelector('#countIncrease').innerText = total
}





