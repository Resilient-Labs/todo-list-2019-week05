
const slotOne = document.querySelector('#slotOne')
const slotTwo = document.querySelector('#slotTwo')
const slotThree = document.querySelector('#slotThree')
const minButton = document.querySelector('#minButton')
const maxButton = document.querySelector('#maxButton')
const counter = document.querySelector('#count')

// let symbols = ['7️⃣', '❤️', '⭐', '♠️', '💎']
let symbols = ['7', 'i', '8', '0', 'd']


minButton.addEventListener('click', getRandomSymbol)
maxButton.addEventListener('click', getRandomSymbol)

// Generates a random symbol
function getRandomSymbol(symbols) {
    let count = 0
    let random = Math.floor(Math.random() * symbols.length)

    slotOne.innertext = symbols[random]
    slotTwo.innertext = symbols[random]
    slotThree.innertext = symbols[random]

        if (slotOne.innertext === slotTwo.innertext && slotTwo == slotThree.innertext) {
            alert ('YOU WON') 
            count = + 50
        }
        else if (slotOne.innertext !== slotTwo.innertext !== slotThree.innertext) {
            alert ('LOSER')
            count = - 50
        }

        counter.innertext = count
}
