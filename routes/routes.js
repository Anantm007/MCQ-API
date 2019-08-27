const express = require('express');
const app = express.Router();

const enterData = require('./enter_data');
const getQuiz = require('./getQuiz');

app.post('/enterData', enterData);
app.get('/getQuiz', getQuiz);



module.exports = app;
