/* 
we need to create an li for whatever is typed into the input
*/

document.querySelector('#add').addEventListener('click', addList)
document.querySelector('ul').addEventListener('click', strike)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#clearcompleted').addEventListener('click', removecompleted)


let input = document.querySelector('#input')
let domul = document.querySelector('ul');


function addList(){
    if(input.value == ''){
        return
    }
    let newli = document.createElement('li');
    newli.appendChild(document.createTextNode(input.value));
    domul.appendChild(newli);
}

function strike(e){
    if ( e.target.tagName == 'LI'){
        e.target.classList.toggle('strikethrough');
    }
}
function clear(){
    document.querySelectorAll('li').forEach(element => element.remove());
}
function removecompleted(){
    document.querySelectorAll('.strikethrough').forEach(element => element.remove());
}