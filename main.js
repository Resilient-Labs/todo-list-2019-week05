// TO DO LIST JS


// Code was formed with the help of Hassan Ng. :)

// get the input from the user clicking on the button


document.querySelector('#submit').addEventListener('click', addTheTask)


function addTheTask(){
   let userInput = document.querySelector('#task').value
   console.log(userInput)

   let todoList = document.createElement('li');
   let text = document.createTextNode(userInput);

   todoList.appendChild(text)

   let ol = document.querySelector('#taskList')

   ol.appendChild(todoList)

   todoList.addEventListener('click', lineThrough);
}


function lineThrough(e) {

   e.target.classList.toggle('strike');
}

function clearFinish() {

   document.querySelectorAll('.strike').forEach((task) => {
      task.remove();
   });
}

document.querySelector('#clearFinish').addEventListener('click', clearFinish);