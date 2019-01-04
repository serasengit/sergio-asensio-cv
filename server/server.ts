// Import express
const express = require('express');
const path = require('path');
// Import Body parser
const bodyParser = require('body-parser');
// Import Mongoose
// let mongoose = require('mongoose');
// Email sending variables
const cors = require('cors');
const configMensaje = require('./modules/configMensaje');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require('./api-routes');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/resthub');
// let db = mongoose.connection;
// Setup server port
const port = process.env.PORT || 4201;
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
// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log('Running RestHub on port ' + port);
});
// Heroku configuration
// Serve only the static files form the dist directory
app.use(express.static('./dist/sergio-asensio-cv'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/sergio-asensio-cv/index.html'));
});
