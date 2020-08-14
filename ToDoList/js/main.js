/*
Collaborators: Aiperi, Vanessa Charles, Calvin Benson, Asiah Bennett,Llunga Lebreton,and Victor Tran.

An edit option is still yet to be implemented.

*/

document.querySelector('#addItems').onclick = newItem
document.querySelector('#clearAll').onclick = clearAll
const ul = document.querySelector("ul")
const clearCompleted = document.querySelector('#clearCompleted')
let taskTotal = document.querySelector("span")
 
function newItem(){
   // declared a variable ul = ul
  const item = document.querySelector("#addInput").value
  //getting the value
  console.log("this is the value of the input", item)
  let itemAdd = document.createElement("li")
  console.log("this is the innerText", itemAdd.innerText)
  itemAdd.innerText=item
  console.log("this the li", itemAdd)
  ul.appendChild(itemAdd)
  document.querySelector("#addInput").value = ""
  //mark helped with this
  whatsLeft();
}

ul.addEventListener('click', (done) => {
  done = done.target
  done.classList.toggle('crossOut')
  whatsLeft();
})

function clearAll(){
  const liArray = document.querySelectorAll('li')
  console.log("this is the liArray",liArray)
  for( let i = 0; i < liArray.length; i++){
    ul.removeChild(liArray[i])
    console.log("removed child i",i)
  }
  whatsLeft();
}

clearCompleted.addEventListener('click', () => {
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++){
    if (li[i].classList.contains('crossOut'))
  {
      ul.removeChild(li[i])
  }
  }
  whatsLeft();
})

function whatsLeft(){
  let count = 0
  const li = document.querySelectorAll('li')
  for ( let i = 0; i < li.length; i++){
    if (!(li[i].classList.contains('crossOut'))){
      count++
    }
  }
  taskTotal.innerHTML = count
}
