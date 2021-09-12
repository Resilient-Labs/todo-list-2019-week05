// add input item to ul on click//
//when you click on li toggle cross out to show item as completed.
//create a counter that adds when items are on the list. ex. use length so documnet.querySelector(li).length
//on click clear whole list
// on click clear just completed//

let listCounter = 0
let form = document.querySelector('input')

document.querySelector('#addItemButton').addEventListener('click', submitAddToList)
document.querySelector('#clearAllButton').addEventListener('click', clearAll)
document.querySelector('#clearCompletedButton').addEventListener('click', clearCompleted)
document.querySelector('ul').addEventListener('click',completedItem)


function submitAddToList(){
    listCounter++

    let newItem = document.querySelector('input')
    let addList = document.createElement('li')

    addList.innerText = newItem.value
    document.querySelector('input').value=''

    document.querySelector('ul').appendChild(addList)
    document.querySelector('span').innerText = listCounter
    console.log(listCounter)
} 

function completedItem(event){
    let clicked = event.target //element I clicked on - be assigned to this varible
    clicked.classList.toggle('completed')

    if(clicked.classList.contains('completed')){
        listCounter-- 
        document.querySelector('span').innerText = listCounter
    } else{
        listCounter++
        document.querySelector('span').innerText = listCounter
    }
}

function clearAll(){
    document.querySelectorAll('li').forEach(
       function(i){
       i.remove()
   })
   listCounter =0 
   document.querySelector('span').innerText = listCounter
}

function clearCompleted(){
   listCounter = document.querySelectorAll('li').length

   let cleared = document.querySelectorAll('.completed')
   cleared.forEach(function(i){
       i.remove()
       listCounter--
   })
   document.querySelector('span').innerText = listCounter
}