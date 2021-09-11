// pass input into ul by clicking the add to list button 

// clear the entire list from the ul when clicking the clearlist button 

// show complete in ul... when you click clear completed button clears from the ul 

// running count for how many todos you have left. 




document.querySelector("#add").addEventListener("click",addList)
document.querySelector("#clearL").addEventListener("click", clearList)
document.querySelector("#clearC").addEventListener("click", completed)
let counter=0

const ul= document.querySelector("ul")
ul.addEventListener("click", greyout)

function addList(){
   let input = document.querySelector("#input").value
   counter++
   let span = document.querySelector("span")
   span.innerText = counter
   console.log(input)
   let list = document.createElement("li") 
   list.appendChild(document.createTextNode(input))
   ul.appendChild(list)
   document.querySelector("input").value = ""
}

function clearList(){
    document.querySelectorAll("li").forEach(element => element.remove());
    let li = document.querySelectorAll("li")
     console.log(li)
     
     for(let i = 0; i < li.length;i++)
{
    ul.element.remove(li[ul])

}  
    counter-=li.length
  let span = document.querySelector("span")
   span.innerText = counter.innerHtml = 0
}

function greyout(e){
   
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("grey")
    } 
}

function completed(){
    
    let li = document.querySelectorAll(".grey")
     console.log(li)
     
     for(let i = 0; i < li.length;i++)
{
    ul.removeChild(li[i])

}  
    counter-= li.length
  let span = document.querySelector("span")
   span.innerText = counter
}




