document.querySelector('#inputHere').addEventListener('click', addItems)
document.querySelector('#clearItem').addEventListener('click', cancelItems)
let task = document.querySelector('#taskNumber')

let list = document.querySelector('#lineThrough')


function addItems(){

    let theItems = document.querySelector('#itemAdd').value
    let newItem = document.createElement('li')
    let items = document.createTextNode(theItems)
    let list = document.querySelector('#lineThrough')
    newItem.appendChild(items)
    list.appendChild(newItem)
    newItem.addEventListener('click', lineThrough)



    let count = list.querySelectorAll('*').length
    task.innerText = 'You have ' + count + " tasks left."

}

 function cancelItems(){
    document.querySelectorAll('li').forEach(li => li.remove())


    let count = list.querySelectorAll('*').length
    task.innerText = 'You have ' + count + " tasks left."
    
 }

//  function to put a line through the items



function lineThrough(e){
    e.target.classList.toggle('strike')
    console.log(e.target)



    let strikeCount = (list.querySelectorAll('*').length) - (document.querySelectorAll('.strike').length)
    task.innerText = 'You have ' + strikeCount + " tasks left."
    
    
}

// function to clear completed task
document.querySelector('#clearComplete').addEventListener('click', clearTheTask)

function clearTheTask(){
    document.querySelectorAll('.strike').forEach(li => li.remove())
    let count = list.querySelectorAll('*').length



    task.innerText = 'You have ' + count + " tasks left."
    
}
