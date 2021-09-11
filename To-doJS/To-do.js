let addbutton = document.getElementById("add_to");
let todo = document.getElementById("todo");
let input = document.getElementById("iField");
let button = document.getElementById("clear");
let clearbutton = document.getElementById("clear_comp");
let todocount = document.getElementById("counter");

addbutton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  todo.appendChild(paragraph);
  iField.value = "";
  todocount.innerHTML = counter(todo.childNodes);
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.className = "scrach";
    todocount.innerHTML = counter(todo.childNodes);
  });
});

console.log(todo.childNodes);

clear.addEventListener("click", function () {
  while (todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
});
clearbutton.addEventListener("click", function () {
  todo.childNodes.forEach((childNode) => {
    console.log("hello");
    console.log(childNode.className);
    if (childNode.className === "scrach") {
      todo.removeChild(childNode);
    }
  });
});
const counter = (todoArray) => {
  let count = 0;
  todoArray.forEach((todo) => {
    if (todo.className !== "scrach") {
      count++;
    }
  });
  // document.querySelector("#counter").innerText = `${count} left`;
  // console.log(test);
  return count;
};
