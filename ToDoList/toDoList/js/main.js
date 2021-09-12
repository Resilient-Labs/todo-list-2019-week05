let newlist =document.querySelector('tasks').value
const tasks =document.querySelector('tasks').value

document.getElementById("addBtn").addEventListener('click',add);
document.getElementById("remmove").addEventListener('click',remove);
document.querySelector('#clear-complete-button').addEventListener('click', clear)


function add(){
  console.log(tasks)
}


function remove (){
  console.log(tasks)
}