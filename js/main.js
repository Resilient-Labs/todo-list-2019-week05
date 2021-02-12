//This adds an item to the list
function add(){
  //Get the text from the input
  let item = document.querySelector('input').value;
  //Create an li and Add the text to the ul
  let nod = document.createElement('LI')
  let insideText = document.createTextNode(item)
  nod.appendChild(insideText)
  document.querySelector('ul').appendChild(nod)
  document.querySelector('input').value = ""
}
//Adds item to the list when the enter key is pressed
function enter(event){
  if(event.key === 'Enter'){
    add()
  }
}
//Marks item as completed
function markAsCompleted(event){
let aim = event.target;
  if(aim.matches('li')){
      aim.classList.toggle('cross');
  }
}
// Removes all marked items
function removeCompleted(event){
      document.querySelectorAll('.cross').forEach((item) => {
        item.remove();
      });

}
// removes all items that are on the list whether marked or not
function deleteAll(){
  document.querySelectorAll('li').forEach((item) => {
    item.remove();
  });
}
document.querySelector('#Add').addEventListener('click',add);
document.querySelector('ul').addEventListener('click', markAsCompleted);
document.querySelector('#clearAll').addEventListener('click',deleteAll);
document.querySelector('#clearCompleted').addEventListener('click',removeCompleted);
document.querySelector('input').addEventListener('keydown', enter)
// const newLI =document.createElement('li')
// newLi.textContent =
