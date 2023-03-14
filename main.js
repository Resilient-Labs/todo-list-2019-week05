document.querySelector("#btn").addEventListener('click', ()=>{ //function without name
    let userInput = document.querySelector("#input").value
    document.querySelector("#ul").innerHTML += `<li><span class="item">${userInput}</span> <span id="x" class="x">X</span></li>`

    document.querySelectorAll("#x").forEach(item=>{
        item.addEventListener('click', deletLI)
    })

    document.querySelector("#input").value = ""
    
})


function deletLI(e){
    //get the event information
    // delete the parentNode which is the Li
    e.target.parentElement.remove()
}
