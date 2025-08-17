// notes globally saved


let notes = [];   //starting notes
let trashNotes = [];    // where deleted notes go
let archiveNotes = [];

let allNotes = {
    'notes': [],
    'trashNotes': [],
    'archiveNotes': [],
};


function init() {
    getFromLocalStorage();    //local storage notes
    getFromLocalArchive();
    getFromLocalTrash();      // local storage trashnotes 
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();

}


function moveNote(indexNote, startKey, destinationKey) {   // get key in object. one function for all movement because we move in the same object. startKey and destinationKey given to function
    let trashNote = allNotes[startKey].splice(indexNote, 1)
    allNotes[destinationKey].push(trashNote[0]);

    saveAllNotes();
    renderAllNotes();
}

function renderAllNotes() {
    renderTrashNotes();
    renderArchiveNotes();
    renderNotes();
}

function saveAllNotes() {
    saveToLocalArchive();
    saveToLocalTrash();
    saveToLocalStorage();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";
    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}

// need to add archive functionality from here on, check code beforehand -> debugger
// adding notes possible; check inputfield for content; add content in notes array; display content

function addNote() {
    let noteInputRef = document.getElementById('note_Input');
    let noteInput = noteInputRef.value;  // why the extra step? more clearence and easier to unterstand

    if (noteInput != "") {
        allNotes.notes.push(noteInput);
    }
    saveToLocalStorage();
    renderNotes();

    noteInputRef.value = "";
}

// deleting notes possible;  which note gets deleted;  when gets the note deleted;  update current notes;

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    saveToLocalTrash();
    renderTrashNotes();

}



// archive notes to local storage

function saveToLocalStorage() {
    localStorage.setItem("Notes", JSON.stringify(allNotes.notes));
}

function saveToLocalTrash() {
    localStorage.setItem("TrashNotes", JSON.stringify(allNotes.trashNotes));
}

function saveToLocalArchive() {
    localStorage.setItem("ArchiveNotes", JSON.stringify(allNotes.archiveNotes));
}

// get notes from local storage

function getFromLocalStorage() {
    let myNotes = JSON.parse(localStorage.getItem("Notes"));
    if (myNotes != null) {
        allNotes.notes = myNotes;
    } else if (myNotes = null) {
        allNotes.notes != myNotes;
    }
}

function getFromLocalArchive() {
    let myArchive = JSON.parse(localStorage.getItem("ArchiveNotes"));
    if (myArchive != null) {
        allNotes.archiveNotes = myArchive;
    } else if (myArchive = null) {
        allNotes.archiveNotes != myArchive;
    }
}

function getFromLocalTrash() {
    let myTrash = JSON.parse(localStorage.getItem("TrashNotes"));
    if (myTrash != null) {
        allNotes.trashNotes = myTrash;
    } else if (myTrash = null) {
        allNotes.trashNotes != myTrash;
    }
}



