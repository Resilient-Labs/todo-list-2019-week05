//variables//
const userInput = document.querySelector('#addToDo')
const toDoButton = document.querySelector('#addButton')
const toDoList = document.querySelector('#toDoList')

//click button to add task//
document.querySelector('#addButton').addEventListener('click', submitToDo)
document.querySelector('#clearAll').addEventListener('click', deleteAll)


//function below will create new list items when adding tasks//
function submitToDo(event) {
    event.preventDefault() //prevents button from acting normally and submitting data to somewhere else and works since we are working locally and not on another server. Submitting it to somewhere else makes the input basically disappear into nothingness.//
    console.log(userInput.value) //debugger which shows users todo input//
    if (userInput.value === '') {
        alert('Please enter a to do!')
    }
    else {
        console.log('User Input accepted') //debugger to show user input was submitted correctly//
        //create new li//
        let newToDoLi = document.createElement('li')
        newToDoLi.appendChild(document.createTextNode(`${userInput.value}`))

        let checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('class', 'checkBox')
        newToDoLi.appendChild(checkBox)

        // //Make lis actually populate within ul//
        toDoList.appendChild(newToDoLi)

        //create strikethrough effect when clicking checkbox//
        checkBox.addEventListener('click', clickLi)
        function clickLi() {
            if (checkBox.checked === true) {
                newToDoLi.style.textDecoration = 'line-through'
            }
            else {
                newToDoLi.style.textDecoration = 'none'
            }
        }

        //need to find a way to remove the line through so that im able to have it appear and disappear each time I click the checkbox//
        //clear inputs/page to allow for blank slate in input//
        userInput.value = ''
        //create counter for loop to count tasks??????????//
    }

}

function deleteAll() {
    let deleteAll = document.querySelectorAll('li')
    deleteAll.forEach(li => li.remove())
    deleteAll = document.querySelectorAll('li').length
}






//CODE BELOW WAS TO ADD CHECKBOXES BUT decided not to.//
// const newCheckBox = document.createElement('input')
// newCheckBox.setAttribute('type', 'checkbox')
// newCheckBox.setAttribute('id', 'newCheckBox')


// //make checkboxes populate next to lis//
// newToDoLi.appendChild(newCheckBox)
//CODE ABOVE WAS TO ADD CHECKBOXES BUT decided not to.//

//for some reason if I click lis below another li the li before it is deleted but its own checkbox is highlighted and the whole li that wasnt deleted moves up.//

