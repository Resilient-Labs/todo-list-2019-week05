//build three slots
    const slotOne = document.querySelector('.slotOne')
    const slotTwo = document.querySelector('.slotTwo')
    const slotThree = document.querySelector('.slotThree')

    const playerFunds = document.querySelector('#userMoney')
    const betAmount = document.querySelector("#betamount")

//have a starting variable for the user's initial amount of $1000
let userMoney = 1000


//assign each slot five different values
let slotOptions = ['red', 'blue', 'yellow', 'purple', 'teal'] 

//make an event listener that will run a function when user submits an input

document.querySelector('#playSlots').addEventListener('click', playbutton); //submit button, run function pullSlot

//create function to randomly choose a value for the user
function playbutton() {
    for(let i = 0; i<3; i++) {
        let randomNumber = Math.floor(Math.random() * slotOptions.length)
        if (i == 0) {
            slotOne.style.backgroundColor=slotOptions [randomNumber]
        }
        else if (i == 1) {
            slotTwo.style.backgroundColor=slotOptions [randomNumber]
        }
        else {
            slotThree.style.backgroundColor=slotOptions [randomNumber]
        }
    }
    checkMoney()

}

function checkMoney() {
    if (slotOne.style.backgroundColor == slotTwo.style.backgroundColor && slotTwo.style.backgroundColor == slotThree.style.backgroundColor){
        playerFunds.innerText = userMoney += betAmount.value * 10
    } else {
        playerFunds.innerText = userMoney -= betAmount.value

    }

}
   /* return getRandomIntInclusive(1, 5)//I think.
        min = Math.ceil(1);
        max = Math.floor(5)
    /*
    value one
    value two
    value three
    value four
    value five*/

//relay that value back to the console.log
//each of those values connect to the user's total amount

//include an 'if' function that when the three slot values match, the user's money amount is multiplied by 10