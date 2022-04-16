// declare const variables
const btn =document.querySelector('.btn')
const input=document.querySelector('#input')
const ul=document.querySelector('#toDoList')
const clearAll = document.querySelector('#clearAll')
const clearCompleted= document.querySelector('#clearCompleted')
const toDoCount = document.querySelector("#toDoCount")

  //function to dynamically create li's 
  function createAnLi(e){
    //prevent default refreshing behavior from the form and submit button
    e.preventDefault()
    //if input is empty stop running the function 
    if(input.value === '') return
    //dynamically create the li element in JS
    const li = document.createElement('li')
    //give newly created elements class names
    li.className = "not-crossed"
    //assign said elements its inner text to be the value inputed from the user 
    li.innerText = input.value
    //stick the li's in the ul to display in the DOM 
    ul.appendChild(li)
    // reset the input value back to empty once the button is clicked and the previous value is submitted
    input.value= ''
    //increase the value of the counter by 1 
    toDoCount.innerText = parseInt(toDoCount.innerText) + 1
  
  }

//function to strikethrough said li's 
function strikeThrough(e){
  //e.target in this case is = li,that will be clicked  the element that is "clicked" aka connected to the event listener , see: *EVENT DELEGATION & e.target property* for more info.
   // if the li is clicked, toggle on and off the line-through styling and change the class accordingly 
  if (e.target.classList.contains('not-crossed')){
    // console.log('Hello I\'m working!') debugging/ testing if function is running 
   e.target.style.textDecoration="line-through"// change CSS syntax text-decoration to JS camelCase
   // every time an li is striked through, decrease the # of items you have left to do by 1
   //convert the inner text of the string of the #toDoCount element into an integer and decrease by one reassign = the new value to the same element id's inner text 
   toDoCount.innerText= parseInt(toDoCount.innerText) - 1 
   //reassing the target elements, in this case, the li's class name to "crossed"
    e.target.className = "crossed"
    //if the above condition is not true then, if the target element's class is already "crossed" and the event listener is activated then
  }else if( e.target.classList.contains("crossed")){
    //remove the text line-through decoration from the li's string
    e.target.style.textDecoration= "none"
    //reassign the className to "not-crossed", the function will run/ reiterate through the conditonal every time the click event is activated
    e.target.className = "not-crossed"
    // increase the # of items you have left to do by 1 if the e. target is re assigned the id of "not-crossed" 
    toDoCount.innerText= parseInt(toDoCount.innerText) + 1
  }

}

//function to clear ONLY completed list tasks 
function clearCompletedListItems(e){
 //for / each loop takes in an anonymous function expression as a parameter ({})* see more about loops, arrays ( converting Node-lists to Array list), high order functions & fat arrow function short hand notation 
  Array.from(ul.childNodes).forEach ( li => {
    //if li has .crossed class then .remove() from list
    if(li.classList.contains("crossed") ){
      li.remove()
    }
  } ) 
} 

//when the button is clicked, remove all the items in the list 
function clearAllValues(e){
  while(ul.hasChildNodes()){// while this condition is true, this loop will run through the ul li's & remove them 1 @ a time
    ul.removeChild(ul.firstChild)//only first or last child can be removed at any one given time
    //reset the counter to a string of 0 when all values are cleared
    toDoCount.innerText = "0"
  } 
}


//event listeners with functions as parameters

btn.addEventListener('click', createAnLi)
clearAll.addEventListener('click', clearAllValues)
clearCompleted.addEventListener('click', clearCompletedListItems)
ul.addEventListener('click', strikeThrough)

