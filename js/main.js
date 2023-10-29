// VARIABLES
const inputValue = document.getElementById("input");
const addButton = document.querySelector(".addButton");
const clear = document.querySelector(".clear");
const clearAll = document.querySelector(".clearAll");
const list = document.querySelector(".list");
const numOfItems = document.getElementById("numOfItems");
let updatedCount = 0;

// FUNCTIONS
const enterItem = (e) => {
  if (e.key === "Enter") {
    addItem();
  }
};

const addItem = () => {
  let input = inputValue;
  if (input.value) {
    let item = document.createElement("li");
    item.innerText = input.value;
    list.appendChild(item);
    input.value = "";
    updatedCount++;
    numOfItems.innerHTML = updatedCount;
    crossOut(item);
  } else {
    console.log(input.value);
    return alert("write something");
  }
};

const crossOut = (e) => e.target.classList.toggle("crossOut");

const clearItAll = () => {
  document.querySelectorAll("li").forEach((li) => li.remove());
  updatedCount = 0;
  numOfItems.innerHTML = updatedCount;
};

const clearItem = () => {
  let liList = document.querySelectorAll(".crossOut");
  let liNumbered = 0;
  if (liList) {
    liNumbered = liList.length;
    document.querySelectorAll(".crossOut").forEach((li) => li.remove());
    updatedCount = updatedCount - liNumbered;
    numOfItems.innerHTML = updatedCount;
  } else {
    return;
  }
};
// EVENT LISTENERS
addButton.addEventListener("click", addItem);
inputValue.addEventListener("keypress", enterItem);
list.addEventListener("click", crossOut);
clearAll.addEventListener("click", clearItAll);
clear.addEventListener("click", clearItem);
