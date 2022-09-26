// Create a To Do List website that we allow the user to be able to add items, erase everything,
//  or select the one that he wanted to delete

document.querySelector("#item").addEventListener("click", goal);
document.querySelector("#list").addEventListener("keydown", goal);
document.querySelector("#clearall").addEventListener("click", clearall);
document.querySelector("#item").addEventListener("click", gItem);
document.querySelector("#placeList").addEventListener("click", makeAsCompleted);
//line 10 help us to erase one item that the user is going to select
//the function that's going to help him is line 58-60.
document.querySelector("#clearSelected").addEventListener("click", removeCompleted);

function goal(e) {
  console.log(e.code);
  if (e.code == "Enter") {
    const fList = document.querySelector("#list");
    if (fList.value != "") {
      const listItem = document.createElement("li");
      listItem.innerText = fList.value;
      document.querySelector("#placeList").appendChild(listItem);
      fList.value = "";
    }
  }
}

function clearall() {
  document.querySelector("#placeList").innerHTML = " ";
}

function gItem(e) {
  const fList = document.querySelector("#list");
  if (fList.value != "") {
    const listItem = document.createElement("li");
    listItem.innerText = fList.value;
    document.querySelector("#placeList").appendChild(listItem);
    fList.value = "";
  }

  console.log("click");
  console.log(e);
}
// This function is to target a single li by using 'event.targert'property.
// 
function makeAsCompleted(event) {
  let aim = event.target;
  if (aim.matches("li")) {
    aim.classList.toggle("crossed");
    document.querySelectorAll('.crossed').forEach(element => {
        console.log

    });
  }
}

//<--Form line 54-59, this function help to cross or removed the element selected-->
//We create the crossed class inside the CSS to give it a 'line-through' text-decoration.
//

function removeCompleted(event) {
  document.querySelectorAll(".crossed").forEach((element) => {
    element.remove();
  });
}
// //Allow the add item buttom to work
// //clear input( )
// //mark ite as selected
// //clear selected
