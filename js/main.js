document.getElementById('addToList').addEventListener('click', addToList)
document.getElementById('reset').addEventListener('click',reset)
document.getElementById('clearFinish').addEventListener('click',clearFinish)
let list = document.querySelector('ul')
function addToList(){
    let inputPlace = document.getElementById('inputPlace').value;
const newTask = document.createElement('li');
newTask.appendChild(document.createTextNode(inputPlace));
list.appendChild(newTask);
console.log('newTask',newTask)
newTask.addEventListener('click',striked)
}
function striked(e){ 
    console.log('e.target',e.target)
e.target.classList.toggle('strikeThrough');
}

function reset(){
    window.location.reload()
}

function clearFinish(){
    document.querySelectorAll('.strikeThrough').forEach(taskFinish => {
        taskFinish.remove()
    })

}