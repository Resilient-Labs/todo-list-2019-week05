
let total=0
document.querySelector('#taskButton').addEventListener('click',add)
function done(e){
  console.log(e.target)
  e.target.classList.toggle('completed')

}

function add(){
  let input=document.querySelector('#inputTask').value
  // inputted value
  let ul = document.getElementById("actualList");
  // variable for the ul
  let li = document.createElement("li");
  // variable for new li (create element)
  li.appendChild(document.createTextNode(input));
  // inside the li were adding a child ( create text node) and putting the input from the user
  ul.appendChild(li)
  // now that li has a child of the users input we want to add it to the var ul which is our original list
  document.getElementById('inputTask').value='';
  li.addEventListener('click',done)
  total=total+1
  document.querySelector('#listLeft').innerHTML= 'you have '+total+ ' tasks left'

}
// mark helped me target e
document.querySelector('#clearCompleted').addEventListener('click',clearCompleted)
function clearCompleted(){
  let comp = document.querySelectorAll('.completed')
  for (let i=0;i< comp.length;i++  ){
    // console.log(comp[i])
    // by doing this it will remove each individual one as it increases or decreases
    comp[i].remove()
    total=total - 1
    document.querySelector('#listLeft').innerHTML= 'you have '+total+ ' tasks left'
  }
  // mark helped me under stand why i need a loop
}
document.querySelector('#clearList').addEventListener('click',clear)
function clear(){
  let ul = document.getElementById("actualList");
  ul.innerHTML=''
  total=0
  document.querySelector('#listLeft').innerHTML= 'you have '+total+ ' tasks left'
}
let all = document.querySelectorAll('li')
