// This file is organized following the example of the mini-project
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');

// GET: /api/notes
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
})

// POST: /api/notes
notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4()
        };

        readAndAppend(newNote, './db/notes.json');
        res.json(`New note added`);
    } else {
        res.errored('Not able to add note. Check required fields')
    }
})

module.exports = notes;