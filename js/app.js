let type;
// value means to take the value of what you input and store it
let addItem = document.querySelector("#addItem")
let result = document.querySelector("#result").innerHTML = 0
let list;
let listItem;
let clearList = document.querySelector("#clear");
let clearCompleted = document.querySelector("#completed")

addItem.addEventListener("click", function(){
  type = document.querySelector("#type")
  // next line stores the value of the input
  let list = document.querySelector("#list")
  // next line stores the unordered list
  let listItem = document.createElement("li")
  // next line creates an li tag and stores it in the variable: listItem
  if(type.value===""){
    return;
  }
  listItem.appendChild(document.createTextNode(type.value));
  // createTextNode = creating a branch for whatever is in the paranthesis
  listItem.addEventListener('click', ()=>{
    event.target.classList.toggle('completed')
  })
  // innerHTML allows you to manually input an href
  // listItem.innerHTML = item;

  // next line updates each item in the li
  list.appendChild(listItem)
  type.value=''
  result++
  // next line updates how many to dos are left
  document.querySelector("#result").innerHTML = result
})
clearList.addEventListener("click", ()=>{
  let listRemove = document.querySelectorAll("#list li")
  listRemove.forEach(el =>{
    el.parentNode.removeChild(el)
    result = 0
    document.querySelector('#result').innerHTML = 0;
  })
  // result = 0
  // document.querySelector('#result').innerHTML = 0;
})
clearCompleted.addEventListener('click', ()=>{
  let list = document.querySelectorAll('.completed')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#result').innerHTML = document.querySelectorAll('#list li').length
  result=document.querySelectorAll('#list li').length
})
