// worked with Will, and Hassan 

document.querySelector('#btn').addEventListener('click', addLi)

// function toggling line through 

// document.querySelector('#list').addEventListener('click', line)

// console logs value inputed 

function addLi(){
    let listInput = document.querySelector('#listInput').value 
    console.log(listInput)

// creates the element (li) 

let li = document.createElement('li')

// creates a text node 

let text = document.createTextNode(listInput)

// next step is to add text into li using a append child that was previously empty 

li.appendChild(text)

// puts the li inside ul 

let ul = document.querySelector('#list')
ul.appendChild(li)

li.addEventListener('click', line);
}

// toggles on and off 

function line(e){
    e.target.classList.toggle('strike');
}
