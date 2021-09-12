//-----------------leons advice:
// use Length 
// Using a form to grab a value.
// Inset value using inner text.
// Clearing of list is removing elements from dom
// Clear completed is removing certain elements from dom

// Toggling some sort of completed class
// Todo left is total minus completed

//---------------------Keitaros advice:


// create click events for the add to list button  //these lines will only run once because they are outside a function.
document.querySelector('#addToListbutton').addEventListener('click', cowabunga)
document.querySelector('#clearListButton').addEventListener('click', missleLaunch)
document.querySelector('#clearCompletedButton').addEventListener('click', highFive )

let allItems = 0  

//make it so that you can take the value of the input field
//const listItem = document.querySelector('#input').value; - needs to go in the function.

//run function that transfers the input to a list element
function cowabunga () {
    const listItem = document.querySelector('#input').value;
    let createLi = document.createElement('li');
    createLi.innerText = listItem;
    document.querySelector('#toDoList').appendChild(createLi);
    document.querySelector('#input').value = '';  //this assigns the input an empty string.

    allItems = document.querySelectorAll('li').length - document.querySelectorAll('.crossedOut').length;  //.length always returns a number
    document.querySelector('#leftToDo').innerHTML = `Task Counter: ${allItems}`

    createLi.addEventListener('click', () => {  // learn concept of nested functions
        createLi.classList.add('crossedOut')
     })
}
//queryselectorALL

//for each

//run function that clears the completed
function highFive (){
   document.querySelectorAll('.crossedOut').forEach(element => element.remove())
   
   allItems = document.querySelectorAll('li').length - document.querySelectorAll('.crossedOut').length
    document.querySelector('#leftToDo').innerHTML = `Task Counter: ${allItems}`

}

//run a function that clears the entire list items
function missleLaunch (){
    document.querySelectorAll('li').forEach(element => element.remove()) 

    allItems = document.querySelectorAll('li').length - document.querySelectorAll('.crossedOut').length
    document.querySelector('#leftToDo').innerHTML = `Task Counter: ${allItems}`

}





//function missleLaunch (){
//    document.querySelectorAll(li).remove
//}

//cross out the Li's when you click them 



//return input to nothing

// create a click event for list items

//     run function that toggles the class "completed"

//         completed means the styling will put a line through and change color

// create a counter for the "you have x todos left"
//  li.length - li(completed).length

// create a click event for the clear list
//     run function that clears all list elements

// create a click event for the clear completed
//     run function that clears all list elements with the class "completed"


