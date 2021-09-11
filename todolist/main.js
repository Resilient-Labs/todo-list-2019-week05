//add event listener for when user submits item to list
document.querySelector('#buttontask').addEventListener('click', addTask)

function addTask(e) {
    e.preventDefault();
	const task = document.querySelector('#tasks').value
    if (task.trim().length >0) {
        console.log('to do task list')
        console.log(task);
        const newLi = document.createElement('li');
        newLi.innerText = task
        document.querySelector('#tasksToComplete').appendChild(newLi) //waits for the event listener to call the function
        //and creates the li

        document.querySelector('#tasks').value = ''; //grabs input field again and resets the value of the input field

        newLi.addEventListener('click', () => { //takes the li created by the js 
            const completeLi = document.createElement('li'); //create new li
            completeLi.innerText = newLi.innerText //adds text (" line 12, grabbing the text from the li created by the first function)
            document.querySelector('#completedList').appendChild(completeLi) //grab the completed li text
            console.log(newLi);
            newLi.parentNode.removeChild(newLi) //access the tasksToComplete ul. accesses the parent; uses this reference
            //to run the removeChild to take away the completed Li
        })
    }   
}

  /*  text,
  checked: false,
  id: Date.now(),
  };
  
  tasksToComplete.push(task);
  console.log(tasksToComplete);*/


//make function to take user submission and add value to the list via the console.log <-- event.preventDefault (stop page refresh)


   

//user ability to select elements and mark as complete.

/*
document.querySelector('.taskOne').EventListener('click',);
document.querySelector('.taskTwo').EventListener('click', );
document.querySelector('.taskThree').EventListener('click,);

//event listener 'click' for user to mark task as finished and move to completed list
/*function completeTask(){
    if completeTask = 
}*/


//completed items marked on display
console.log('.completedList')

//include toggle for users to move items between tasks <-- 