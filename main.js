//input to add something to the list
//bonus-remove elements from the list
//you can clear the list 
//mark elements as complete?

// PREP = Parameters, Return, Examples,  Pseudocod

/* add event lstsners 

click INPUT to add  to the list 
then type into input
then press enter BUTTON
run event listener for click
input value = what too add to list
console.log (input value)

add to list : add text from input field as new li to UL

double click on item to cross out 
when you double click show item crossed iout







give li BUTTON option to MARK check as COMPLETE = strike through on li
or X to delete BUTTON - removes li

press button run fuction to clear list

*/

// innerHTML += `<li> ${task} /l</i >`
// document.getElementById('savageSays').innerText += 21
// document.querySelector('#top').style.transform+='rotate(45deg)'

document.getElementById("add").addEventListener("click",addToList);
document.getElementById("clear").addEventListener("click", clearList);
document.getElementById("remove").addEventListener("click", removeCompleted);



function removeCompleted (){
// console.log("clicked button")
  document.querySelectorAll(".strikethrough").forEach(item=>{
  item.remove()
  })
}

function clearList (){
  // console.log("clicked button")
   document.querySelectorAll("li").forEach(item=>{
  item.remove()
 })
}
  

function addToList(){
  
  let input = document.querySelector("#newLi").value 
  // console.log(input);

  let ul = document.getElementById("list")
  let li = document.createElement("li") 
  
  li.appendChild(document.createTextNode(input)) //append means to add
  ul.appendChild(li);


  li.addEventListener("click", (e)=> {
    // console.log("li clicked")
      li.classList.toggle("strikethrough");
      });
}


//   function crossOutLi(){(e) {
//   let = e.target.parentElement;
//   let ul = document.getElementById("list");
//   e.target.parentElement.style.setProperty("text-decoration", "line-through");
// }

// remove from list

// document.getElementById("remove").addEventListener("click",removeFromList );


// let list = document.getElementById("list");

// list.removeChild(list.childNodes[3]);











// function function1() {
  //   var ul = document.getElementById("list");
  //   var li = document.createElement("li");


  
  