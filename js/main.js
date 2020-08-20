let input = document.getElementById('input');
function countLi(){
	let len = document.getElementById('list').getElementsByTagName('li');
  let lilength = len.length
  document.getElementById('leftToDo').innerHTML = (`you have ${lilength} tasks left`);
}
function clicky(e){
  if (e.target.classList.contains('frank')) {
    e.target.classList.toggle('checked')
  }
}
document.getElementById('list').addEventListener('click',clicky)
function addText(){
  let userInput = document.getElementById('input').value;
  if (userInput !== '') {
    document.getElementById('list').innerHTML += (`<li class="frank" onclick="clicky()">${userInput}</li>`);
    input.value = ('');
    countLi()
  }
}
function clearC(){
  let frank2 = document.querySelectorAll('li').length - document.querySelectorAll('.checked').length;
  document.querySelectorAll('.checked').forEach(x=>x.innerHTML='');
  document.getElementById('leftToDo').innerHTML = (`you have ${frank2} tasks`);
}
function clearA(){
  document.getElementById('list').innerHTML = ('')
  document.getElementById('leftToDo').innerHTML = (`No more tasks? You've earned a break!`)
}

function EnterKey(z){
   if(z.keyCode == 13){
   	addText()
   }
}
