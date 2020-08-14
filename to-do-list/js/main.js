let ul = document.getElementById("itemToAdd")

document.getElementById("addsTask").addEventListener("click", addsTask =>{
  event.preventDefault()
  let li = document.createElement("li")
  let listItemTask = document.getElementById('listItemTask').value

  ul.appendChild(li)


})
