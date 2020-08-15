const n1 = document.querySelector('#input1');
const f1 = document.querySelector('#inputForm');
const clearAll = document.querySelector('#clearAll');
const ulElement = document.querySelector('#ulElement');
const inputForm = document.querySelector('#inputForm');
const clearChecked = document.querySelector('#clearChecked');
let listValue = n1.value.toString()

// class from traversy media homework video
class liMaker{
  constructor(text) {
    this.el = this.createLi(text);
    //---SAVING THIS FOR LEARNING PURPOSES---
    // const self = this;
    // this.el.addEventListener("click", function(){
    //   self.onClick();
    // });
    this.el.addEventListener("click", () => {
      this.onClick();
    });

  }
  // createElement from mdn
  createLi(text){
    let newLi = document.createElement('li')
    // newLi.className="task";
    // create checkbox type info from stack overflow
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';

    ulElement.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.innerHTML = `${newLi.innerHTML} <span class="toDo">${text}</span>`;
    return newLi;
  }
  onClick() {
    this.el.querySelector('input').setAttribute('checked',true);
    this.el.querySelector('.toDo').classList.toggle("finished");
    this.el.innerHTML = `${this.el.innerHTML} <span>done</span>`;
    // let done = [];
    // done.appendChild('.finished');
  }
};

function checker () {
  if (listValue !==""){
    const makerInstance  = new liMaker(listValue);
  }else{
    return;
  }
};
// mdn, more mdn, stack overflow, and random google websites
function removeChecked() {
  let badChild = ulElement.querySelectorAll('li');
  for (let i = 0; i < badChild.length; i++) {
    if (badChild[i].querySelector('input').getAttribute('checked') === 'true') {
      ulElement.removeChild(badChild[i]);
    }
  }
};

// keydown and reset from mdn
n1.addEventListener("keydown", event => {
  listValue = n1.value.toString();

  if (event.which === 13) {
  checker();
  inputForm.reset();
  }
});
inputForm.addEventListener("submit", (event) =>{
  event.preventDefault();
});
clearAll.addEventListener("click",removeAll => {
  ulElement.innerHTML = "";
});
clearChecked.addEventListener("click", event => {
  removeChecked()
});
