# My To-Do List
I sought to make a simple to do list with simple mechanics that would allow someone to add todos, strike them through by checking a box to show they were completed, uncheck those same input check boxes if they wanted to undo completing a task while removing the strike through, and having a clear all button that would wipe the list and make it blank again. 

### What I did to build this app:
I used HTML, a little CSS, and JavaScript to complete this app.

I wanted to have the buttons perform one action: one button would create new list items from a user's input and show them as tasks to do. The new list items created by this first button would then have a check box appended to them to allow a user to check them off. This would allow users to show a to-do item (a.k.a an li) was completed by clicking on the checkbox and also activate a function I wrote that would also let them toggle whether a to do was completed or not.

The second "Clear All" button was established to delete all task items present on the list (whether they were checked off or not). 

### Lessons Learned :
- I had some trouble with the toggling of items as "complete" using the checkboxes. In other words, the checkboxes would click and strike through the text present in each to-do list item but when clicked again the "line-through" style I added to each li would not disappear. I had to go through some research and look up the ".checked" property, and set it to the class belonging to the checkboxes, within a conditional with the boolean value of true. This proved to be a simple solution that I was glad to find toggled the line-through style in tandem with a checkbox being in "checked" status or not.
- I also learned about event handling with this project and that there is a way to prevent some elements from behaving their default way using .preventDefault().
- I learned to implement more debugging practices such as using console.log within my functions/conditionals. I also found adding comments was useful although I could be more concise with those comments.

