// function to Add items to the list. Take inputted words and add to the list, and each list item should be clickable.
var newLi = document.createElement("li");
document.querySelector("#addList").addEventListener("click", addItem);
document.querySelector(".idNum").innerText =
  document.querySelectorAll("li").length -
  document.querySelectorAll(".complete").length;

let itemList = [];

function addItem() {
  let task = document.querySelector("#listItem").value;
  let newLi = document.createElement("li");
  newLi.innerText = task;
  //.value only when user clicks button .appendChild to a ul tag
  document.querySelector("ul").appendChild(newLi);
  document.querySelector("#listItem").value = "";

  // total number of elements left innertext html, .lenghth property document.querySelector('li').length
  // tells you how many lis are in the targeted list and then you do - class completed . length
  // subtract total from completed to be left with list remaining .
  let itemLeft = document.querySelectorAll("li").length - document.querySelectorAll(".complete").length;
    document.querySelector(".idNum").innerText = itemLeft;

  // function to strike through list items add click event to listen for click on the item to strike through it....
  //toggle class completed, toggle strikethrough

  newLi.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    itemLeft = document.querySelectorAll("li").length - document.querySelectorAll(".complete").length;
    document.querySelector(".idNum").innerText = itemLeft;
  });

//   // total number of elements left innertext html, .lenghth property document.querySelector('li').length
//   // tells you how many lis are in the targeted list and then you do - class completed . length
//   // subtract total from completed to be left with list remaining .
//   let itemLeft =
//     document.querySelectorAll("li").length -
//     document.querySelectorAll(".complete").length;
//     document.querySelector(".idNum").innerText = itemLeft;
}

// function to clear the list entirely link the function to the button that has the words, add event listener to listen for clicks on the button.
// .remove() all the li
document.getElementById("listClear").addEventListener("click", () => {
  document.querySelectorAll("li").forEach((el) => el.remove());

  // total number of elements left innertext html, .lenghth property document.querySelector('li').length
  // tells you how many lis are in the targeted list and then you do - class completed . length
  // subtract total from completed to be left with list remaining .

  let itemLeft =
    document.querySelectorAll("li").length -
    document.querySelectorAll(".complete").length;
    document.querySelector(".idNum").innerText = itemLeft;
});

// function to clear only completed items link the function to the button that has the words, add event listener to listen for clicks on the button.

// .remove() all the li with completed class
document.getElementById("completeClear").addEventListener("click", () => {
  document.querySelectorAll(".complete").forEach((el) => el.remove());

  // total number of elements left innertext html, .lenghth property document.querySelector('li').length
  // tells you how many lis are in the targeted list and then you do - class completed . length
  // subtract total from completed to be left with list remaining .

  let itemLeft =
    document.querySelectorAll("li").length -
    document.querySelectorAll(".complete").length;
    document.querySelector(".idNum").innerText = itemLeft;
});


// completed, Everything works together.Tested and ran.