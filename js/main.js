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
  if(listItem.length == 0){
    return; //don't add empty list items
  }
  let edit = document.createElement("button");
  li.appendChild(edit);
  edit.appendChild(document.createTextNode("Edit"));
  edit.classList.add("editButton");
  let remove = document.createElement("button");
  li.appendChild(remove);
  remove.appendChild(document.createTextNode("remove"));
  remove.addEventListener("click", (e)=>{
    ul.removeChild(li)
  })
  let label = document.createElement("span");
  li.appendChild(label);
  // label.classList.add("line")

  ul.appendChild(li);
  const textNode = document.createTextNode(listItem)
  label.appendChild(textNode);
  edit.addEventListener("click", (e)=>{
    let newEdit = prompt("change your list item", listItem)
    textNode.nodeValue= newEdit;
    // console.log(newEdit);
    // console.log("edit was clicked", edit, e)
  })
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
 const span = document.querySelectorAll('li > span')
 for( let i = 0; i < span.length; i++){
   if (span[i].classList.contains('line'))
 {
  ul.removeChild(span[i].parentNode)
 }
 }
 checkCount() // declare a variable that hold the count itself,changing thee if statement; li doesnt have the line through, then count that.
})

function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li > span')
  console.log(li.length);
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
