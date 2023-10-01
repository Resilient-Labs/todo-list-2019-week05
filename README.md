# Simple To Do List

A simple, stylish, and interactive To Do List implemented with HTML, CSS, and JavaScript.

## Features

- **Add Tasks**: Click the "Add" button or type and hit Enter in the input field.
- **Mark Tasks as Completed**: Double-click any item inside our list to either cross it out or return it to normal.
- **Clear Input**: Click inside the "list" box to clear the input.
- **Clear All Tasks**: Click the "CA" button to remove all items from the list.
- **Clear Completed Tasks**: Click the "CC" button to remove only the crossed-out items from the list.

## How it Works

Here's a basic breakdown of the main functionalities:

1. **Add Tasks**: Click the "Add" button or type and hit Enter in the input field.
2. **Mark Tasks as Completed**: Double-click any item inside our list to either cross it out or return it to normal.
3. **Clear Input**: Click inside the "list" box to clear the input.
4. **Clear All Tasks**: Click the "CA" button to remove all items from the list.
5. **Clear Completed Tasks**: Click the "CC" button to remove only the crossed-out items from the list.

### Pseudo Code

Here's a brief idea of how each main function works:

- **addItem**: Looks at the input to check if you typed anything. If not, it alerts you to type something. Otherwise, it adds your input to the list and clears the input box.
- **clearInputOnFocus**: Empties the input box.
- **pressEnter**: If the Enter key is pressed, it performs the same action as the 'addItem' function.
- **markItemAsComplete**: Checks if you double-clicked a list item. If yes, it toggles its state (crosses it out or uncrosses it).
- **clearCompleted**: Looks for all crossed-out items and removes them from the list.
- **clearAll**: Removes all items from the list.

## Styling

All styling was sourced from two Codepen designs:

- [Design 1 by Johan Alkstal](https://codepen.io/johanalkstal/pen/AavgNz)
- [Design 2 by Bees](https://codepen.io/beeeees/pen/AJBjKR)

## Setup

To use this Todo List:

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Enjoy your interactive To Do List!
