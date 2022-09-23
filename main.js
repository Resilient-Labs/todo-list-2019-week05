//target the buttons
document.querySelector('#add').addEventListener('click', addTask)
document.querySelector('#list').addEventListener('click', toggleLine)
//'in this {document} {Select} ('{this element}')'

//create a function that adds a listed item in the dom

function addTask() {
    //console log the value input'd
    let input = document.querySelector('#input').value
    console.log(input)
    //create li
    let li = document.createElement('li')
    //this creates a text node that goes into the li
    let text = document.createTextNode(input)
    //add text into li using appenchild from the input 
    //appenchild: this takes the input that is in the createTextNode inside this li that was previously empty
    li.appendChild(text)
    //this takes the li and attaches it to the ul
    let ul = document.querySelector('#list')
    ul.appendChild(li)
}
//create a function that clear all listed items in the dom

function toggleLine(click) {
    click.target.classList.toggle('linethrough')
}
//make it so the task has a line through it



// 