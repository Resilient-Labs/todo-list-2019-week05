
let add=document.querySelector('#Add');
let input;
let parentList= document.querySelector('#list')
let clearCompleted= document.querySelector('#clearCompleted');
let list=document.querySelector('#list')

// empty array so can store my stuff
let itemList=[]
let howManyLeft=document.querySelector('#howManyLeft').innerHTML=0
let clearAll=document.querySelector('#clearAll')

add.addEventListener('click',()=>{
  // store the value of user input
 input=document.querySelector('#input');
 list = document.querySelector('#list')
// stores the new created li tags
let listItem= document.createElement('li')
if(input.value===''){
  return;
}
// next line appends the new input into a list
itemList.push(input.value);
listItem.appendChild(document.createTextNode(input.value))
listItem.addEventListener('click',()=>{
  event.target.classList.toggle('completed')
})
list.appendChild(listItem)
input.value=''/* this when the eventlistner is clicked the items in the input will be cleared*/
// listItem.innerHTML=input;
howManyLeft++
document.querySelector('#howManyLeft').innerHTML=howManyLeft

})
// clear all function

clearAll.addEventListener('click',()=>{
  let list=document.querySelectorAll('#list li')
  list.forEach(el =>{
    el.parentNode.removeChild(el)

  })
  howManyLeft=0
  document.querySelector('#howManyLeft').innerHTML=0;
})

// clears things with the .completed class strikethrough
clearCompleted.addEventListener('click', ()=>{
  let list=document.querySelectorAll('.completed')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#howManyLeft').innerHTML=document.querySelectorAll('#list li').length
  howManyLeft=document.querySelectorAll('#list li').length
})
