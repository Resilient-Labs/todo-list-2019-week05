
document.querySelector('.hide').addEventListener('click', createNewItem)

function createNewItem(){
    document.querySelector('.create').classList.toggle('hidden')
}

document.querySelector('#add').addEventListener('click', addNewItem)

function addNewItem(){
    const placeListGoes = document.querySelector('ul')
    const newItem = document.querySelector('textarea').value
    let newList = document.createElement('li')
    newList.setAttribute('class', 'listItem')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('name', 'checkbox')
    newList.appendChild(checkbox)
    let container =  document.createElement('span')
    container.setAttribute('class', 'actualText')
    container.innerText = newItem
    newList.appendChild(container)
    placeListGoes.appendChild(newList)


   // document.querySelectorAll('input').forEach(box => {
        checkbox.addEventListener("click", (e) => {
            const toggleStrike = e.target.parentNode.querySelector('.actualText')
            toggleStrike.classList.toggle('strikethrough')
    
          });
   // })
}

document.querySelector('#clearCompleted').addEventListener('click', clearCompleted)
document.querySelector('#clearAll').addEventListener('click', clearAll)

function clearCompleted(e){
    console.log(e.target)
    document.querySelectorAll('li .strikethrough').forEach(task => {
        task.parentNode.remove()
    })

}

function clearAll(){
    document.querySelectorAll('li').forEach(task => {
        task.remove()
    })
}