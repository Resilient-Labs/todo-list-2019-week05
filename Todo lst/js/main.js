// take user input 
// add event listener to button add input into list
// to remove items append the ul child 
document.querySelector('#addItems').addEventListener('click',addItems)
document.querySelector('li').addEventListener('click',removeItems2)
document.querySelector('#buttons').addEventListener('click',removeItems2)
function addItems(e) {
    e.preventDefault()
     let userInput = document.getElementById("getList").value;
    let ul = document.getElementById("list-items");
   let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput));
    const button = document.createElement('button'); // create a button
    button.textContent = 'Remove'; // set button text
    button.addEventListener('click', removeItems2); // attach event listener to button
    li.appendChild(button);
    ul.appendChild(li);
    
  }
  // target only one li and remove the listed items that are completed
  function removeItems2(e) {
    let btn = e.target; // button that was clicked
    let li = btn.parentNode; // li containing the button
    let ul = li.parentNode; // ul containing the li
    ul.removeChild(li);
}