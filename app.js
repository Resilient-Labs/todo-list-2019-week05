let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let form = document.querySelector(".form")
let list = document.querySelector("#list")
let remainingTasks = document.querySelector(".remainingTasks").innerHTML = 0;
let clearList = document.querySelector(".clearList")
let clearComplete = document.querySelector(".clearComplete")


document.addEventListener("DOMContentLoaded", function(event) {
   let tasksLeft = 0
   form.addEventListener("submit", function(event){
      if(input.value === "") {
         event.preventDefault()
         alert("Add Task")
      } else {
         event.preventDefault()
         tasksLeft++
         let li = document.createElement("li")
         let text = document.createTextNode(input.value);
         li.appendChild(text);
         li.className = "task"
         document.getElementById("list").appendChild(li)
         document.querySelector(".remainingTasks").innerHTML = tasksLeft;
         input.value = ""
      }

      let todoItems = document.querySelectorAll("li");
      complete(todoItems);
   })

   document.querySelector(".clearList").addEventListener("click", () => {
      document.querySelector("#list").innerHTML = "";
      document.querySelector(".remainingTasks").innerHTML = 0;
      tasksLeft = 0;
   });

   function complete(arr){
     let tasksRemaining = document.querySelector('.remainingTasks')
      for (let i = 0; i < arr.length; i++) {
         arr[i].onclick = function() {
            this.classList.toggle("done")
            if (this.classList.contains("done")) {
              let item = parseInt(tasksRemaining.innerHTML)
              let newValue = item + -1
              return tasksRemaining.innerHTML = String(newValue)
            } else {
              let item2 = parseInt(tasksRemaining.innerHTML)
              let newValue = item2 + 1
              return tasksRemaining.innerHTML = String(newValue)
            }
         }
      }
   }

function clearCompleted(completed){
  let completedItems = document.getElementsByClassName("done");
  while(completedItems.length > 0){
    completedItems[0].parentNode.removeChild(completedItems[0]);
  }
}
document.getElementsByClassName('clearComplete').onclick = clearCompleted;

// Find out querySelectorAll and do it to class, find out what data type it returns, might be a forEach. For loop

   clearComplete.addEventListener("click", function() {
     var allNodes = document.querySelectorAll("li")
     for(let i = 0; i < allNodes.length; i++) {
        if (allNodes[i].classList.contains("done")) {
          allNodes[i].style.display = 'none';
        }
     }
   });
});

//Thank you to Lloyd, Kaniah, and Kevin for their wisdom!
