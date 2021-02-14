// this is an unfinished frankenstein monster composed of githun, mdn and random google teachings

const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");

const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const renewBtn = document.querySelector(".renew");
const clearBtn = document.querySelector(".clear");







//event listener for input to add new todo to the list.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //creating lists and span when enter is clicked
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");

    var newTodo = this.value;
    this.value = " " ;

    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);

    deleteTodo();

    }

});

// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);


//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});
