const notesList = document.getElementById('notes-list');
const noteForm = document.getElementById('note-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const searchInput = document.getElementById('search');
const formError = document.getElementById('form-error');

let editingId = null;

async function fetchNotes(query = '') {
  const res = await fetch(`/api/notes?q=${encodeURIComponent(query)}`);
  const notes = await res.json();
  renderNotes(notes);
}

function renderNotes(notes) {
  notesList.innerHTML = '';
  if (!notes.length) {
    notesList.innerHTML = '<li>No notes found.</li>';
    return;
  }
  notes.forEach(note => {
    const li = document.createElement('li');
    li.className = 'note';
    li.innerHTML = `
      <div><strong>${escape(note.title)}</strong></div>
      <div>${escape(note.content)}</div>
      <div class="note-actions">
        <button class="note-edit" title="Edit">✏️</button>
        <button class="note-delete" title="Delete">🗑️</button>
      </div>
    `;
    li.querySelector('.note-edit').onclick = () => startEdit(note);
    li.querySelector('.note-delete').onclick = () => deleteNote(note.id);
    notesList.appendChild(li);
  });
}

function escape(str) {
  return (''+str).replace(/[&<>"]'/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
}

noteForm.onsubmit = async e => {
  e.preventDefault();
  formError.textContent = '';
  if (!titleInput.value.trim()) {
    formError.textContent = 'Title is required.';
    return;
  }
  try {
    if (editingId) {
      const res = await fetch(`/api/notes/${editingId}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ title: titleInput.value, content: contentInput.value })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      editingId = null;
      noteForm.querySelector('button').textContent = 'Add Note';
    } else {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ title: titleInput.value, content: contentInput.value })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
    }
    noteForm.reset();
    fetchNotes(searchInput.value);
  } catch (err) {
    formError.textContent = err.message;
  }
};

function startEdit(note) {
  editingId = note.id;
  titleInput.value = note.title;
  contentInput.value = note.content;
  noteForm.querySelector('button').textContent = 'Update Note';
}

async function deleteNote(id) {
  if (!confirm('Delete this note?')) return;
  const res = await fetch(`/api/notes/${id}`, { method: 'DELETE' });
  const data = await res.json();
  if (res.ok) {
    fetchNotes(searchInput.value);
  } else {
    alert(data.error || 'Error deleting note');
  }
}

searchInput.oninput = () => fetchNotes(searchInput.value);

// Initial load
fetchNotes();