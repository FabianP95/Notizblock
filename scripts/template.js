function getNoteTemplate(indexNote) {
    return `<section class="note_design">
        <nav class="nav_buttons">
            <button class="btn" onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')">A</button>
            <button class="btn" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">T</button>
        </nav>
        <p>${allNotes.notes[indexNote]}</p>
    </section>`
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `<section class="note_design">
        <nav class="nav_buttons">
            <button class="btn" onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')">N</button>
            <button class="btn" onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')">T</button>
        </nav>
        <p>${allNotes.archiveNotes[indexArchiveNote]}</p>
    </section>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<section class="note_design">
        <nav class="nav_buttons">
            <button class="btn" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">N</button>
            <button class="btn" onclick="deleteNote(${indexTrashNote})">D</button>
        </nav>
        <p>${allNotes.trashNotes[indexTrashNote]}</p>
    </section>`
}