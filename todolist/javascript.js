document.querySelector('#addIt').addEventListener('click', addListItem)
document.querySelector('#clearAll').addEventListener('click', clearItAll)
document.querySelector('#clearSome').addEventListener('click', clearFinished)

let counter = 0

//function, when someone presses add list to item, you add li to ul
function addListItem(){
    let newItem = document.querySelector('#enterList').value
    let moreItems = document.createElement ('li')
    let keepList = document.createTextNode(newItem)
    moreItems.appendChild(keepList)
    document.querySelector('#listItem').appendChild(moreItems)
    moreItems.addEventListener('click', () => {
        moreItems.classList.toggle('strike')
        //below we are checking to see if the item has the class called strike 
        //and if it does then it subtracts 1 from the li value 
        if(moreItems.classList.contains("strike")){
            counter = counter - 1
        document.querySelector('span').innerHTML = counter
        }
        else{
        checkCount ()
        }
    })
    counter = counter + 1
    document.querySelector('span').innerHTML = counter
}

function checkCount(){
    counter = counter + 1
    document.querySelector('span').innerHTML = counter
}

function clearItAll(){
    document.querySelectorAll('li').forEach(item => {
        item.remove()
    })
}

function clearFinished(){
    document.querySelectorAll('.strike').forEach(item => {
        item.remove()
    })
}

//toggle is targetting an item with some sort of property after an event
//toggle is like flip switch for the class. the opposite of toggle is "add"