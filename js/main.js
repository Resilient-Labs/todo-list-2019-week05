// document.querySelector("#add").addEventListener("click", addList)
// let input = document.getElementById("#inputText")

// document.querySelector("ul").addEventListener.addEventListener("click", strike)

// function addList(){
//     let domul = document.querySelector("ul");
//     let newli = document.createElement("li");
//     newli.appendChild(document.createTextNode(input.value));
//     domul = appendChild(newli);
// }

// function strike(e){
//    if (e.target.tagName === "LI"){
//        e.target.classList.toggle("strikeThrough")
//    }
// }

                    //variables
//input
const enterItem = document.getElementById("enterItem")
//add
const addButton = document.getElementById("addButton")
const clearButton = document.getElementById("clearButton")
const removeCompletedButton = document.getElementById("removeCompletedButton")
const listContainer = document.getElementById("listContainer")

addButton.addEventListener("click", newItem)
clearButton.addEventListener("click", clear)
removeCompletedButton.addEventListener("click", completeRemove)

                    //new item function
       function newItem() {
           const li = document.createElement("li");
           li.appendChild(document.createTextNode(enterItem.value))
           li.atextContent = enterItem.value;
           console.log(li)
           listContainer.appendChild(li)
       }             

listContainer.addEventListener("click", strikeThrough)
// line through function
    function strikeThrough(e){
        if (e.target.tagName == "LI"){
            e.target.classList.toggle("linethrough")
        } 
    }
        function clear(){
            document.querySelectorAll("li").forEach(e => e.remove());
        }

        function completeRemove(){
            document.querySelectorAll(".linethrough").forEach(e => e.remove());
        }