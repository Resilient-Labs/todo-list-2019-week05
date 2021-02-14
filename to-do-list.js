// 3 buttons, 1 input,  
// add whatever in the input  makes li

// crossing out function, when task is compleated
// change css display function
// each li 

function addListItem() {

    var list = document.getElementById("list");
    var li = document.createElement("li");
    var input = document.getElementById("input");
    li.addEventListener("click", e=> {e.target.className="listing" 
     answer()

  

 })


    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", e=> {
        e.target.className="listing" 
    })
// 

    list.appendChild(li);
    answer()

    console.log(input)
}
    

function completed(){
    
    document.querySelectorAll(".listing").forEach(element=> element.remove())

    document.querySelectorAll('[class = "listing"]').forEach(element=> element.remove())
    answer()


}

function clearAll(){
    var list = document.getElementById("list");
    while(list.firstChild){
        list.removeChild(list.firstChild)
      }
    
    answer()


}



 function answer(){
    var count = document.querySelectorAll("li").length
    var complete =  document.querySelectorAll(".listing").length
    document.querySelector("p").innerHTML ="need to complete " +(count - complete) ;




 }
// clear, clear all reset
// checking off to show what is done  and how much to go.