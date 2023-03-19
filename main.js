//make your smirf
//add function to button
//take inputvalue and diplay in list in#placeToSee
document.querySelector('#clearList').addEventListener('click', clearList)
document.querySelector('#clearCompleted').addEventListener('click',clearCompleted)
document.querySelector('#compute').addEventListener('click', addToList)
const task = document.querySelector('#inputValue')
const printUl = document.querySelector('#placeToSee')
let count = document.querySelector('#count')
// let updatedCount= 0

// let count = document.querySelector('#count')
// count.innerText = parseInt(0)
    
function addToList(){
    
    if (task.value===""){
        alert('Please input valid tasks')
    }
    let li = document.createElement('li')
    li.setAttribute('class', 'liList')
    li.innerText = task.value
    printUl.appendChild(li)
    task.value=""
    
    printUl.addEventListener('click', valeryStrike)
    
    let liList = document.getElementsByClassName("liList");

    count.innerHTML = liList.length
    
}


function valeryStrike(e){
    e.target.classList.toggle('strike')
    if(valeryStrike(e)){
        let liList = document.getElementsByClassName("liList");
        count.innerHTML = liList.length
    }
    
}



function clearList(){
    document.querySelectorAll('li').forEach(li=>li.remove())
       
    let liList = document.getElementsByClassName("liList");

    count.innerHTML = liList.length
}

function clearCompleted(){
    document.querySelectorAll('.strike').forEach(li=>li.remove())
       
    let liList = document.getElementsByClassName("liList");

    count.innerHTML = liList.length
}
