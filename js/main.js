let formInput = document.getElementById('todoForm') //grabbing id's from the HTML to use for JS
let bttnInput = document.getElementById('buttonEnter')
let bttnClear = document.getElementById('buttonClear')
let bttnClearComplete = document.getElementById('buttonClearComplete')
let ol = document.getElementById('list') //grabs to-do list; the 'ol'

bttnInput.addEventListener('click', taskEnter) //button for logging text
formInput.addEventListener('submit', taskEnter) //allows user to use 'Enter' key to log text
bttnClear.addEventListener('click', taskClear) //clears entire list
bttnClearComplete.addEventListener('click', taskClearComplete) //clears text with line-through (completed task)
ol.addEventListener('click', function(e){ //toggles the strikethrough on text 
    if (e.target.tagName==='LI')//tip-sometimes the browser (e) capitalizes the tagName
    {
        e.target.classList.toggle('taskComplete')//targets the 'li' and either adds or removes class 'taskComplete'
    }
}) 

function taskClear()
{
    formInput.reset()
    ol.innerHTML = ''
}

function taskClearComplete(e)
{
    formInput.reset()
    let completedTask = ol.querySelectorAll('.taskComplete') //selects all 'ol' with the class .taskComplete (given by toggling in line 14)
    for (let i = 0; i < completedTask.length; i++)
    {
        let li = completedTask[i] //this is the 'li' in the list that has a line-through (completed task)
        ol.removeChild(li)
    }
}

function taskEnter(e)//eventObject; gives info about what event a user has called
//this is called an anonymous function; doesn't have a name; runs immediately 
{
    console.log(e)
    e.preventDefault()//stops the page from refreshing when form is submitted
    let taskInput = document.getElementById('inputHere').value //grabs user input
    if (taskInput === '')
    {
        return
    }
    let li = document.createElement('li') //creates an li in JS
    let text = document.createTextNode(taskInput) //converts tasks input (taskInput) into HTML text
    li.appendChild(text) //throws the user (text) into the li from JS
    ol.appendChild(li) //throws the li into the ol to be read in the HTML
    if (taskInput != '')
    {
        formInput.reset()
    }
}

//OLD ATTEMPT
// let bttnInput = document.getElementById('buttonEnter')
// let bttnClear = document.getElementById('buttonClear')
// let bttnClearComplete = document.getElementById('buttonClearComplete')
// let taskInput = document.getElementById('inputHere')
// let taskLog1 = document.getElementById('holdTask1')
// let taskLog2 = document.getElementById('holdTask2')
// let taskLog3 = document.getElementById('holdTask3')
// let taskLog4 = document.getElementById('holdTask4')
// let taskLog5 = document.getElementById('holdTask5')

// bttnInput.addEventListener('click', taskEvent)
// taskInput.addEventListener('keypress', taskEnter)
// bttnClear.addEventListener('click', taskClear)
// bttnClearComplete.addEventListener('click',taskClearComplete)
// taskLog1.addEventListener('click', taskComplete)
// taskLog2.addEventListener('click', taskComplete)
// taskLog3.addEventListener('click', taskComplete)
// taskLog4.addEventListener('click', taskComplete)
// taskLog5.addEventListener('click', taskComplete)

// function taskClear(taskClick)
// {
//     taskLog1.innerText = ''
//     taskLog2.innerText = ''
//     taskLog3.innerText = ''
//     taskLog4.innerText = ''
//     taskLog5.innerText = ''
//     if (taskClick.target.style.textDecoration == 'line-through')
//     {
//         taskClick.target.style.textDecoration = ''
//     }
// }

// function taskClearComplete(taskClick)
// {
//     if (taskClick.target.style.textDecoration != 'line-through')
//     {
//         return
//     }
//     else //if (taskClick.target.style.textDecoration == 'line-through')
//     {
//         taskLog1.innerText = ''
//         taskLog2.innerText = ''
//         taskLog3.innerText = ''
//         taskLog4.innerText = ''
//         taskLog5.innerText = ''
//         console.log('success')
//     }
// }

// function taskEnter(ele) 
// {
//     if(ele.key === 'Enter') 
//     {
//         taskEvent()       
//     }
// }

// function taskComplete(taskClick)
// {
//     // console.log(taskClick.target.innerText)
//     // console.log(taskClick.target.style)
//     if (taskClick.target.style.textDecoration == '')
//     {
//         taskClick.target.style.textDecoration = 'line-through'
//     }
//     else
//     {
//         taskClick.target.style.textDecoration = ''
//     }
// }

// function taskEvent()
// {
//     if (taskInput.value.trim() == '')
//     {
//         return
//     }
//     else if (taskLog5.innerText != '')
//     {
//         return
//     }
//     else if (taskLog4.innerText != '')
//     {
//         taskLog5.innerText = taskInput.value
//     }
//     else if (taskLog3.innerText != '')
//     {
//         taskLog4.innerText = taskInput.value
//     }
//     else if (taskLog2.innerText != '')
//     {
//         taskLog3.innerText = taskInput.value
//     }
//     else if (taskLog1.innerText != '')
//     {
//         taskLog2.innerText = taskInput.value
//     }
//     else
//     {
//         taskLog1.innerText = taskInput.value
//     }
//     taskInput.value = ''
// }

// <!--Greetings,loved ones.-->
// <!DOCTYPE html>
// <html lang="en">
// 	<head>
//   	<meta charset="utf-8">
//   	<meta name="description" content="Your description goes here">
//   	<meta name="keywords" content="one, two, three">
// 		<meta name="viewport" content="width=device-width, initial-scale=1">
		
// 		<title>TO-DO</title>

// 		<!-- external CSS link -->
// 		<link rel="stylesheet" href="css/normalize.css">
// 		<link rel="stylesheet" href="css/style.css">
// 	</head>
// 	<body>
// 		<div>
// 			<h1>MY "TO-DO" LIST</h1>
// 			<input id = "inputHere" type = "text" name = "" placeholder ="TASK?">
// 			<button id = "buttonEnter" type = "button">ENTER</button>
// 			<button id = "buttonClear" type = "button">CLEAR LIST</button>
// 			<button id = "buttonClearComplete" type = "button">CLEAR COMPLETED</button>
// 		</div>
// 		<div>
// 			<span>Click on the task to strike through</span>
// 			<ol>
// 				<li><span id ="holdTask1"></span></li>
// 				<li><span id ="holdTask2"></span></li>
// 				<li><span id ="holdTask3"></span></li>
// 				<li><span id ="holdTask4"></span></li>
// 				<li><span id ="holdTask5"></span></li>
// 			</ol>
// 		</div>

// 		<script type="text/javascript" src="js/main.js"></script>
// 	</body>
// </html>
