let input = document.getElementById('input');

function countLi(){
	let len = document.getElementById('list').getElementsByTagName('li');
  let lilength = len.length
  document.getElementById('leftToDo').innerHTML = (`you have ${lilength} tasks`);
}

function classToggle(){
  document.querySelectorAll('li').classList.toggle('checked')
}

function addText(){
  let userInput = document.getElementById('input').value;
  document.getElementById('list').innerHTML += (`<li onclick="classToggle()">${userInput}</li>`);
  input.value = ('');
  countLi()
}
//document.querySelector('.class1').addEventListener('click', classToggle);

//document.getElementsByTagName('li').onclick = function() {
//  document.getElementsByTagName('li').classList.toggle('checked');
//}

/* function clearC(){
  document.querySelector('.checked').innerHTML = ('')
  let lileng = document.querySelector('li').length - document.querySelector('.checked').length;
  document.getElementById('leftToDo').innerHTML = (`you have ${lileng} tasks`);

} */

function clearA(){
  document.getElementById('list').innerHTML = ('')
  document.getElementById('leftToDo').innerHTML = (`you have 0 tasks`)
}
