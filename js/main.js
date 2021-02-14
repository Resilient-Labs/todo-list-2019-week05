function addtask() {
  let input = document.getElementById('input_field');

  if (input.value === "") {
    return
    // document.getElementById('input_field').value = ""
    // document.getElementByName('input_field').value =""
    // input.value=''
  } else {
    let noteList = document.getElementById('todo_list');

    noteList.innerHTML += "<li>" + input.value + "<button id='delete' onclick='crossOutTask(event)'>Cross Out</button></li>";
    countItems();
    input.value = ""
    console.log(input);
    return input
  }

}


function crossOutTask(event) {

  let goal = event.path[1]
  if (goal.matches('li')) {
    goal.classList.toggle('cross');
  }
  // event.currentTarget.parentElement.remove();
  countItems();
}

document.querySelector('#clearCompletedTask').addEventListener('click', oneDeletedTask)


function oneDeletedTask() {
  document.querySelectorAll('.cross').forEach((item, i) => {
    item.remove();
    countItems();
  });


}

function countItems() {
  let count = document.querySelectorAll("#todo_list > li").length;
  document.getElementById("counter").innerHTML = count + ' Tasks On Your To Do List';

}

document.querySelector('#deleteAll').addEventListener('click', deleteEverything)

function deleteEverything() {
  // the fucntion is selecting all of the list items and the for each is looping through them making sure we have them all selected

  document.querySelectorAll('li').forEach((item, i) => {
    item.remove();
    countItems();

  });


}
