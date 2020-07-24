const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(8080, function () {
    console.log('App listening on http://localhost:8080/');
});

module.exports = app
