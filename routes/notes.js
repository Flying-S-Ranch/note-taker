// This file is organized following the example of the mini-project
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');

// GET: /api/notes

notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
})

module.exports = notes;