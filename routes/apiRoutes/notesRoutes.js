const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../data/db');
  
  
  router.get('/notes', (req, res) => {
      res.json(notes);
  });

  router.post('/notes', (req, res) => {
      const note = createNewNote(req.body, notes);
      res.json(note);
  });

  router.get('/notes/:id', (req, res) => {
      const result = findById(req.params.id, notes);
      if (result) {
        res.json(result);
      } else {
        res.send(404).send('Item not found.');
      }
  });
  
module.exports = router;