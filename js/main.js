const input = document.querySelector('#toDoInput')
const button = document.querySelector('#submitBtn')
const ul = document.querySelector('#toDoList')

button.addEventListener('click', toDoList)
ul.addEventListener('click', crossOffItem)

// typing item into input
function toDoList(e){
    e.preventDefault()
    let text = input.value
    if(text === ''){
        return
    }
    console.log(text, 'here')
    appendLi(text)
}
//add list item from input
function appendLi(text){
    console.log(text, 'there')
    const li = document.createElement('li')
    li.innerText = text
    ul.appendChild(li)
    input.value=''
}       

//cross-out
function crossOffItem(e){
    console.log(e.target)
    e.target.classList.add('crossout')
}

//worked on this with Cat Gonclaves and Julian (House Cass)