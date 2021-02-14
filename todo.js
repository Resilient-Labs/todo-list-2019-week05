let addBar = document.querySelector('#todo')
let addBtn = document.querySelector('#addbtn')
let clearBtn = document.querySelector('#clearbtn')
let editBtn = document.querySelector('.editbtn')
let crossBtn = document.querySelector('.crossout')
let recycleBtn = document.querySelector('#clearcheckbtn')
let ul = document.querySelector('#list')
let item = document.getElementsByTagName('li')


addBtn.addEventListener('click', () => {
    let adding = addBar.value
    if(adding === "" || adding === " " || adding === "  "){
        alert('you didnt write anything')
    }else{
        let newLi = document.createElement('li')
        let newBtn = document.createElement('button')
        let newEditBtn = document.createElement('i')
        let newBtn2 = document.createElement('button')
        let newCrossBtn = document.createElement('i')
        newLi.innerHTML = `${newLi.innerHTML} <span class="newItem">${adding}</span>`
        ul.appendChild(newLi, ul.childNodes[0])
        addBar.value = ''
        newLi.insertBefore(newBtn, newLi.childNodes[1])
        newBtn.onclick = function cross() {
            newLi.classList.toggle('cross')
        }
        newBtn.setAttribute('class', "crossout" )
        newBtn.insertBefore(newCrossBtn, newBtn.childNodes[0])
        newCrossBtn.setAttribute('class', "fas fa-minus" )
        newLi.insertBefore(newBtn2, newLi.childNodes[2])
        newBtn2.onclick = function edit() {
           let p = prompt('Edit your list item')
           let entry = newBtn2.parentElement.getElementsByClassName('newItem')[0]
           entry.innerText = p
        }
        newBtn2.setAttribute('class', "editbtn" )
        newBtn2.insertBefore(newEditBtn, newBtn2.childNodes[0])
        newEditBtn.setAttribute('class', "fas fa-edit" )
    }
    crossBtn = document.getElementById('crossout')
})

// Crossout Button
document.querySelector('.crossout').addEventListener('click', cross)
function cross(){
    document.querySelector('.newItem').classList.toggle('cross')
}
// Edit Button
editBtn.addEventListener('click', () => {
    let p = prompt('Edit your list item')
    let entry = editBtn.parentElement.getElementsByClassName('newItem')[0]
    entry.innerText = p
})
// Clear All Button
clearBtn.addEventListener('click', () =>{
    while (ul.hasChildNodes()) {  
        ul.removeChild(list.firstChild);
      }
})
// Recycle Button
recycleBtn.addEventListener('click', () =>{
    let close = document.querySelectorAll(".cross")
    for(let i = 0; i < close.length; i++ ){
     close[i].style.display = "none"
    }
})
