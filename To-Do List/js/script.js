document.querySelector('#addToList').addEventListener('click', addToList)

let list = document.querySelector('#theList')

function addToList() {

    let newObjective = document.querySelector('#newToDo').value
    let newLi = document.createElement('li')

    list.appendChild(newLi)
    newLi.textContent = newObjective

    newLi.addEventListener('click', () => {
        newLi.classList.toggle('strike')
    })


    document.querySelector('#clearCompleted').addEventListener('click', strikeClear)

    function strikeClear() {
        let i = 0
        let toBeCleared = document.querySelectorAll('.strike')
        while (i < toBeCleared.length) {
            toBeCleared[i].classList.add('hidden')
            i++
        }
    }

    document.querySelector('#reset').addEventListener('click', refresh)

    function refresh() {
        location.reload()
    }
}
