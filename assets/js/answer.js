//make smirfs
//add function to button
//display input to placetosee
document.querySelector('#add').addEventListener('click',inputList)
let count = document.querySelector('.count')

function inputList(){
    const job = document.querySelector('#list')
    const printToDoList = document.querySelector('#placeToSee')
    //caution
    if(job.value === ''){
        alert('Add to your list.')
        //create 2 variables for p and li
    } else {
        const li = document.createElement('li')
        li.setAttribute('class', 'liList')
        li.innerText = list.value
        printToDoList.appendChild(li)
        list.value= ''
        //smurf on li 
        li.addEventListener('click', crossOut)
        let liList = document.getElementsByClassName('liList')
        count.innerHTML = liList.length
    }
    //smurf for clear button
    document.querySelector('#clearList').addEventListener('click', clearAll)
    function clearAll(){
        window.location.reload()
    }
    function crossOut (e){
        e.target.classList.toggle('strike')
    }
}
document.querySelector('#clearCompletedList').addEventListener('click', clearCompletedList)
function clearCompletedList (){
    document.querySelectorAll('.strike').forEach(list =>{
        list.remove();
        let liList = document.getElementsByClassName('liList')
        count.innerHTML = liList.length
        
    })
}