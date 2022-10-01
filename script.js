// sorry but this gave me so much grief to do T_T i had a breakdown trying to do it.....worked with joshua findLAY! and leonard constant. the kings. 


document.querySelector('.addtolist').addEventListener('click', addToList)
document.querySelector('.clearlist').addEventListener('click', clearList)
document.querySelector('.clearcompleted').addEventListener('click', clearCompleted);

if(put.value !== ''){
   document.querySelector('span').innerText = Number(document.querySelector('span').innerText)+1
}

function addToList(e) {
    e.preventDefault();
    let typedIn = document.querySelector("input").value;
    let tasksLeft = document.querySelectorAll("li").length;
    let tasksTotal = document.querySelectorAll(".crossthrough").length;
    const li = document.createElement("li");
  
    if (document.querySelector('input').value === "") {
        alert('You need to put in a task')
    }

    else {

        li.innerText = typedIn;
        document.querySelector(".groceries").appendChild(li);
        document.querySelector("span").innerText =
        tasksLeft - tasksTotal;
        
        li.addEventListener("click", () => {
        li.classList.toggle("crossthrough");
        tasksLeft = document.querySelectorAll("li").length;
        tasksTotal = document.querySelectorAll(".crossthrough").length;
        document.querySelector("span").innerText =
        tasksLeft - tasksTotal;
        });
    }
  }
  function clearList() {
    document.querySelectorAll("li").forEach((li) => {
      li.remove();
    });
  }
  function clearCompleted() {
    document.querySelectorAll(".crossthrough").forEach((li) => {
      li.remove();
    });
  }
