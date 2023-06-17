// This file is organized following the example of the mini-project
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');

module.exports = notes;