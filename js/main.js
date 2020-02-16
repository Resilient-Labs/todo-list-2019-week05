const ul = document.querySelector("ul")
const clearCompleted = document.querySelector("#clearCompleted")
const clearAll = document.querySelector("#clearAll")
let totalTasks = document.querySelector("#totalTasks")


//add to List section
document.querySelector("#addToList").addEventListener("click", addToList => {
  event.preventDefault()
  let li = document.createElement("li") //built in element thats create element so you have a click event that creates a new li; if the input is null, you might want to add something to say a value is entered
  let listItem = document.querySelector("#listItem").value; //each of these inputs, takes the text value and puts it into the new li;check whats actually written not just the box itself

  ul.appendChild(li);// for the ul, want to append the children into the ul to make the li (this li calls upon the variable stated above)
  li.appendChild(document.createTextNode(listItem)); // now w these li, create a text node which is the list item and create that list item variable, take in each of the grocery items you are putting in

  document.querySelector("#listItem").value = "" //once you add something to the grocery list,be removed from input to add another item
  // the empty double quotes serves as a field reset, without this  value from the inital
  checkCount(); //
})
//when the button is clicked add to List the function it will grabs the list item value/text and makes a
//  a new li into the ul

ul.addEventListener('click', (e) => {//variable ul,when li are  clicked, run the function e which is an event
  e = e.target //
  e.classList.toggle('line') // looking out for the toggle, when someone clicksyou want the text decor of stikethrough to happen.
// this line attribut comes from the css class called "line"
  checkCount()
})
// button press action steps for clear All
clearAll.addEventListener('click', () => {
  const li = document.querySelectorAll('li') //declare li again --local vs gloablvariables.
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
 checkCount()
})

function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++) {
   if (!(li[i].classList.contains('line'))) {
     count++
   }
  }
  totalTasks.innerHTML = count
}
