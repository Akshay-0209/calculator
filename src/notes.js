// src/notes.js
// Business logic for Notes Manager

function validateNoteInput(input) {
  if (!input || typeof input !== 'object') throw new Error('Invalid input.');
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  const content = typeof input.content === 'string' ? input.content.trim() : '';
  if (!title) throw new Error('Title is required.');
  if (title.length > 100) throw new Error('Title too long (max 100 chars).');
  if (content.length > 1000) throw new Error('Content too long (max 1000 chars).');
  return { title, content };
}

function createNote(notesStore, input, nextId) {
  const { title, content } = validateNoteInput(input);
  const now = new Date().toISOString();
  const note = {
    id: nextId,
    title,
    content,
    createdAt: now,
    updatedAt: now,
  };
  return note;
}

function generateUniqueTimestamp(compareTo) {
  // Ensures the returned ISO timestamp is not equal to compareTo
  let now = Date.now();
  let compare = Date.parse(compareTo);
  // If the timestamps are equal (to the ms), increment by 1ms
  if (now <= compare) {
    now = compare + 1;
  }
  return new Date(now).toISOString();
}

function updateNote(notesStore, id, input) {
  const idx = notesStore.findIndex(n => n.id === id);
  if (idx === -1) throw new Error('Note not found.');
  const { title, content } = validateNoteInput(input);
  const createdAt = notesStore[idx].createdAt;
  const updatedAt = generateUniqueTimestamp(createdAt);
  notesStore[idx] = {
    ...notesStore[idx],
    title,
    content,
    updatedAt,
  };
  return notesStore[idx];
}

function deleteNote(notesStore, id) {
  const idx = notesStore.findIndex(n => n.id === id);
  if (idx === -1) throw new Error('Note not found.');
  notesStore.splice(idx, 1);
}

function searchNotes(notesStore, query) {
  if (!query) return notesStore;
  const q = query.toLowerCase();
  return notesStore.filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q));
}

module.exports = { createNote, updateNote, deleteNote, searchNotes };
