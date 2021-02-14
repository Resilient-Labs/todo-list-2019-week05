// let count = 0
let label = document.createElement("label");
let editInput = document.createElement("input");
let editButton = document.createElement("button");
let deleteButton = document.createElement("button");
let inputTask = document.querySelector('#enterTask')
let finished = document.querySelector('#completedList')
let submitTask = document.querySelector('#submit').addEventListener('click', addTasks )
let filter = document.querySelector('#filterList')
let unfinished = document.querySelector('#uncompletedList')
let clearing = document.querySelector('#clearAll').addEventListener('click', clearEverything)
let clearingComp = document.querySelector('#clearComp').addEventListener('click' , clearCompleted)

// Shawn helped me with this code

// let completedTask = document.querySelector(`#task${count}`).addEventListener('click', doneTasks )

function addTasks () {

    // count ++ 
    let newTasks = document.createElement('li')
    newTasks.addEventListener('click', clickItem =>clickItem.target.classList.add('newClass'))

    let checkbox = document.createElement('text')
    // ul.appendChild.li
    checkbox.setAttribute('type' , 'checkbox')
    let span = document.createElement('span')
    

    // checkbox.id = 'task' + count; 
    // checkbox.value = inputTask.value;
    const newContent = document.createTextNode(inputTask.value);
    // const editButton = document.createTextNode(in)
    inputTask.value = ""
  // add the text node to the newly created div
  span.appendChild(newContent);
  newTasks.appendChild(checkbox)
  newTasks.appendChild(span)
//   newTasks.appendChild(editInput);
//   newTasks.appendChild(editButton);
//   newTasks.appendChild(label);
//   newTasks.appendChild(deleteButton);
// add the newly created element and its content into the DOM
  const currentLi = document.getElementById("uncompItem");
  
//   assigning the task to come after the direct child instead of before
  const unorderedList = document.getElementById('uncompletedList')
  unorderedList.appendChild(newTasks);
  counter () 

}

function clearEverything() {
    document.querySelectorAll("li input").forEach(element => element.parentNode.remove())
    counter () 

}

function clearCompleted() {
    document.querySelectorAll(".newClass").forEach((element) => {
    //   if (element.newClass) {
        element.parentNode.remove()   
      }
        )
     counter () 

}


function counter(){
    var list = document.querySelectorAll("li").length

    // Monica helped me out with the strikethrough 
    var strikeThrough = document.querySelectorAll('.newClass').length

    document.querySelector('h3').innerText = (list - strikeThrough)


    // document.querySelectorAll("li input").forEach(element =>element.remove())
    //     if (element.newClass) {
    //         list -- }
        //   })  
    // var h2Span = document.querySelector("h2 span")
    // const updatedList = document.createTextNode(list);
    // h2Span.appendChild(updatedList)
 

}

counter () 




