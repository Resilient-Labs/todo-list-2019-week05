

//querySelect add btn
let addBtn = document.querySelector('#addNote');
let title = document.querySelector('#title');
let text = document.querySelector('#note-text');

//Wanted to be able to save notes after refresh.
//Adds Your note to local storage when clicked on button
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //if title and textarea are empty alert user
    if (title.value == '' || text.value == '') {
        return alert('Please add a title and details')
    }
    //gets notes from local storage by keyName if keyName = null return empty array
    //otherwise parse notes object thats being pushed from myObj below and saves to local staorage
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    //varible object holding the value of the title and textarea
    let myObj = {
        title: title.value,
        text:text.value }

        //push the varible object to the empty array
        //Sets the object in local storage for access
        //then clears the value of title and text
        notesObj.push(myObj);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        title.value = '';
        text.value = '';
        //function that shows the notes you've added
        showNotes();
})
// Show notes on the page
function showNotes() {
    //grabs note object from local storage
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    //empty string for displaying notes
    let html = '';
    //function grabbing the notes object with title and text attribute
    //then looping using forEach thru the object and grabbing the element and index
    //the number of notes will be display as well as title and text you enter in form
    notesObj.forEach(function(element, index) {
        html += `
        <div id='note' class='notes'>
        <p class='note-number'>Note ${index + 1}</p>
        <h3 class='note-title'>${element.title}</h3>
        <p class='note-text'>${element.text}</p>
        <button id='${index}' onclick ="deleteNote(this.id)" class='note-btn'>Delete Note</button>
        <button id='${index}' onclick ="editNote(this.id)" class='note-btn edit-btn'>Edit Note</button>
        </div>
        `;

    });
    //grabs notes and sets the html to the html above ^
    let noteEle = document.querySelector('#notes');
    if (notesObj.length != 0) {
        noteEle.innerHTML = html
    } else {
        noteEle.innerHTML = 'No Notes Yet! Add a note using the form above'
    }

}

//function for deleting each note
//passing in index argument for the number of notes that've been added
function deleteNote(index) {
    //when button is clicked confirm will show displaying message
    let delConfirm = confirm('You are about to delete this note')
    if (delConfirm == true) {
        //if yes to deleting note, get the note from local storage
        let notes = localStorage.getItem('notes');
        if(notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        //starting with the index argument given, where splicing our object by 1
        //removing the note we clicked on
        notesObj.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        showNotes();
    }
}
//function for editing note
function editNote(index) {
    let notes = localStorage.getItem('notes');
    //alert asking if you want edit string
    if (title.value !== "" || text.value !== "") {
        return alert('Please clear the form before editing a note');
    }
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    //gets the index of the clicked on note and add new value to text and title
    //into html above
    notesObj.findIndex((element, index) => {
        title.value = element.title;
        text.value = element.text;
    })
    //add edited note back to note list
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    
}
showNotes();