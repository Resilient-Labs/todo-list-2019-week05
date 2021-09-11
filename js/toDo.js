//input to add something to the list

//listener for adding an li 
//listener for toggling a list item
//listener for clearing one item. 
//listener for clearing whole list. 



const addToList = document.querySelector('#addToList')

const clearList = document.querySelector('#clearList')


let total = 0 
// listItemToAdd.addEventListener('click', addingThatListItem)
addToList.addEventListener('click', buttonAddsItem)
clearList.addEventListener('click', clearTheList)



// function addingThatListItem(){
    
// }

function buttonAddsItem(){
    let listItemToAdd = document.querySelector('#somethingToAdd').value 
    console.log(listItemToAdd)

    if (listItemToAdd === '0' || listItemToAdd === ''){
        console.log('you have nothing here')
             
    } else{
        creatingYourList()
        console.log('terminus') 
        // let listItemToAdd.value = '' rest the text in the input field.
    }
}

function creatingYourList(){
// let li = document.createElement('li')
//         li.appendChild(document.querySelector('p').innerText = listItemToAdd)
//          = listItemToAdd
    let listItemToAdd = document.querySelector('#somethingToAdd').value
    let li = document.createElement('li')
    
    li.addEventListener('click', deleteItem)
    let list = document.querySelector('p')
    li.appendChild(document.createTextNode(listItemToAdd))
    list.appendChild(li)
    document.querySelector('#somethingToAdd').value = ' '// li.appendChild(document.querySelector(ul).appendChild(listItemToAdd)) 

    total += 1 
    document.querySelector('.tellsYouWhatsLeft').innerText = 'you have ' + total + ' task left';

    // list.addEventListener('click', function(){
    //     total -= 1
    //     document.querySelector('.tellsYouWhatsLeft')
    // })

}

function deleteItem(e){
    let li = e.target
    li.classList.toggle('hide')
    total -= 1 
    document.querySelector('.tellsYouWhatsLeft').innerText = 'you have ' + total + ' task left'
    console.log('period')
}

// let deletingItem = li.addEventListener('click', deleteItem => {

//     if (delItemOnly.target.forTheList === 'ForTheList'){
//     let listItemToAdd = document.querySelector('#somethingToAdd').value
//     li.toggle('done')
//     console.log('period')
//     }
// })


function clearTheList(){
    const deleteIt = document.querySelectorAll('li')
    deleteIt.forEach(function(e){
        e.parentElement.removeChild(e);
    // deleteIt.forEach(function (deletingAll)
    // deleteIt.removeChi
    // )
    // let toBeDeleted = document.querySelectorAll('li').addEventListener('click', deletingIt =>{
    //     if (deletingIt.target.hide === 'hide'){
    //         l 
    //     }
    // } ) removeToDos.forEach(function(removeTodo){e.parentElement.removeChild(e);
    })
//clear every element that is a li 
//if button is clicked, delete every li, 
}


// let tasksToDo = document.querySelector('#tasksLeft')
// tasksToDo.addEventListener('click', whatListItemsAreLeft)

// function whatListItemsAreLeft(){
//     let whatIsLeft = 


//     document.querySelector('#tellsYouWhatsLeft').innerText = ' you have' + whatIsLeft
// }

console.log('truechainzz')


    //html- a ul and li
        //two buttons, one for adding tot he list, one for clearing an li
            //buttonOne- function that creates a new li, and inserts that li into the ul 
            //button2- function that removes li from a list
        //one input for the list. 
            //function- you can enter test, and rubs function for button1
//mark elements as complete, strike through?
    //function cssStyling, on when the li itself is clicked, it get sa strike through, (and it fades)
//you can clear the list 

// BONUS
//bonus-remove elements from the list




// leons code

//an input a button
    //document.querySelector('li').length
    // - .completed 
