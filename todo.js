//User should be able to add items to the list
//User should be able to track the number of things they have left to do
//User should be able to remove all completed items from the List and delete entire lists
//User should be able to check of each item completed on the list
//User should be able to remove indivual items on a list
//User should be able to create new lists and switch between different lists



const addTask = document.querySelector('#addTask')
const item = document.querySelector('#item')
const list = document.querySelector('#list')
const clearCompleted = document.querySelector('#clearCompleted')
const clearList = document.querySelector('#clearList')

addTask.addEventListener('click',()=>{

// item=document.querySelector('#item').value;
  const newListItem = document.createElement('li')
  const textNode = document.createTextNode(item.value)
  newListItem.appendChild(textNode)
  console.log(item);
  console.log(list);
  console.log(newListItem);

  list.appendChild(newListItem)

  updateItemsLeftToDo()

  newListItem.addEventListener('click', crossOffItem)
})

function updateItemsLeftToDo (){
  let itemCount = document.querySelector('#itemCount')
  // let totalItems = list.querySelectorAll('li').length
  // itemCount.innerHTML = totalItems
  // https://stackoverflow.com/questions/21975881/how-to-select-element-that-does-not-have-specific-class
  let activeItems = document.querySelectorAll("li:not(.crossed)")

  if (activeItems == null){
    itemCount.innerHTML = 0
  }else {
    itemCount.innerHTML = activeItems.length
    console.log(activeItems);
  }

}

function crossOffItem (event){
  console.log(event)
  event.srcElement.classList.toggle('crossed')
  updateItemsLeftToDo()
}

function clearItemsCrossedOff (event){
  let notActiveItems = document.querySelectorAll('.crossed')
  notActiveItems.forEach(li => li.parentNode.removeChild(li));
  console.log(event)
}

clearCompleted.addEventListener('click', clearItemsCrossedOff)

function clearAllItems (){
  let listItems = list.querySelectorAll('li')
  if (listItems.length >0 && confirm('Are you sure?')){
    listItems.forEach(li => li.parentNode.removeChild(li));
    console.log(event)
    updateItemsLeftToDo()
  }
}

clearList.addEventListener('click', clearAllItems)
