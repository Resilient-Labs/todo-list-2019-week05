document.querySelector('#bin').addEventListener('click', add)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#clearComp').addEventListener('click', clearComp)

// worked on with thao

function add(e){
    e.preventDefault()
    let put = document.querySelector('.put')
    let li = document.createElement("li");

    if(put.value !== ''){
         // How to increase something by 1 in html
        document.querySelector('.number').innerText = Number(document.querySelector('.number').innerText)+1
    }

    li.innerText = put.value;
    document.querySelector('#list').appendChild(li);

    li.addEventListener('click', () =>{
        li.classList.toggle('strike')
        console.log(document.querySelectorAll('.strike').length)
        document.querySelector('.number').innerText = document.querySelectorAll('li').length - document.querySelectorAll('.strike').length
    })
    put.value = ''
}
function clear(e){
    e.preventDefault()
    let liArr = document.querySelectorAll('li')
    liArr.forEach(el => el.remove())
    document.querySelector('.number').innerText = 0
}
function clearComp(e){
    e.preventDefault()
    // for each is to select in array
    document.querySelectorAll('.strike').forEach(element => {
        element.remove()
    })
    document.querySelector('.number').innerText = document.querySelectorAll('li').length
}
