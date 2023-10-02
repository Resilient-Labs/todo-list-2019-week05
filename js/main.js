//Break it down step by step

//get the input from the user, setup a smurf to listen to the click, look at drawn up template made 

//the user needs to be able to write and add a tasks within a list

//the user needs to hit a button to add

//the user then needs to cross tasks that are complete *

//the user needs to remove tasks that are no longer needed,  *
//  Maybe Make two buttons /

//the tasks need to be crossed out that are done *

//the tasks either need to be a checkbox to be checked or listed and crossed -

//the list needs to be updated once a new task has been created*

let addToDoButton = document.getElementById('addToDo');


let toDoContainer = document.getElementById('toDoContainer');


let inputField = document.getElementById('inputField');


let clearButton = document.getElementById('clear');

addToDoButton.addEventListener('click', function(){

    let paragraph = document.createElement('li')
    paragraph.innerText = inputField.value;


    //first mistake of not thinking of when making a new task to create a new element when ever the user hits the + button 


    toDoContainer.appendChild(paragraph); // Use 'paragraph' instead of 'li'
    inputField.value = ''; // Clear the input field after adding a to-do
    //creates empty

    paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
    })
    //styles the li's clicked on that are completed


    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    //removes the li's double clicked that are completed

    
   //To be added clearButton.addEventListener('click', clear) //Functionality to be added to either clear or clear all 
    
});






//New methods & functionality used/learned removeChild & appendChild

//createElement creates a new element in the use above it created a li within the container

//click event listeners have a dbclick also so its posible to have both the functionality of a single & double to do two different things 

//style.textDecoration with the listed style type Try to think of css iv'e noticed some things can be transfer'd over when thinking of how to apply certain things


//

// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click', function(){
//   
// })


// addToDoButton.addEventListener('click', function(){
//     var paragraph = document.createElement('li')
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph); // Use 'paragraph' instead of 'li'
//     inputField.value = ''; // Clear the input field after adding a to-do
// });



