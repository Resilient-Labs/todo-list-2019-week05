const input = document.querySelector('input')
let addBtn = document.querySelector('.btn')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')
const exec = document.querySelector('#borra')
let count = document.querySelector('#count')
// document.querySelector(".exec").addEventListener('click', deleteBtn)

// btn.addEventListener('click', e => {
//   e.preventDefault()
addBtn.addEventListener('click', creaLista)
// add e inside the parameter 
function creaLista(e) {
  e.preventDefault()

  let text = input.value
  if (text !== '') {
    let li = document.createElement('li')
    li.setAttribute('class', 'list')
    let span = document.createElement('span')
    li.innerText = text
    span.innerText= 'x'
    span.className = 'remove'
    li.appendChild(span)
    ul.appendChild(li)
    input.value = ''
    empty.classList.add('hidden')

    // event listener that strikes
  li.addEventListener('click', borraLista)
    function borraLista(e){
  // li.className= 'listaLista'
       e.target.classList.toggle('listaLista')   
}
let list = document.getElementsByClassName('list')
       count.innerText= list.length
}

document.querySelector('ul').addEventListener('click', byeBye)
let items = document.querySelectorAll('li')
function byeBye(e){
  if(e.target.classList.contains('remove')){
    e.target.parentElement.remove()
  }
  let list = document.getElementsByClassName('list')
  count.innerText= list.length
}
exec.addEventListener('click', clearEverything)
  function clearEverything (){
    while(ul.firstChild){
      ul.removeChild(ul.lastChild)
    }
    empty.classList.remove('hidden')
    let list = document.getElementsByClassName('list')
       count.innerText= list.length
  }
removeDone.addEventListener('click', removeWhatsDone)
function removeWhatsDone() {
  document.querySelectorAll('.listaLista').forEach(li => li.remove())
  let list = document.getElementsByClassName('list')
  count.innerText= list.length
}
}

  // add a count everthing left to do that updates, the clear the complete ones and unmarked the ones done .
  
// document.querySelector('span').addEventListener('click', byeBye)
// let items = document.querySelectorAll('span')
// let azul= document.querySelectorAll('ul')
// function byeBye(e){
//   for(let i=azul[1]; i <= items.length; i++){
//   console.log(e.target.remove())
//   }
// ul.addEventListener('dblclick', eliminalo)
//    function eliminalo(e){
//     const equis= e.target.parentElement
//     ul.removeChild(equis)
//     let items= document.querySelectorAll('listaLista')
//     if (items.length===0){
//       empty.style.display='block'
//     }
//    }
  //  function deleteBtn(){
  //   let items = document.querySelectorAll('li')
  //   items.forEach(li => li.remove())
  //  }
  

    // create a className 
   // can you giveme all the li's with this class

// deleteBtn.addEventListener('click', (e)=>{
  // //     let equis = e.target.parentElement 
  // //     ul.removeChild(equis)
  //   })
  // return deleteBtn
// remove from list
// let pa = document.querySelector('#strike')
//   pa.addEventListener('click', strike)
//   function strike(){
// li.style.textDecoration= 'line-through'
// console.log(strike)

// }

// function strike() {
//   let deleteBtn = document.createElement('button')
//   deleteBtn.textContent = "x"
//   deleteBtn.className = "btnDelete"
  
//   deleteBtn.addEventListener('click', (e)=>{
// //     let equis = e.target.parentElement 
// //     ul.removeChild(equis)
//   })
// return deleteBtn
// }

