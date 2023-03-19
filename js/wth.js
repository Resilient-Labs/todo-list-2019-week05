const input = document.querySelector('input')
let addBtn = document.querySelector('.btn')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')
let li=

// event listeners
addBtn.addEventListener('click', creaLista)
li.addEventListener('click', borraLista)
// ul.addEventListener('dblclick', eliminalo)
// span.addEventListener('click', removeIt)

// add e inside the parameter 
// function to make a list
function creaLista(e) {
  e.preventDefault()
  let text = input.value
  if (text !== '') {
    let li = document.createElement('li')
    // let p = document.createElement('p')
    let span = document.createElement('span')
    span.innerText= 'x'
    li.innerText= text
    // li.appendChild(p)
    li.appendChild(span)
    ul.appendChild(li)
    input.value = ''
    empty.style.display = 'none'
  }
}
    // event listener that strikes through when clicked   
    function borraLista(e){
      e.classList.toggle('listaLista')
 }

  //  function eliminalo(e){
  //   const equis= e.target.parentElement
  //   ul.removeChild(equis)
  //   let items= document.querySelectorAll('listaLista')
  //   if (items.length===0){
  //     empty.style.display='block'
  //   }
  //  }
   
  //    let deleteBtn = document.createElement('button')
  // deleteBtn.textContent = "x"
  // deleteBtn.className = "btnDelete"
  
  
// clear all the ones done
// clear all of them regardless of being done
// calc for things that have been done
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