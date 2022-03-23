const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notes) {
  
    function createNoteId () {
        // create unique id for new note
        let uniqueId = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16).substring(1);

        return uniqueId;
    }

  const note = body;
  note.id = createNoteId();

  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  
  return note;

} // end function createNewNote


module.exports = {
  findById,
  createNewNote
};
