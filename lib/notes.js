const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.findIndex(note => note.id === id);
  // match the id and return the index where found
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
  note.id = createNoteId();     // get a unique number for the id

  notes.push(note);   // add the new note

  // write the updated array with the next element appended
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  
  return note;    // send note back for html

} // end function createNewNote

function deleteNote(index, notes) {
  // splices an array of the contents
  // at the found item index and rewrites the file

  notes.splice(index,1);

  // write out the updated array
  
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes }, null, 2)
  );

} // end function deleteNote

module.exports = {
  findById,
  createNewNote,
  deleteNote
};
