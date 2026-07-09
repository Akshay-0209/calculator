const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const auth = require('../middleware/auth');

// Create a new note
router.post('/notes', auth, noteController.createNote);

// Get all notes for authenticated user
router.get('/notes', auth, noteController.getNotes);

// Get a specific note by id
router.get('/notes/:id', auth, noteController.getNote);

// Update a note by id
router.put('/notes/:id', auth, noteController.updateNote);

// Delete a note by id
router.delete('/notes/:id', auth, noteController.deleteNote);

module.exports = router;
