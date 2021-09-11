document.querySelector('#add').addEventListener('click',addToList)
document.querySelector('#clear').addEventListener('click',clearList)
document.querySelector('#clearComplete').addEventListener('click',clearComplete)

let allItems = 0

function addToList(){
    let item = document.querySelector('#inputValue').value
    let node = document.createElement('li')
    node.innerText = item
    document.querySelector("#list").appendChild(node); 
    document.querySelector('#inputValue').value = ' ' 

    allItems = document.querySelectorAll('li').length - document.querySelectorAll('.lineThrough').length
    document.querySelector('#toDoCount').innerHTML = allItems

    node.addEventListener('click',() => {
        node.classList.add('lineThrough')

        allItems = document.querySelectorAll('li').length - document.querySelectorAll('.lineThrough').length
        document.querySelector('#toDoCount').innerHTML = allItems
    }  )
}
function clearList(){
   document.querySelectorAll('li').forEach(allLi => allLi.remove())

   allItems = document.querySelectorAll('li').length - document.querySelectorAll('.lineThrough').length
    document.querySelector('#toDoCount').innerHTML = allItems

}
function clearComplete(){
    document.querySelectorAll('.lineThrough').forEach(liComplete => liComplete.remove())

    allItems = document.querySelectorAll('li').length - document.querySelectorAll('.lineThrough').length
    document.querySelector('#toDoCount').innerHTML = allItems

}

