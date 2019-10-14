let item;
let addItem = document.querySelector('#addItem')
let howManyLeft = document.querySelector("#howManyLeft").innerHTML = 0
//did this to be able to store more than one value
addItem.addEventListener('click', function(){
  item = document.querySelector('#item').value
  let list = document.querySelector("#list")
  let listItem = document.createElement("li")
  listItem.appendChild(document.createTextNode(item));
  console.log(list);
  //putting .innerHTML v createTextNode do different things
  //append child stores things into one another
  list.appendChild(listItem)
  //next line will update what's left for the todos
  document.querySelector("#howManyLeft").innerHTML = ++howManyLeft;

  //++ infront rather than after bc we wanna update the value and then log how many are left
})


//need to clear input box (edgecase)
// item.addEventListener('click', function(){
//  document.getElementById("item");
//     item.value = "";
// })

//get clearList button working
clearList.addEventListener('click', function(){
 document.querySelector("#list").innerHTML = "";
 document.querySelector("#howManyLeft").innerHTML = 0
})
// get clearCompleted button working
let clearCompleted = document.querySelector('#clearCompleted')

clearCompleted.addEventListener('click', ()=>{
  let list = document.querySelectorAll('.done')
  // ".done" in css
  list.forEach(el =>{
    el.parentNode.appendChild(el)
  })
  document.querySelector('#howManyLeft').innerHTML=document.querySelectorAll('#list li').length
  howManyLeft = document.querySelectorAll('#list li').length
})
