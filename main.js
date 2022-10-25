// To do list .... To do list//
// record user text input//
// display user input onto page when user pressess the button//
// when user clicks the output have the text cross its self off//

let userInputText = document.getElementById ('userInput');
let addButton = document.getElementById ('button');
let list = document.getElementById('toDoList');
let listItem = document.getElementById('listItem')
let clearButton = document.getElementById('clear')
let checkbox = document.createElement('input')
checkbox.type = 'checkbox'


addButton.addEventListener('click',addToList)

//When the user pressess the add button I want the innerText of the of the User Input to show up on as the list item.
function addToList(){
    let userInputText = document.getElementById ('userInput').value 
    let listItem = document.getElementById('listItem')
    let li = document.createElement('li')
    li.appendChild(checkbox)
    li.innerHTML += userInputText
    listItem.appendChild(li)    
}






clearButton.addEventListener('click',clearItem)


function clearItem(){
    let checkBoxes= document.querySelectorAll("input[type=checkbox]");
   
    checkBoxes.forEach(checkBox=> {
        if(checkBox.checked){
            checkBox.parentElement.remove();
        }
    })
    
    console.log('hello')
    
    
}











