let pressToAddButton = document.getElementById('pressToAdd');
let toDoCloud = document.getElementById('toDoField');
let inputField = document.getElementById('inputField');

pressToAddButton.addEventListener('click', function(){
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
paragraph.innerText = inputField.value;
toDoCloud.appendChild(paragraph);
inputField.value = "";
paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
}
)
paragraph.addEventListener('dblclick', function(){
    toDoCloud.removeChild(paragraph);
}
)
}
)
