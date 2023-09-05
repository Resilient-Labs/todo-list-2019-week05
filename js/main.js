// let input = document.getElementById('input');

function markForCompletion(e){
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('checked')
  }
}

document.getElementById('list').addEventListener('click',markForCompletion)

function addText(){
  let userInput = document.getElementById('input').value;
  if (userInput.trim().length !== 0) {
    document.getElementById('list').innerHTML += (`<li class="item" onclick="markForCompletion()">${userInput}</li>`);
    input.value = ('');
    clearCompleted();
  }
}

function leftToDo(){
  length = document.querySelectorAll('li').length;
  document.getElementById('leftToDo').innerHTML = (length > 0 ? `you have ${length} tasks`:`No more tasks! You've earned a break!`);
}

function clearCompleted(){
  document.querySelectorAll('.checked').forEach(x=>x.remove());
  leftToDo();
}

function clearAll(){
  if (document.querySelectorAll('li').length > 0){
    confirm("Clear entire list?") ? document.getElementById('list').innerHTML = (''): null;
    leftToDo();
  }
}

function EnterKey(z){ //allows the enter key to add an item to the todo list
   if(z.keyCode == 13){
   	addText();
   }
}