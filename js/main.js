// add items to list- input ()
// check off items
// clear list - Press button ( eventListener)
let item;
let addItems= document.querySelector('#addItems');
// let listArray= [];
let howManyLeft= document.querySelector("#howManyLeft").innerHTML = 0;
let list;
let listItem;
// let itemList= [];
let clearList= document.querySelector("#clear");
let clearInd= document.querySelector('#completed');


addItems.addEventListener('click',()=>{
  // grabbing value of user input
 item = document.querySelector('#item');
  // stores values in unordered click
 list =document.querySelector('#list')
  // create li tags
 listItem = document.createElement("li")
  if(item.value === ""){
    return;
  }

  // itemList.push(item.value)

  listItem.appendChild(document.createTextNode(item.value));
  listItem.addEventListener('click',()=>{
    event.target.classList.toggle('completed')
  })
  //breaks each li to display individually
  list.appendChild(listItem);
  // resets so that the bar will be empty
  item.value='';
  ++howManyLeft;
  document.querySelector('#howManyLeft').innerHTML= howManyLeft;

  // updates how many to dos are left to complete

})


clearList.addEventListener('click',()=> {
   let listRemove= document.querySelectorAll("#list li");
// button to delete
 listRemove.forEach(el =>{
   el.parentNode.removeChild(el)
 })
  // storing list
  // will remove all items in li
 howManyLeft=0;

  document.querySelector('#howManyLeft').innerHTML= 0;
  // clearList= 0;
})

clearInd.addEventListener('click',()=>{
  list = document.querySelectorAll('.completed')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#howManyLeft').innerHTML= document.querySelectorAll('#list li').length
  howManyLeft = document.querySelectorAll('#list li').length
})



//
// let strikethrough = document.querySelector('listItem');
// strikeThrough =
//   strikethrough.addEventListener('click',() =>{
//   // let you = event.target.li
//   // you.style.setProperty("text-decoration", "line-through");
//
//   var strikeThroughOne = listItem.strike()
//   document.getElementById("list").innerHTML = strikeThroughOne
// })

// let clearInd.addEventListener('click',()=>{
//  var removeCompleted =document.getElementById('list');
//
//
//
// })

  // console.log(listItem);

// })
//
// let allButtons= document.querySelectorAll('allButtonss');
//
// console.log(allButtons);
//
// for(let i=0;i< allButtons.length;i++){
//     allButtons[i].addEventListener('click',function(evt) {
// }
