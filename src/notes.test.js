const { createNote, updateNote, deleteNote, searchNotes } = require('./notes');

describe('Notes Business Logic', () => {
  beforeEach(() => {
    // Reset notes and nextId
    jest.resetModules();
    const notesModule = require('./notes');
    notesModule.createNote({ title: 'Seed1', content: 'C1' });
    notesModule.createNote({ title: 'Seed2', content: 'C2' });
  });

  test('createNote adds valid note', () => {
    const notesModule = require('./notes');
    const note = notesModule.createNote({ title: 'New', content: 'NC' });
    expect(note.id).toBeDefined();
    expect(note.title).toBe('New');
  });

  test('createNote validates input', () => {
    const notesModule = require('./notes');
    expect(() => notesModule.createNote({ title: '', content: 'x' })).toThrow();
    expect(() => notesModule.createNote({ title: null, content: 'x' })).toThrow();
    expect(() => notesModule.createNote({ content: 'x' })).toThrow();
  });

  test('updateNote updates existing note', () => {
    const notesModule = require('./notes');
    const note = notesModule.createNote({ title: 'Edit', content: 'X' });
    const updated = notesModule.updateNote(note.id, { title: 'Edited', content: 'Y' });
    expect(updated.title).toBe('Edited');
    expect(updated.content).toBe('Y');
  });

  test('updateNote validates and handles missing', () => {
    const notesModule = require('./notes');
    expect(() => notesModule.updateNote(999, { title: 'x', content: 'x' })).toThrow('Note not found');
    const note = notesModule.createNote({ title: 'A', content: 'B' });
    expect(() => notesModule.updateNote(note.id, { title: '', content: 'x' })).toThrow();
  });

  test('deleteNote removes note', () => {
    const notesModule = require('./notes');
    const note = notesModule.createNote({ title: 'Del', content: 'Z' });
    const deleted = notesModule.deleteNote(note.id);
    expect(deleted.id).toBe(note.id);
    expect(() => notesModule.deleteNote(note.id)).toThrow();
  });

  test('searchNotes finds by title/content', () => {
    const notesModule = require('./notes');
    notesModule.createNote({ title: 'FindMe', content: 'special content' });
    const found = notesModule.searchNotes('findme');
    expect(found.some(n => n.title === 'FindMe')).toBe(true);
    const found2 = notesModule.searchNotes('special');
    expect(found2.some(n => n.content === 'special content')).toBe(true);
  });
});
