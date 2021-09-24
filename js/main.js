
 
//variables
//define input 
let lists = document.querySelector('#placeToPutTasks')

//events
//listeners for add, clear, and completed
document.querySelector('#addButton').addEventListener('click', addButton);


//magical parameter "event" that gives info about the click the user did, (event delegation), toggle adds a class
//yt vid https://www.youtube.com/watch?v=pKzf80F3O0U
lists.addEventListener('click', function(event){
   event.target.classList.toggle('strikeThrough')
   taskLeftToDo() // called this function in to subtract whatever is counted complete from what's left to do
}) 


document.querySelector('#removeCompleted').addEventListener('click', removeCompleted)
document.querySelector('#clearList').addEventListener('click', clearList)


//functions:
//add tasks to do list

function addButton(){
   let input = document.querySelector('#toDoListTasks').value
   let li = document.createElement('li')
   let p = document.createElement('p')

   p.innerText = input
   li.appendChild(p)
   lists.appendChild(li)
   //call in to start counting list items
   taskLeftToDo()
}

//a function that counts li that aren't marked 
function taskLeftToDo(){
   let count = lists.getElementsByTagName('li').length
   let completedList = lists.getElementsByClassName('strikeThrough').length
      console.log(count, completedList)
      document.querySelector('#taskLeft').innerHTML = count - completedList
   
}
//function that removes the completed tasks
function removeCompleted(){
   document.querySelectorAll('.strikeThrough').forEach(element => element.remove())
}


// clear list
function clearList(event){
   document.querySelector('ul').innerHTML ="";

   if(event){
      document.querySelector('#taskLeft').innerHTML = 0
   }
}

//cite: https://www.codegrepper.com/code-examples/javascript/clear+list+javascript