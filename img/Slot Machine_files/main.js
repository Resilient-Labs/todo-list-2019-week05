const bet5 = document.querySelector('#bet5')
const bet50 = document.querySelector('#bet50')
let spinResult = document.querySelector('#result') //win/lose
let cashAmount = document.querySelector('#cash') //bank after deductions
let bank = 5000
const imgArray = ["7.avif" , "bar.png" , "cherry.jpeg" , "diamond.png" , "horseshoe.avif",] 
let slotResult1 = document.querySelector('#slot1')
let slotResult2 = document.querySelector('#slot2')
let slotResult3 = document.querySelector('#slot3').src
console.log(slotResult1, slotResult2, slotResult3)

function spinMin(){
  document.querySelectorAll('.slot').forEach((images) => {
  const randomNum = Math.ceil(Math.random() * imgArray.length - 1) 
  const finalImage = imgArray[randomNum]
  console.log(finalImage)
  images.src = 'img/' + finalImage //concatenate because theyre both strings and changes the empty source in the html 
}) 
}

function spinMax(){
  document.querySelectorAll('.slot').forEach((images) => {
  const randomNum = Math.ceil(Math.random() * imgArray.length - 1) 
  const finalImage = imgArray[randomNum]
  console.log(finalImage)
  images.src = 'img/' + finalImage
})

}


function checkWin(){

}

//if all 3 === display you win! and multiply count by 10
//if all 3 not equal - display u got got and -5 or -50 



bet5.addEventListener('click', spinMin)
bet50.addEventListener('click', spinMax)

