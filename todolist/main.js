var itemToAdd;
document.getElementById("submit").onclick = getItem;
document.querySelector("span").innerHTML = 0;

function getItem() {
  console.log('test');
  itemToAdd = document.getElementById("listItem").value;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(itemToAdd);
  node.appendChild(textnode);
  document.querySelector("ul").appendChild(node);
  document.querySelector("span").innerHTML = checkHowMany();
}
document.querySelector("ul").addEventListener('click', item => {

  /*events with the ul can be targeted in this case, if
 body had been selected instead of ul, the click
 listener would work on entire page*/

  let x = event.target;
  x.style.textDecoration= "line-through";
  document.querySelector("span").innerHTML = checkHowMany();
});
document.getElementById("clearAll").onclick = clearAllFunction;
function clearAllFunction(){
  let y = document.querySelectorAll("li");
  y.forEach(item => item.style.display = "none");
  document.querySelector("span").innerHTML = 0;
  }
document.getElementById("clear").onclick = clearDone;
function clearDone() {
  let z = document.querySelectorAll("li");
  z.forEach(item => {
    if (item.style.textDecoration =="line-through"){
      item.style.display = "none";
    }
  })
}

function checkHowMany(){
  let count = 0;
  let p = document.querySelectorAll("li");
  p.forEach(el => {
    if (el.style.textDecoration ===""  && el.style.display !== "none"){
      count++;
    }
  })
  return count;
}
