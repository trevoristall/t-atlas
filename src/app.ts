const express = require('express');
const http = require('http');
const app = express();

// prevent Heroku app sleep
setInterval(() => {
    http.get('http://t-atlas.herokuapp.com');
}, 600000); // every 10 minutes

app.get('/', (req, res) => {
    res.json(require('../resume.json'));
})

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});
