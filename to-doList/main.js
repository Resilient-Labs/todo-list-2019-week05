let item;
let addItem = document.querySelector('#addItem')
let howManyLeft= document.querySelector('#howManyLeft').innerHTML=0;
let list;
let listItem;
let clearList= document.querySelector("#clear");
let clearCompleted = document.querySelector('#completed')


addItem.addEventListener('click', ()=>{
  item = document.querySelector('#item')
  list = document.querySelector('#list')
  listItem = document.createElement('li')

if(item.value===''){
  return;
}
  listItem.appendChild(document.createTextNode(item.value))
  listItem.addEventListener('click',()=>{
    event.target.classList.toggle('completed')
  })
  list.appendChild(listItem)
  // the line below everytime we add something in the input
  // clear out the value prior
  item.value=''
  howManyLeft++
  document.querySelector('#howManyLeft').innerHTML = howManyLeft
})


// listItem.addEventListener('click', ()=>{
// listItem.style.textDecoration = line-through;
// })





// removeAll function
clearList.addEventListener('click',()=>{
 let listRemove = document.querySelectorAll("#list li");
 // will remove all items in li
 listRemove.forEach(el =>{
   el.parentNode.removeChild(el)
 })
 // will reset the how many left value in the html
 howManyLeft=0
 document.querySelector('#howManyLeft').innerHTML= 0;
})

// this clears the li's with the strikethrough it is
// associated with the class ".completed" that we made in our css

clearCompleted.addEventListener('click', ()=>{
  let list = document.querySelectorAll('.completed')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#howManyLeft').innerHTML=document.querySelectorAll('#list li').length

  howManyLeft=document.querySelectorAll('#list li').length

})
