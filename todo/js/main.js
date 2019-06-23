  let add = document.querySelector('.add').addEventListener('click', ()=>{
    let item = document.querySelector('#item').value;
    //gets the value from input
    let li = document.createElement("li");
    //creates li to be appended to ul
    var text = document.createTextNode(item);
    //creates text to append to li
    li.appendChild(text);
    //puts text in li
    document.getElementById("list").appendChild(li);
    //add li to list
  })
  let clear = document.querySelector('.clear').addEventListener('click', ()=>{
    let list = document.querySelector('#list')
    //set list variable to match list id in HTML

    while (list.hasChildNodes()) {
      //.hasChildNodes() checks to see if list has li(s)
      list.removeChild(list.firstChild);
      // this while loops and deletes each item one by one from the top of the list down
      }
  })
  let removeCompleted = document.querySelector('.remove').addEventListener('click', ()=>{
    let comp = document.getElementsByClassName('completed')
    //creates an array of all things with the class name completed
    let i = 0;
    while ( i < comp.length) {
      // cycles through the array and display nones those elements with the class name completed
      comp[i].style.display = 'none'
      //display none element
      i++;
    }

  })
  let list = document.querySelector('#list')
  list.addEventListener('click', function(tag) {
    if (tag.target.tagName === 'LI') {
      // checks to see if the thing being clicked is an li
      tag.target.classList.toggle('completed');
      //toggles the class name of completed on and off li
      }
    }, false);
