document.getElementById('enterBtn').addEventListener('click', addItem);
document.getElementById('clearItems').addEventListener('click', clearCompleted);
document.getElementById('clearBtn').addEventListener('click', clearAll);

const ul = document.getElementById('items');
const form = document.getElementById('form');
const input = document.getElementById('input');
//prevents the form from refreshing the page after submit
function taskForm(event){event.preventDefault();
form.addEventListener('submit', taskForm);
}

function crossOut(event){
  let li = event.target;
  if (li.className == "crossOut"){
    li.className = "";
  }else{
    li.className = "crossOut";
  }
}
// L32 shows what happens when li clicked and L14 targets it. assigned a class

function addItem(){
  let li = document.createElement('li');
  console.log("this is the li", li);
  let liTxt = document.createTextNode(input.value);
  // console.log("this foo", liTxt);
  li.appendChild(liTxt);
  // console.log('this is the ul', ul);
  ul.appendChild(li);
  // console.log('input value!', input.value);
  li.addEventListener('click', crossOut);
}
//li.appendChild(document.createTextNode("input.value"));
//ul.appendChild(li); shorter way but above is deconstruction

// form.addEventListener('submit', addItem);

function clearAll(){
  ul.innerHTML = "";
}

function clearCompleted(){
  var children = ul.childNodes;
  console.log(children);
  for (var child of children) {
    if(child.className == "crossOut"){
    ul.removeChild(child);
    }
  }
}
// L44 creates list/array L46 loops through array
addItem(); //needed to add li to the HTML - line 29
