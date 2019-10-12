let toDoCount = 0;

document.querySelector("#todoAddButton").addEventListener("click", () => {
    let inputField = document.querySelector("#todoInput");
    let inputValue = inputField.value;
    let todoItem = createToDoItem(inputValue);
    addToDoToPage(todoItem);
    updateToDoCount();
    inputField.value = "";
});

document.querySelector("#clearListButton").addEventListener("click", () => {
    const toDoItems = document.querySelectorAll(".toDoItem");
    clearListItems(toDoItems);
    toDoCount = 0;
    document.querySelector("#todosLeft").innerHTML = 0;
});

document.querySelector("#clearCompleteButton").addEventListener("click", () => {
    const completedItems = document.querySelectorAll(".completed");
    clearListItems(completedItems);
});

function createToDoItem(userInput) {
    let newToDoItem = document.createElement("li");
    let newToDoItemText = document.createTextNode(userInput);
    newToDoItem.appendChild(newToDoItemText);
    newToDoItem.classList.add("toDoItem");
    newToDoItem.addEventListener("click", toggleCompleted);
    return newToDoItem;
}


function toggleCompleted() {
    if(event.target.classList.contains("completed")) {
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    }
    updateToDoCount();
}

function updateToDoCount() {
    let totalToDos = document.querySelectorAll(".toDoItem").length;
    let completedToDos = document.querySelectorAll(".completed").length;
    toDoCount = totalToDos - completedToDos;
    document.querySelector("#todosLeft").innerHTML = toDoCount;
}

function addToDoToPage(todoItem) {
    var todoList = document.querySelector("#todoList");
    todoList.appendChild(todoItem);
}

function clearListItems(listItems) {
    listItems.forEach(el => {
        el.parentNode.removeChild(el);
    });
}
