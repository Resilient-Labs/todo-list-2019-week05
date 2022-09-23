//got inspiration from VONDS' classes and W3

document.querySelector('#btnOne').addEventListener('click', btnPress)
document.querySelector('#unList').addEventListener('click', lineThrough)


let inputAnswer = document.querySelector('#inputBox').value

function btnPress(e){
    e.preventDefault();
   
   
    let firstList= document.createElement('li')
    let inputAnswer = document.querySelector('#inputBox').value
    let li = document.createTextNode(inputAnswer)
    firstList.appendChild(li)

    if (inputAnswer === '') {
        console.log('Please input something to do!')
    }
    else{
        document.getElementById('unList').appendChild(firstList)
    }
    document.getElementById('unList').value = ""
    const listInput = document.getElementById('inputBox')
    listInput.value = ''
    let line = document.querySelector('#unList')
    line.classList.remove('unlist')
    
}

function lineThrough(e){
    e.target.classList.toggle('unlist')
}


