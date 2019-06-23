const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('ul');
button.addEventListener('click', () => {
  if (input.value != '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.classList.add('deleteFromList');
    li.appendChild(document.createTextNode(input.value));
    span.appendChild(document.createTextNode('x'));
    li.appendChild(span);
    list.appendChild(li);
    input.value = '';
  }
});
list.addEventListener('click', (e) => {
  if(e.target.classList.contains('deleteFromList') === true) {
    e.target.parentElement.remove();
 }
});
