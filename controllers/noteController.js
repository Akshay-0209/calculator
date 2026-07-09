const noteService = require('../services/noteService');
const validation = require('../utilities/validation');

exports.createNote = async (req, res, next) => {
  try {
    const { error } = validation.noteSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const note = await noteService.createNote({ ...req.body, userId: req.user.id });
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await noteService.getNotesByUserId(req.user.id);
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

exports.getNote = async (req, res, next) => {
  try {
    const note = await noteService.getNoteById(req.params.id, req.user.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const { error } = validation.noteSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const updated = await noteService.updateNote(req.params.id, req.user.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Note not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const deleted = await noteService.deleteNote(req.params.id, req.user.id);
    if (!deleted) return res.status(404).json({ error: 'Note not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
