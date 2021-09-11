//psuedo code
//What does the user see?
//form w/ add button
/* clear list button and clear completed button
remaining to do's left 
list of users added items. If removed then seen with underline 
 What do I need to do?
 When consumer inserts a item to add to list and clicks add to list button it adds.
 Number of To dos shows up.
 if clicks clear list button it clears off every item on the list
 if clicked clear completed it delete only the item crossed off*/
 let count = 0
 

 document.getElementById('add').addEventListener('click',addToList)
 document.getElementById('clearList').addEventListener('click',clearEntireList)
 document.getElementById('clearCompleted').addEventListener('click',clearOnlyCompleted)
 function done(e){
    console.log(e.target)
    e.target.classList.toggle('completed')
  
  }





// function completed(){
// }

 function addToList(e){
     e.preventDefault()
     let list = document.querySelector('.list')
     let input = document.querySelector('#input').value
     let li = document.createElement('li')
     li.classList.add('toDoItems')
     let textNode = document.createTextNode(input)
     li.append(textNode)
     list.appendChild(li)
     li.addEventListener('click', completed)
     
     upDate() 
     let task = task + list
     document.getElementsByClassName('toDo')

    


 }
 function upDate() {
     let taskList = document.getElementsByClassName('toDoItems')
     console.log(taskList)
     console.log(taskList.length)
     document.querySelector('.toDo').innerText= taskList.length
     


    
 }

 function clearEntireList(){
     let list = document.querySelector('.list')
     list.innerHTML=''



        
 }


 function completed(e){
     let target= e.target//<li class = 'toDoItems'>
     let closestLi = target.closest('.toDoItems')
     console.log(target)
     console.log(closestLi)
     closestLi.classList.add('strike')
     closestLi.classList.remove('toDoItems')
     upDate()
     console.log('hello')



 }

 function clearOnlyCompleted(e){
   let completedTask = document.querySelectorAll('.strike')
     console.log(completedTask)
     completedTask.forEach((node) => {node.remove()})
 }
