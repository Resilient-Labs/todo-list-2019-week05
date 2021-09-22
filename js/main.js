let formInput = document.querySelector('.form-input');
let formButton = document.querySelector('.form-button');
let formButtonTwo = document.querySelector('.form-button2');
let listUl = document.querySelector('.list-ul');

formButton.addEventListener('click', addToList);
formButtonTwo.addEventListener('click', listClear);
listUl.addEventListener('click', listDel);
listUl.addEventListener('click', listCheck);

function addToList(event){
    event.preventDefault();

    if(formInput.value.length === 0){
        document.querySelector('h2').innerText = "ENTER VALID INPUT!"
        return;
    }

    document.querySelector('h2').innerText = ""

    const listSection = document.createElement('section');
    listSection.classList.add('list-section')

    const listLi = document.createElement('li');
    listLi.innerText = formInput.value;
    listLi.classList.add('list-li');
    listSection.appendChild(listLi);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    listSection.appendChild(trashButton);

    listUl.appendChild(listSection);

    formInput.value = "";
}

function listDel(event){
    const targetDel = event.target;

    if(targetDel.classList[0] === "trash-btn"){
        const sectionDel = targetDel.parentElement;
        sectionDel.remove();
    }
}

function listCheck(event){
    const targetCheck = event.target;

    if(targetCheck.classList[0] === "list-li"){
        const sectionCheck = targetCheck.parentElement;
        sectionCheck.style.textDecoration = "line-through";
    }
}

function listClear(event){
    // if(formInput.value.length === 0){
    //     document.querySelector('h2').innerText = "ENTER VALID INPUT!"
    //     return;
    // }
    const targetClear = event.target;

    if(targetClear.classList[0] === "form-button2"){
        listUl.removeChild(listSection)
    }
}

