//User should be able to add items to the list
//User should be able to track the number of things they have left to do
//User should be able to remove all items from the List and delete entire lists
//User should be able to check of each item completed on the list
//User should be able to remoce indivual items on a list
//User should be able to create new lists and switch between different lists
// function turnNodeListIntoArray(nodelist) {
//   return Array.prototype.slice.call(nodelist)
// }

const item = [];

const addTask = document.getElementById('addTask')
//this function tracks user's input
addTask.addEventListener('click', function (){
  let itemUpdate = document.getElementById('item').value
  item.push(itemUpdate)
  document.getElementById('list').innerHTML = item
  console.log(item);
})


// let item;
// alert('hi');
// let addTask = document.querySelector('#addTask')
// function add(){
//     addTask.addEventListener('click', function(){
//       alert('hi')
//     item = document.querySelector('#item')
//     event.target.id
//     updates = event.target.id
//     document.getElementById('list').innerHTML = item
//     alert ('hi');
//     console.log(addTask);
//     console.log('click');
//     console.log('list');
//     console.log('addTask');
//
//   })
//   console.log(item);
//   console.log(addTask);
//   console.log('click');
//   console.log('list');
//   console.log('addTask');
// }
//
// addTask('hey')
