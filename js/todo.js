document.querySelector('#toDoButton').addEventListener('click', add)


function add(){
    let listValue = document.querySelector('#toDoInput').value
    let ulList = document.querySelector('#list')
    let listItem = document.createElement('li')
    listItem.setAttribute('class', 'listCheck')
    listItem.setAttribute('id', 'listCheckID')
    listItem.appendChild(document.createTextNode(listValue))
    ulList.appendChild(listItem)
    listItem.appendChild(completeButton)
    console.log('hi')

   


}
////items in list are now clickable
document.querySelector('#list').addEventListener('click', complete)
function complete(eventObject){
    ///// eventObject gives properties of the object being selected
    console.log(eventObject.target)
    //// seeing what the eventObject is targetting exactly
    // document.getElementById('listCheckID').className = 'listCheckComplete'
    console.log('hi2')
    
    eventObject.target.classList.toggle('listCheckComplete') 

}
document.querySelector('#clearComplete').addEventListener('click', clearCompleted)
function clearCompleted(){
    ///// completeAll is being defined through all items that have the class listCheckComplete
   let completeAll = document.querySelectorAll('.listCheckComplete')
   console.log(completeAll)
   //// loop that loops through all items with listCheckComplete and removes them when button is pressed
   for (let i = 0; i < completeAll.length; i++){
    ////// defining i in the loop to loop through all items in completeAll
    let ulList = document.querySelector('#list')
    ////// defining the parent UL list again, as this function doesnt know it exists and needs to be defined again
    console.log(completeAll[i])
    ulList.removeChild(completeAll[i])
   }
}
