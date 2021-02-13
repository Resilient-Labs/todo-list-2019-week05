/*
Pseudo code
1.The user will add a list item into the input so i will grab that value.
2.Once they press a button or enter the value, it will add a list item to the HTML using document.create element
3.A ul and list item will be created 
4.Will give each item a check box or cross it out once it has been completed
5.remove completed will remove any list item will the cross out or checkbox 
6.clear all button will remove all the created elements on the page
7.Add a button for the total amount of to dos on the list 
*/

document.querySelector('#addItem').addEventListener('click', enterItem)
document.querySelector('.removeAll').addEventListener('click', removeAll)
document.querySelector('.clear').addEventListener('click', erase)

let count = 0;
const lengthError = document.querySelector('.titleSection h3')
const orderedList = document.querySelector('#listItems')

// Target li from ul and toggle the line-through
orderedList.addEventListener('click', (crossOut) =>{
  if(crossOut.target.className === 'list'){
    crossOut.target.classList.toggle('crossOutItem')
   
  }
  else{
    crossOut.target.classList.toggle('crossOutItem')
  }
})

// Main function
function enterItem(){
  let item = document.querySelector('#input').value
  // item is empty string? Don't add to list
  if(item === ''){
    return item
  }
  // item length > 50? dont add to list/return error/clear input
  if(item.length >= 50){
    lengthError.style.visibility = 'visible'
    document.querySelector('#input').value = ''
    return item
  }
  //for Error to stay invisible
  else {
    lengthError.style.visibility = 'hidden'
  }
  // To create list items, create counter for list and reset
  var li = document.createElement('li')
  li.textContent = item
  li.className = "list"
  orderedList.appendChild(li)
  count++
  countList(count)
  formReset()
}

// clear list
function removeAll(){
  count = 0
  orderedList.innerHTML = ''
  countList(count)
}


// erase list item
function erase(){
  let eachListItem = orderedList.querySelectorAll('.crossOutItem')
  eachListItem.forEach(li =>{
    orderedList.removeChild(li)
    count--
    countList(count)
  })
}

// Task Remaining Counter
function countList(counter){
  if(count > 0){
    document.querySelector('.remainder').innerText = `Tasks Remaining: ${counter}`
  }
  else {
    document.querySelector('.remainder').innerText = `Tasks Remaining: 0`
  }
}

// form reset
function formReset(){
  document.querySelector('#form').reset()
}

