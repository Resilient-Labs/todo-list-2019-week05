writeNumberOfToDos()

// enter key listener
document.querySelector("#things-to-do").addEventListener(`keydown`, function(keypress) {
  //   when the key is pressed
  if (keypress.key === 'Enter') {
    //   get the value of the input
    inputValue = document.querySelector("#things-to-do").value
    document.querySelector("#things-to-do").value = "";

    // put the inputvalue into the HTML!
    document.querySelector("#todo-list-items").innerHTML +=
    `<li onclick="struck(this)">
      <span class="to-do-item">
        ${inputValue}
        <i class="fas fa-times-circle delete hide" onclick="deleteItem(this)"></i>
      </span>
    </li>`
    writeNumberOfToDos()
  }
})

// strikethrough list function
function struck(ele) {
  if (ele.classList != "complete") {
    ele.classList = "complete"
  } else {
    ele.classList = ""
  }
  writeNumberOfToDos()
}


function writeNumberOfToDos() {
  // identify the length of the list array of things to do
  // identify where it will be written in html
  numberOfTodos = document.querySelectorAll('li').length
  numberOfStrucks = document.querySelectorAll('.complete').length
  totalNumber = numberOfTodos - numberOfStrucks
  document.querySelector(".number-of-things-to-do").innerHTML = totalNumber
}

// delete button click listener
//   when the button is clicked
function deleteItem(ele) {
  ele.closest('li').remove()
  writeNumberOfToDos()
}


// delete all button click listener
//   when the button is clicked
document.querySelector('#clear-all').addEventListener('click', clearList)

function clearList() {
  document.querySelector('#todo-list-items').innerHTML = ""
  writeNumberOfToDos()
}

// clear completed click listener
//   when the button is clicked
document.querySelector('#clear-completed').addEventListener('click', clearCompleted)

function clearCompleted() {
  // grab the completed items
  document.querySelectorAll('.complete').forEach((completedItem) => {
    // and delete them
    completedItem.remove()
  })

  writeNumberOfToDos()
}
