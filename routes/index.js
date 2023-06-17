const express = require('express');

const notesRouter = require('./notes')

// import express from 'express'
const app = express();

app.use('/notes', notesRouter);

module.exports = app