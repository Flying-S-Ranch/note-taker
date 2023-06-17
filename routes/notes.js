// This file is organized following the example of the mini-project
const notes = require('express');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');

// const app = express();
// import express from 'express'
const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

module.exports = notes;