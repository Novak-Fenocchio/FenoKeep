const { Router } = require('express');
const router = Router();

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote, searchNote } = require('../controllers/notes.controller');
const { isAuthenticated } = require('../helpers/auth');

/* New note */
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, createNewNote);

/* Get notes */
router.get('/notes',isAuthenticated, renderNotes);

/* edit notes */
router.get('/notes/edit/:id',isAuthenticated, renderEditForm);
router.put('/notes/edit/:id',isAuthenticated, updateNote);

/* delete note */
router.delete('/notes/delete/:id', isAuthenticated,deleteNote);

/* Search notes */
router.post('/notes/search', isAuthenticated, searchNote);
module.exports = router