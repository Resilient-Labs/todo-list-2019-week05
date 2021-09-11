document.getElementById('list').addEventListener('click', completed);
document.getElementById('remove').addEventListener('click',getRid);
document.getElementById('clear').addEventListener('click', EraseAll);
let ul = document.getElementById("list")
let count = 0 
document.getElementById('count').innerHTML=count; 

function getInputValue(event){
	// Selecting the input element and get its value
	let inputVal = document.getElementById("myInput").value

	let li = document.createElement("li")
	li.appendChild(document.createTextNode(inputVal));
	ul.appendChild(li);
	count += 1; 
	document.getElementById('count').innerHTML = count; 
	event.preventDefault(); 
}

// function enter(event){    		// for when enter is presssed
// 	if(event.keycode ===13 ){
// 		addEventListener('keydown',getInputValue)
// 	}
// }

function completed(event){  		 // for when it is completed 
	// console.log(event)
	event.target.style.color = "grey";
	event.target.style.textDecoration = "line-through"
	// if there is an li and it's clicked on cross out
	count -= 1; 
	document.getElementById('count').innerHTML = count; 

  }

function getRid(){  
	// console.log("hello");
	// console.log(ul)	
	console.log(ul.childNodes)
	

	//target childnodes with text-decoration line-through and remove 

	
	ul.childNodes.forEach((node) => {
		console.log(node.style)
		if (node.style.textDecoration === "line-through"){
			node.style.display = "none"; 
			count -= 1; 
			document.getElementById('count').innerHTML = count; 
		}
	})

	// pressing remove, we want to clear crossed out items 
  }

  function EraseAll(){	
	while(ul.firstChild){
		ul.removeChild(ul.firstChild);
	}
	count = 0; 
	document.getElementById('count').innerHTML = count; 
}




//note to self: space between uls will create added node 