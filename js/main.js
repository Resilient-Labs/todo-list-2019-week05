//THIS SECTION is to add user inputs to list and display tasks

// create variables for elements needed from html
let items = document.querySelector('#inputItems')
let addButton = document.querySelector('#addButton')

// go into document and on click of button, run function that adds users input into ordered list
document.querySelector('button').addEventListener('click', addToList)

// create function which takes the users input text and displays it in the ul
// grab input = items, create li const and display innertext the input items = item.value(function addToList runs after pressing line 6)
function addToList() {
    const li = document.createElement('li') // li is created
    li.innerText = items.value //taking the input items (where user wrote tasks) and displaying it in the li inner text
    ul.appendChild(li) //appendchild adds new child(li) into element we're targeting, the ul
}
// ------------------------------------------------
//THIS SECTION is to strike through tasks the user has completed by clicking on them

// create ul variable
const ul = document.querySelector('#ul')

// create an event listener so when you click on the li it will be strike through, the function 'completed' will run 
ul.addEventListener('click', completed)

//function to add strike through style
function completed(done) {
    //checking to see if the clicked element is in li
    if (done.target.tagName === 'LI'){
        //toggle CSS class to apply/remove strike through style
        done.target.classList.toggle('strikethrough')
    }
}
// -------------------------------------------------
//THIS SECTION is to clear all tasks on list or clear completed tasks from the to do list

//create 'clear completed' and 'clear all' variables needed from html
const clearCompletedButton = document.getElementById('clearCompleted')
const clearAllButton = document.getElementById('clearAll')

//add event listener for clear completed
clearCompletedButton.addEventListener('click', clearcompletedfunc)

function clearcompletedfunc() {
    //create a variable that grabs the li's that have been striked
    let completedTasks = document.querySelectorAll('li.strikethrough')
    //forEach goes through each item in a list and does something with each item
    //function
    completedTasks.forEach(function(task) {
        ul.removeChild(task);
    });
}

//add event listener for clear all
clearAllButton.addEventListener('click', clearallfunc)

function clearallfunc() {
    ul.innerHTML = ''; // removes all lis by making innerHTML an empty string
};



//function where you can toggle a strike through on the list items - code taken from stack overflow https://stackoverflow.com/questions/44516905/strike-through-on-click 
// $(document).ready(
//     function(){
//         $('#button').click(
//             function(){
//                 var toAdd = $('input[name=ListItem]').val();
//                  $('ol').append('<li>' + toAdd + '</li>');
//             });
       
//        $("input[name=ListItem]").keyup(function(event){
//           if(event.keyCode == 13){
//             $("#button").click();
//           }         
//       });
      
//       $(document).on('dblclick','li', function(){
//         $(this).toggleClass('strike').fadeOut('slow');    
//       });
      
//       $('input').focus(function() {
//         $(this).val('');
//       });
      
//       $('ol').sortable();  
      
//     }
// );