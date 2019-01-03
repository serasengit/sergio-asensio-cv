// Install express server
console.log('b');
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/sergio-asensio-cv'));

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/sergio-asensio-cv/index.html'));
});

// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});
// Handle POST requests that come in formatted as JSON
app.use(express.json());
// A default hello word route
app.get('/hello', (req, res) => {
    res.send({ hello: 'world' });
});

// Start the app by listening on the default Heroku port or locally
app.listen(process.env.PORT || 4201);
