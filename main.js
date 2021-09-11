let list = document.getElementById("list")
let clear = document.getElementById("clear")
let reset = document.getElementById("reset")
let show = document.getElementById("showItem")
let countotal = 0



list.addEventListener("click", function () {
  const myinput = document.getElementById("myInput")
  const li = document.createElement('li')
  li.innerText = myinput.value
  show.appendChild(li);
  countotal++
  li.addEventListener('click', function (event) {
    li.classList.toggle('strike')
    if (li.classList.contains('strike')) {
      countotal = countotal - 1
    } else {
      countotal = countotal + 1
    }
    document.querySelector('#countotal').innerText = countotal
    return countotal
  }
  )
})
reset.addEventListener("click", function () {
  let completed = document.querySelectorAll(".strike")
  completed.forEach(li => li.classList.add("hide"))
}
)
clear.addEventListener("click", function () {
  show.innerHTML = ''
})
