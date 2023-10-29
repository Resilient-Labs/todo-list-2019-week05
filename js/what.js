// start by grabbing things in the DOM
const form = document.querySelector('#addToDoForm')
const userInputForToDos = document.querySelector('#toDoInputs')
const addBtn = document.querySelector('#addToDoButton')
const clearBtn = document.querySelector('#clearList')
const ul = document.querySelector('#list')
const span = document.querySelector('span')



// make a function to create lis
function createLi() {
    // create a variable called listItem and use the createElement method to create lis
    // span.innerText = userInputForToDos.value;
    // listItem.appendChild();
    // const span = document.createElement('span');
    if(userInputForToDos.value === '') {
        alert('Please enter a to do!');
    } 
    const listItem = document.createElement('li');
    listItem.innerText = userInputForToDos.value;
    list.appendChild(listItem);
    userInputForToDos.value = ''
    // return listItem

}



addBtn.addEventListener('click', createLi)


// event bubbling - add to anki

// when you try to add a to do, the page automatically refreshes and doesn't save the text that was input -- add an event listener to prevent the page from auto clearing
// create a condtion that alerts the user that they should enter a todo if they try to submit nothing
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // const li = createLi();

    
//     } else {
//         ul.appendChild(li);
//     }
//     // userInputForToDos
// })


// userInputForToDos.reset()

// create a function that resets the page back to empty once the start over button is clicked



// function submitForm() {
//     let frm = document.getElementsByName('form')[0];
//     frm.createLi(); // Submit the form
//     frm.reset();  // Reset all form data
// }

// submitForm()
// function clearPage() {
//     let input = document.querySelectorAll('input');
//     input.forEach((input) => (input.value =""))
    
// }

// clearBtn.addEventListener('click', clearPage)
