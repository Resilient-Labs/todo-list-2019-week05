/*
-have a text field for the user to enter in a new todo item.
-grab the value and place it into an empty unordered list item
-each unordered list element needs to be inilized with a button, or a check box
-the button or check box needs to allow the user to toggle the task as being completed
    -a completed task should either be striked though or cleared from the list.
*/


document.querySelector('.addTaskBtn').addEventListener('click', addTask)
//document.querySelector('.completeBtn').addEventListener('click', completeTask)

const unorderedList = document.querySelector("ul");

function addTask() {
    //#taskList

    let todoTask = document.querySelector('.addTaskField').value

    //console.log(todoTask);

    let newTaskLi = document.createElement("li"); //
    let liButton = document.createElement("button");
    //unorderedList.setAttribute("li", taskList.innerText += todoTask)

    liButton.setAttribute("class", "completeBtn")
    liButton.innerText = "Complete"
    liButton.addEventListener("click", completeTask)

    newTaskLi.innerText = todoTask;

    unorderedList.appendChild(newTaskLi);
    newTaskLi.appendChild(liButton);


    function completeTask() { //function closure
        //will run off the button that is generated along side a todo item.
        console.log("This is working!")
        unorderedList.removeChild(newTaskLi);
        //this.remove() removes button itself
        //remove(newTaskLi); clears whole list at once
        //removeChild(newTaskLi); removes the most recent li then breaks bc 
        //Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    }
    //stack frame
}




