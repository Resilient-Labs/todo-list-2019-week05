 // build a todo list with an 'addbutton' 'deleteallbutton' 'clearcompletedbutton' and and input area
 //when user types an item in the input area and clicks add, the item should appear in the 'li' area
 //when user clicks on one of the 'li' items it should strike through to mark as completedItems
 //then when use clicks 'trashcan' all completed items should delete
 // and if use clicks reset button then all items true or false should delete aka reset

 //mentor mark helped me with "items left to Complete"



 document.querySelector('.fas.fa-plus-circle').addEventListener('click', addItem)
 document.querySelector('#trash').addEventListener('click', deleteCompItems)
 document.querySelector('.fas.fa-redo').addEventListener('click', reset)
 const leftElement = document.getElementById('leftToComplete')


 function addItem() {
   let liItem = document.createElement('li')
   let input = document.querySelector('#toDo').value
   let text = document.createTextNode(input)
   liItem.appendChild(text)
   liItem.addEventListener('click', markCompleted)
   document.querySelector("#list").appendChild(liItem);
   document.getElementById("toDo").value = "";

   let left = leftElement.innerText
   left = parseInt(left) + 1
   leftElement.innerText = left
   console.log(left);
 }

 function reset() {
   document.querySelector("#list").innerHTML = "";
 }

 function markCompleted(click) {
   click.currentTarget.classList.toggle('done')
 }

 function deleteCompItems() {
   const complete = document.querySelectorAll('.done')
   console.log(complete, 'completed items');
   for (let i = 0; i < complete.length; i++) {
     console.log(i, complete[i]);
     complete[i].remove()
   }
   let left = leftElement.innerText
   left = parseInt(left) - complete.length
   leftElement.innerText = left
 }
