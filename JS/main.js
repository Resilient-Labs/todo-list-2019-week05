/*Take inputs 
generate new space for inputs when add next item is pressed
provide space to check input off 
Provide message when done is pressed*/
document.querySelector('.nextItem').addEventListener('click', nextInput)
function nextInput(){
   const nextItem = document.createElement('li')
   const nextInputSpace = document.createElement('input')
   nextInputSpace.setAttribute('class', 'textInput')
   const checkB = document.createElement('input')
   checkB.setAttribute('class', 'checkBox')
    checkB.setAttribute('type', 'checkbox')
    nextItem.appendChild(checkB)
    nextItem.appendChild(nextInputSpace)
    document.querySelector('#uL').appendChild(nextItem)
}

document.querySelector('.done').addEventListener('click', isCompleted)
function isCompleted(){
    let checkCheck = Array.from(document.querySelectorAll('.checkBox'))
    
    if(checkCheck.every(done => done.checked == true)){
        document.querySelector('.congrats').innerText = 'Congratulations on Completing your Task!'
    }
}
 document.querySelector('#clear').addEventListener('click', clearTask)

 function clearTask(){
     let userInput = document.querySelectorAll('.textInput') 
     userInput.forEach(userI => userI.value = '') 
    //  let userCheck = document.querySelectorAll('.checkBox') 
    //  userCheck.forEach(userC => userC.value = '') 
     document.querySelector('.congrats').innerText = ''     
 }





