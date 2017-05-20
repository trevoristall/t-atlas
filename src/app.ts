const express = require('express');
const http = require('http');
const app = express();

// prevent heroku app sleep
setInterval(() => {
    http.get('http://t-atlas.herokuapp.com');
}, 300000); // every 5 minutes (300000)

app.get('/', (req, res) => {
    res.send(require('../resume.json'));
})

app.listen(80);