let addBtn = document.querySelector(".add")
let clearBtn = document.querySelector(".clear")
let userInput = document.querySelector(".items")
let ul = document.querySelector(".listitems")
let total = document.querySelector(".total")

addBtn.addEventListener("click", additems)

function additems(e){
    e.preventDefault()
    if (userInput.value !==''){
        let li = document.createElement('li')
        li.innerText = userInput.value
        ul.appendChild(li)
        userInput.value = ''
        li.addEventListener("click", crossOut)
        newCount()
    }
}

function crossOut(e){
    e.target.classList.toggle("strike")
    newCount()
}

function newCount(){
    let allListItems = document.querySelectorAll("li")
    let totalNonStrike = 0
    for (let i = 0; i < allListItems.length; i++){
        let li = allListItems[i]
        if (!li.classList.contains("strike")){
            totalNonStrike ++
        }
    }
    total.innerText = `You have ${totalNonStrike} tasks left`
}


clearBtn.addEventListener("click", clearAll)
function clearAll(){
    let allListItems = document.querySelectorAll("li")
    allListItems.forEach(li => li.remove())
    newCount()
}

// allListItems.forEach(li => {
//     if (!li.classList.contains("strike")){
//         totalNonStrike ++
//     }
// })