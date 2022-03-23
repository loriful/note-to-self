const router = require('express').Router();
const { findById, createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../data/db');
  
  
  router.get('/notes', (req, res) => {
      res.json(notes);
  });

  router.post('/notes', (req, res) => {
      const note = createNewNote(req.body, notes);
      // add the new note and rewrite the json file
      res.json(note);
  });

  router.delete('/notes/:id', (req, res) => {
      const result = findById(req.params.id, notes);
      // return the index of the matched id
      
      if (result !== null) {
        res.json(deleteNote(result, notes)); 
        // delete the matched element and rewrite the json file
      } else {
        res.sendStatus(404);
      }
  });
  
module.exports = router;