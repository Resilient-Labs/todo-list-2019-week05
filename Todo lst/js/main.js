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
    li.setAttribute("id", "element"); // added line
    const  button = document.createElement('button')// create a button
    button.setAttribute('id','buttons') //set attribute for button  
    ul.appendChild(li);
    li.appendChild(button);
    // document.querySelector('#button').addEventListener('click',removeItems2)
    document.querySelector('li').innerText= userInput
    
    
  }
  // target only one li and remove the listed items that are completed
  function removeItems2(){
    
    ul.removeChild(li);
  }