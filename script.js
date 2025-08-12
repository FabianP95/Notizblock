// notes globally saved

let notes = [];   //starting notes
let trashNotes = [];    // where deleted notes go
let archiveNotes = [];

function init() {
    getFromLocalStorage();    //local storage notes
    getFromLocalArchive();
    getFromLocalTrash();      // local storage trashnotes 
    renderNotes();
    renderArchiveNotes();
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

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";
    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}

// need to add archive functionality from here on, check code beforehand -> debugger
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

function NotesToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1)
    trashNotes.push(trashNote[0]);
    saveToLocalTrash();
    saveToLocalStorage();
    renderTrashNotes();
    renderNotes();
}

function NotesToArchive(indexNote) {
    let archiveNote = notes.splice(indexNote, 1)
    archiveNotes.push(archiveNote[0]);
    saveToLocalArchive();
    saveToLocalStorage();
    renderArchiveNotes();
    renderNotes();
}

function TrashToNotes(indexTrashNote) {
    let note = trashNotes.splice(indexTrashNote, 1)
    notes.push(note[0]);
    saveToLocalStorage();
    saveToLocalTrash();
    renderNotes();
    renderTrashNotes();
}


function ArchiveToTrash(indexArchiveNote) {
    let trashNote = archiveNotes.splice(indexArchiveNote, 1)
    trashNotes.push(trashNote[0]);
    saveToLocalTrash();
    saveToLocalArchive();
    renderTrashNotes();
    renderArchiveNotes();
    
}

function ArchiveToNotes(indexArchiveNote) {
    let note = archiveNotes.splice(indexArchiveNote, 1)
    notes.push(note[0]);
    saveToLocalStorage();
    saveToLocalArchive();
    renderNotes();
    renderArchiveNotes();
}



function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    saveToLocalTrash();
    renderTrashNotes();
    
}



// archive notes to local storage

function saveToLocalStorage() {
    localStorage.setItem("Notes", JSON.stringify(notes));
}

function saveToLocalTrash() {
    localStorage.setItem("TrashNotes", JSON.stringify(trashNotes));
}

function saveToLocalArchive() {
    localStorage.setItem("ArchiveNotes", JSON.stringify(archiveNotes));
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

function getFromLocalArchive() {
    let myArchive = JSON.parse(localStorage.getItem("ArchiveNotes"));
    if (myArchive != null) {
        archiveNotes = myArchive;
    } else if (myArchive = null) {
        archiveNotes != myArchive;
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



