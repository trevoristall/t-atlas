const express = require('express');
const http = require('http');
const app = express();

const randomInt(min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// prevent Heroku app sleep
setInterval(() => {
    http.get('http://t-atlas.herokuapp.com');
}, randomInt(600000, 1200000)); // every 10 - 20 minutes

app.get('/', (req, res) => {
    res.json(require('../resume.json'));
})

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});
