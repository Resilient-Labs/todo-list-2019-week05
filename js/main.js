// collaborated with sam, aiperi, divia, abbey, stacey, orson
const ul = document.querySelector("ul")
const clearCompleted = document.querySelector("#clearCompleted")
const clearAll = document.querySelector("#clearAll")
let totalTasks = document.querySelector("#totalTasks")


//add to List section
document.querySelector("#addToList").addEventListener("click", addToList => {
  event.preventDefault()
  let li = document.createElement("li")
  let listItem = document.querySelector("#listItem").value;
  ul.appendChild(li);
  li.appendChild(document.createTextNode(listItem));

  document.querySelector("#listItem").value = ""

  checkCount(); //
})


ul.addEventListener('click', (e) => {
  e = e.target //
  e.classList.toggle('line')
  checkCount()
})
clearAll.addEventListener('click', () => {
  const li = document.querySelectorAll('li')
  for (let i = 0; i < li.length; i++) {
   ul.removeChild(li[i])
  }
  checkCount()
})

clearCompleted.addEventListener('click', () => {
 const li = document.querySelectorAll('li')
 for( let i = 0; i < li.length; i++){
   if (li[i].classList.contains('line')) 
 {
  ul.removeChild(li[i])
 }
 }
 checkCount() // declare a variable that hold the count itself,changing thee if statement; li doesnt have the line through, then count that.
})

function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++) {
   if (!(li[i].classList.contains('line'))) { //! is if it falsee, if it doesnt have the line attribute then count; if this () is true then run it, but bang symbol says if it does not contain a line then count it
     count++
   }
  }
  totalTasks.innerHTML = count
}
// function empty(){
//   let x = document.getElementbyId("addToList").value
//   if(x == ""){
//     alert("Enter List Item")
//     return false
//   }else{
//     checkCount();
//   }
