/*
 * Created on 2018-01-15 ( Time 11:23:59 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Router configuration
const REST_API_ROOT = '/api/v1';

/**
 * Server application configuration
 */

// Database configuration
const sqlitedb = process.argv[3] || './db.sqlite3';
// Init database
require('./app/config/dbCreateTables')(sqlitedb);

// Init server listening
const port = process.argv[2] || 3000;
app.listen(process.env.PORT || port, function () {
    console.log("Server listening on port : " + port);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rendering configuration
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Authorize external access
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(REST_API_ROOT, require('./app/routes/router'));
