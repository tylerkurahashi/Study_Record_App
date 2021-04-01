const express = require('express');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log('Serving on 3000')
});