let ul = document.getElementById("itemToAdd") //declare a variable

// document.querySelector("#addsTask").addEventListener("click", addItem) //anonymous function with a parameter event //when the user "clicks" the add button  it will run addsTask function //event is a parameter


document.getElementById('form').addEventListener("submit", addItem) //stop enter

function addItem(event){
  event.preventDefault() //does not submit a form
  let listItemTask = document.querySelector("#listItemTask").value //gets what the user input value= the text inside of it

  if(listItemTask.length === 0){
    return; //so it returns nothing
  }

  let li = document.createElement('li')

  let clickCounter = 0;
  li.addEventListener("click", (event)=>{
    clickCounter++
    // event.target.classList.add("strike");
    if (clickCounter % 2 == 0){
      event.target.classList.remove("strike")
      document.querySelector("#taskCounter").innerText = parseInt(document.querySelector("#taskCounter").innerText) + 1;
    }
    else {
      event.target.classList.add("strike")
      document.querySelector("#taskCounter").innerText = parseInt(document.querySelector("#taskCounter").innerText) - 1;
    }

  }) //creates a li and then use strike


  // ul.innerHTML = ul.innerHTML + "<li>" + listItemTask + "</li>" ///this will override the input  innerHTML inside to add

  li.textContent = listItemTask; //
  ul.appendChild(li);


  document.querySelector("#listItemTask").value = "" //clears
  document.querySelector("#taskCounter").innerText = 1 + parseInt(document.querySelector("#taskCounter").innerText)  //grab element, find the text, convert it to integer, convert the text to integer, and add 1
}

document.querySelector("#clearAll").addEventListener("click", (event)=>{ //when pressed clear all it clears
  document.getElementById('itemToAdd').innerHTML = "";
  document.querySelector("#taskCounter").innerText = "0";
})

document.querySelector("#clearCompleted").addEventListener("click", (event)=>{ //when pressed clear all it clears
  let lis = document.querySelectorAll('li'); //it gets everything with the class name = array
  for(let i = 0; i < lis.length; i++){  //defining index, how long it runs, repeat if applied
    if(lis[i].classList.contains('strike')){
      ul.removeChild(lis[i])
    }
  }
  console.log(lis)

})
