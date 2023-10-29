//TO DO LIST


//target buttons in dom and addevent listeners
document.querySelector('.add').addEventListener('click', listedItems)
document.querySelector('#list').addEventListener('click', cancel)


//create a function that creates a listed item in the dom
function listedItems() {
    //console log the value 
    //declare the value of the input
    let textBoxText = document.querySelector('#input').value 
    //console.log(textBoxText)
    //let ulElement = document.querySelector('#list')
    //newListItem does not exist in the dom yet
    let newListItem = document.createElement('li')
    newListItem.style.color = "#bc3908"
    let text = document.createTextNode(textBoxText)
    newListItem.appendChild(text)
    let ul = document.querySelector('#list')
    ul.appendChild(newListItem)
    //ulElement.appendChild(newListItem)
    //removeChild(document.createTextNode(textBoxText))
    //newListItem.addEventListener('click', cancel)
}


//create a function that toggles a line through completed item
function cancel(click) {
    /*document.getElementById('#list').toggleAttribute('#list')
    list.appendChild(list.childn)*/
    click.target.classList.toggle('soulBreaker')
}


// element.style.color = 'red'


//clear button