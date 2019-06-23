    // // Pseudo
    // // - We want to type inside a transform
    // // - Click a button
    // // - We want to Strike a line - througgh the tasks that are complete
    // // - We want to clear all tasks when we feel like it.
    // // - We want to calculate how many tasks are on our to-do List
    //
    document.getElementById("taskBtn").onclick= addItem;
    let deleteComplete = document.getElementById("completed")
    let deleteAll = document.getElementById("clearAll")

    // Add items to the list
    function addItem() {
      let todoList = document.getElementById("inputBar").value
      let ul= document.getElementById("list")
      let li= document.createElement("li")
      li.appendChild(document.createTextNode(todoList))
      ul.appendChild(li)
      li.onclick = crossCompleted
      counter()
    }

      // Cross out completed tasks
    function crossCompleted(){
      this.className = "crossOut"
      counter()
    }

    deleteAll.addEventListener("click", function(){
      let listedItems = document.querySelectorAll("li")
      let count = document.getElementById("keepCount")
      let i
      for (i = 0; i < listedItems.length; i++) {
        listedItems[i].style.display = "none"
      }
      count.innerHTML = 0
    })

    deleteComplete.addEventListener("click", function(){
      let listedItems = document.querySelectorAll(".crossOut")
      let i
      for (i = 0; i < listedItems.length; i++) {
        listedItems[i].style.display = "none"
      }
    })

    function counter(){
      let count = document.getElementById("keepCount")
      let itemComplete = document.querySelectorAll(".crossOut")
      let allListedItems = document.querySelectorAll("li")
      let total = allListedItems.length - itemComplete.length
      count.innerHTML = total
      console.log(total)
    }
