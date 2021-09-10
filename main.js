
//Adding EventListener to addItem
document.querySelector('#addItem').addEventListener('click', addItem)

//This function takes user input and creates an li and puts it inside the ul 
function addItem(){
    let input = document.querySelector("#input").value
    let ul = document.querySelector("#list")
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);

//Eventlistener to toggle css class everytime an li is clicked
    li.addEventListener('click', ()=>{
        li.classList.toggle("strike")
    })
}




//Adding EventListener to removeAll
document.querySelector('.removeAll').addEventListener('click', removeAll)
function removeAll(){
    document.querySelector("#list").innerHTML= ''

 }

 //First create button in html with and class name of "removeItem" 
 // In js we grab the button "removeItem" then added an EventListener
 //EventListener listens for click then calls a function "removeItem"
 //Inside the function remove item 

 document.querySelector('.removeItem').addEventListener('click', removeItem)
 function removeItem(){
     document.querySelectorAll('.strike').forEach(item=>{
            item.remove()
     })
 }

