// - Define a function addTask():
//     - Get the task input element by its id
//     - Get the trimmed text from the input
//     - Check if the input is not empty
//     - If not empty:
//         - Get the task-list ul element
//         - Create a new list item (li) element
//         - Set the innerHTML of the li with task text and buttons
//         - Append the li to the task-list
//         - Clear the input field
function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <span>${taskText}</span>
      <button onclick="markCompleted(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
      `;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

// - Define a function markCompleted(button):
//     - Get the parent task element of the button
//     - Toggle the "completed" class on the task element, which adds/removes text decoration
function markCompleted(button) {
  const task = button.parentElement;
  task.classList.toggle("completed");
}

// - Define a function removeTask(button):
//     - Get the parent task element of the button
//     - Remove the task element from the list
function removeTask(button) {
  const task = button.parentElement;
  task.remove();
}

// - Define a function removeCompletedTasks():
//     - Get all elements with the "completed" class
//     - Iterate through the completed tasks
//     - Remove each completed task from the list
function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach((task) => task.remove());
}

// - Attach the addTask, markCompleted, removeTask, and removeCompletedTasks functions to their respective buttons using onclick event handlers in the HTML.
