let item;
let addItem = document.querySelector('#addItem')
let howManyLeft = document.querySelector("#howManyLeft").innerHTML = 0
let list;
let listItem;
let clearList = document.querySelector("#clear");
let clearCompleted = document.querySelector('#completed')


addItem.addEventListener('click',function(){
  //next line stores the value of the input
  item = document.querySelector('#item')
  //next line stores the unordered list
  list = document.querySelector("#list")
  //creates an li tag and stores it in variable listItem
  listItem = document.createElement("li")
  //next line appends the value of input to the list item
if(item.value===''){
  return;
}
  listItem.appendChild(document.createTextNode(item.value));
  listItem.addEventListener('click',()=>{
    event.target.classList.toggle('completed')
  })
  //next line appends the list item to the unordered list
  list.appendChild(listItem)

//next line - everytime we add something in the input, it clears out the prior value
  item.value =''
  howManyLeft++
  //next line updates how many to dos are howManyLeft
  document.querySelector('#howManyLeft').innerHTML = howManyLeft;
})







// remove all function
clearList.addEventListener('click',()=>{
 let listRemove = document.querySelectorAll("#list li");
 listRemove.forEach(el =>{
   el.parentNode.removeChild(el)
 })
 howManyLeft = 0
 document.querySelector('#howManyLeft').innerHTML= 0;
})



clearCompleted.addEventListener('click', ()=>{
  let list = document.querySelectorAll('.completed')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#howManyLeft').innerHTML = document.querySelectorAll('#list li').length
  howManyLeft=document.querySelectorAll('#list li').length
})
