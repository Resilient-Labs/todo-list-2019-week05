let newTask = document.querySelector('#new-task');
let addTaskBtn = document.querySelector('#addTask');

let toDoUl = document.querySelector(".todo-list ul");
let completeUl = document.querySelector(".complete-list ul");


let createNewTask = (task) => {

    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    label.innerText = task;

    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;

};

let addTask = () => {
    let listItem = createNewTask(newTask.value);
    toDoUl.appendChild(listItem);
    newTask.value = "";

    bindIncompleteItems(listItem, completeTask);

};

var completeTask = function () {

    let listItem = this.parentNode;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();

    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);

};

var deleteTask = function () {
    console.log("Deleting task...");

    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);

};


let bindIncompleteItems = (taskItem, checkBoxClick) => {
    console.log("Binding the incomplete list...");

    let checkBox = taskItem.querySelector("input[type=checkbox]");

    checkBox.onchange = checkBoxClick;
};


let bindCompleteItems = (taskItem, deleteButtonPress) => {
    console.log("Binding the complete list...");

    var deleteButton = taskItem.querySelector(".delete");

    deleteButton.onclick = deleteButtonPress;

};


for (let i = 0; i < toDoUl.children.length; i++) {
    bindIncompleteItems(toDoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}


addTaskBtn.addEventListener("click", addTask);

