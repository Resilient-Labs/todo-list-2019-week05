document.querySelector('#button').addEventListener ('click', list)

document.querySelector('#list').addEventListener ('click', line)


function list(){
// console logs the value inputed
    let uno=document.querySelector('#uno').value
    console.log(uno)
// creartes an element (li)
    let li=document.createElement('li')
    // create a textnode that goes in li
    let text=document.createTextNode(uno)
// next step add text into li using append child
// we are throwing input (that is in the variable text) inside of this li that was previously empty
    li.appendChild(text)
    // throw the value of li inside of ul (throw invisible newly existing li inside of pre-existing ul)
    let ul=document.querySelector('#list')
    ul.appendChild(li)
}
    function line(click){
       click.target.classList.toggle('hidden') 
    
}


// // alex docanto, william sanchez and i worked on this one togethe