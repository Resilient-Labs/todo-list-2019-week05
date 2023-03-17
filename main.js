document.querySelector("#btn").addEventListener('click', ()=>{ //function without name
    let userInput = document.querySelector("#input").value
    document.querySelector("#ul").innerHTML += `<li id='listItem'>${userInput} </li>`
    getCount()

    document.querySelectorAll('#listItem').forEach(item=>{
        item.addEventListener('click', complete)
    })

    document.querySelector("#input").value = ""

    document.querySelector('#clearAll').addEventListener('click', clearAll)
    document.querySelector('#clearCompleted').addEventListener('click', clearCompleted)
    
    })
    


function clearAll(){
    document.querySelector("#ul").innerHTML = ''
    getCount()

}

function clearCompleted(){
    document.querySelectorAll('.complete').forEach(item=>{ 
        item.remove()
        

    } )
    getCount()

}


function complete(e){
    //get the event information
    // add the css class called complete to the LI the user clicked
    //this will make the LI crossed out and change it's background color 
    e.target.classList.add('complete')
}

function getCount(){
    let count = 0
    document.querySelectorAll('li').forEach(item=>{
        count++
 })
    document.querySelector('#count').innerHTML = count
}
