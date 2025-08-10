// notes globally saved
        
let notes = [];   //starting notes
let trashNotes = [];    // where deleted notes go

function init() {
    getFromLocalStorage();    //local storage notes 
    getFromLocalTrash();      // local storage trashnotes 
    renderNotes(); 
    renderTrashNotes();
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


// adding notes possible; check inputfield for content; add content in notes array; display content

function addNote() {
    let noteInputRef = document.getElementById('note_Input');
    let noteInput = noteInputRef.value;  // why the extra step? more clearence and easier to unterstand

    if (noteInput != "") {
        notes.push(noteInput);
    }
    saveToLocalStorage();
    renderNotes();

    noteInputRef.value = "";
}

// deleting notes possible;  which note gets deleted;  when gets the note deleted;  update current notes;

function pushToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1)
    trashNotes.push(trashNote[0]);
    saveToLocalTrash();
    renderTrashNotes();
    renderNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderTrashNotes();
    renderNotes();
}


// archive notes to local storage

function saveToLocalStorage() {
    localStorage.setItem("Notes", JSON.stringify(notes));
}

function saveToLocalTrash() {
    localStorage.setItem("TrashNotes", JSON.stringify(trashNotes));
}

// get notes from local storage

function getFromLocalStorage() {
    let myNotes = JSON.parse(localStorage.getItem("Notes"));
    if (myNotes != null) {
        notes = myNotes;
    } else if (myNotes = null) {
        notes != myNotes;
    }
}

function getFromLocalTrash() {
    let myTrash = JSON.parse(localStorage.getItem("TrashNotes"));
    if (myTrash != null) {
        trashNotes = myTrash;
    } else if (myTrash = null) {
        trashNotes != myTrash;
    }
}



