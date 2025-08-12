function getNoteTemplate(indexNote) {
    return `<section class="note_design">
        <nav class="nav_buttons">
            <button class="btn" onclick="NotesToArchive(${indexNote})">A</button>
            <button class="btn" onclick="NotesToTrash(${indexNote})">T</button>
        </nav>
        <p>${notes[indexNote]}</p>
    </section>`
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `<section class="note_design">
        <nav class="nav_buttons">
            <button class="btn" onclick="ArchiveToNotes(${indexArchiveNote})">N</button>
            <button class="btn" onclick="ArchiveToTrash(${indexArchiveNote})">T</button>
        </nav>
        <p>${archiveNotes[indexArchiveNote]}</p>
    </section>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<section class="note_design">
        <nav class="nav_buttons">
            <button class="btn" onclick="TrashToNotes(${indexTrashNote})">N</button>
            <button class="btn" onclick="deleteNote(${indexTrashNote})">D</button>
        </nav>
        <p>${trashNotes[indexTrashNote]}</p>
    </section>`
}