// create variables for elements needed in html
let items = document.querySelector('#inputItems')
let addButton = document.querySelector('#addButton')

// go into document and on click of button, run function that adds users input into ordered list
document.querySelector('button').addEventListener('click', addToList)

// create function which takes the users input text and displays it in the ul
// grab input = items, create li const and display innertext the input items = item.value(function addToList runs after pressing line 6)

function addToList() {
    const li = document.createElement('li')
    li.innerText = items.value 
    ul.appendChild(li)
}

// function where you can toggle a strike through on the list items 
// my attempt 
// document.querySelector('li').on('dblclick', strike) 
// function strike(){
//             li.toggleClass('strike').fadeOut('slow')  
// }

//function where you can toggle a strike through on the list items - code taken from stack overflow https://stackoverflow.com/questions/44516905/strike-through-on-click 
// $(document).ready(
//     function(){
//         $('#button').click(
//             function(){
//                 var toAdd = $('input[name=ListItem]').val();
//                  $('ol').append('<li>' + toAdd + '</li>');
//             });
       
//        $("input[name=ListItem]").keyup(function(event){
//           if(event.keyCode == 13){
//             $("#button").click();
//           }         
//       });
      
//       $(document).on('dblclick','li', function(){
//         $(this).toggleClass('strike').fadeOut('slow');    
//       });
      
//       $('input').focus(function() {
//         $(this).val('');
//       });
      
//       $('ol').sortable();  
      
//     }
// );