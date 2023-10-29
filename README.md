# To-Do list
This is a to-do list that will generate a list based on user input. Once you are done with the task you can click it to remove it. If you are done for the day, click "done for the day" button to clear the entire list.

## How it's made:
Tech used: HTML, CSS, JavaScript

I created an event listener to record the user's input once they add a task. The space to record the user's input is an ordered list. Then through the appendChild method I added a list element to hold the values of the user's input (each list item). In the CSS file, I added a class to remove elements with display: none. Through Javascript, I created an event listener to remove tasks each time a list element was clicked to remove the task. In order to unite the class for display:none to list element, I used the target tagName property to add the CSS class onto the list item. Lastly, I created another button with an event listener to clear all tasks once the user is done for the day.

## Lessons Learned: 
Even if elements don't exist permanently in the HTML file (the list elements based on user input), they can always be accessed. In this case, I couldn't target the list <li> element explicitly, but I was able to target the parent <ol> element and add a class through the tag name.