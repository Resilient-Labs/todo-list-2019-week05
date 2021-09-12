const textInput = document.querySelector('.textInput');
const addItem = document.querySelector('.add');
const mainList = document.querySelector('.list');
const clearList = document.querySelector('.clear');
const listContainer = document.querySelector('.listContainer');

addItem.addEventListener('click', addTodo);
clearList.addEventListener('click', clear);

function addTodo(event){
    event.preventDefault();
    const listItem = document.createElement('li')
    listItem.classList.add('listItem')
    listItem.innerText = textInput.value;
    mainList.appendChild(listItem);
    textInput.value = "";

    listItem.addEventListener('click', function(){
        listItem.classList.toggle("completed")
    })

    listItem.addEventListener('dblclick', function(){
        mainList.removeChild(listItem)
    })
}

function clear(){
    listContainer.removeChild(listItem)
}
