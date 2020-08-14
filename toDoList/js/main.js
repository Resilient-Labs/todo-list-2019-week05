// Establish global variables
let list = document.querySelector("#list");
const clearDone = document.querySelector("#clearDone");
const clear = document.querySelector("#clearAll");
let countChange = document.querySelector("#countChange");
let finishedChange = document.querySelector("#finishedChange");
const addButt = document.querySelector("#addButt");


// add functionality to the button that adds the item
addButt.onclick = checkIfEmpty; //When you click the btn it runs the function checkIfEmpty

// Bonus: Also submits on Enter key
listInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("addButt").click(); //It clicks the button when you press enter
  }
});


//So it doesn't submit something empty
function checkIfEmpty() {
  let emptySubmit = document.getElementById("listInput").value;
  if (emptySubmit == "") {
    return false; //It doesn't run if it's empty
  }
  else {
    addList(); //If it's not empty run function addList
  }
}


// Establish function to be used when submitted
function addList(){
  let li = document.createElement("li");
  let listInput = document.getElementById('listInput').value;
  list.appendChild (li);
  li.appendChild(document.createTextNode(listInput));
  document.getElementById("listInput").value = "";
  itemsLeft(); //runs function to change count
}

// When item is clicked it is checked(class in css)
list.addEventListener("click", (e)=> {
  e = e.target
  e.classList.toggle("checked")
  itemsLeft();
})

// To clear all items in list and reset counter back to 0
clear.addEventListener('click', ()=>{
const item = document.querySelectorAll("li")
for (let i = 0; i < item.length; i++) {
  list.removeChild (item[i])
}
itemsLeft()
})

//To clear items with class of 'checked' (done)
clearDone.addEventListener('click', ()=> {
const item = document.querySelectorAll("li")
for (let i= 0; i < item.length; i++){
  if (item[i].classList.contains('checked')){
    list.removeChild(item[i])
  }
}
itemsLeft()
})

//function to track how many items there are
function itemsLeft(){
  let trackCount = 0;
  const item = document.querySelectorAll('li')
  for (let i = 0; i< item.length; i++){
    if(!(item[i].classList.contains('checked'))){
      trackCount++
    }
  }

  document.getElementById('countChange').innerHTML = trackCount;
}
