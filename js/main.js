// By Nicole B. Worked on with Mike P. & Farrah

let button = document.querySelector('button');
button.addEventListener('click',addItem);

function addItem() {
  document.querySelector('input').value;
  let li = document.createElement('li');
  let addLi =
  document.createTextNode(document.querySelector('input').value);
  li.appendChild(addLi);
  document.querySelector('ul').appendChild(li);
  document.getElementById('toDo').innerText = document.querySelector('ul').getElementsByTagName("li").length;
}
