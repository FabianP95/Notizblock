function getNoteTemplate(indexNote) {
    return `<p>+  ${notes[indexNote]}<button onclick="pushToTrash(${indexNote})">X</button></p>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`
}