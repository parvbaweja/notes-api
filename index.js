const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [];
let nextId = 1;

// Get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Get note by ID
app.get('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find(n => n.id === noteId);

  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  res.json(note);
});

// Add new note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newNote = {
    id: nextId++,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update a note
app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const { title, content } = req.body;
  const note = notes.find(n => n.id === noteId);

  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  if (title) note.title = title;
  if (content) note.content = content;

  res.json(note);
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const index = notes.findIndex(n => n.id === noteId);

  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }

  const deletedNote = notes.splice(index, 1);
  res.json(deletedNote[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
