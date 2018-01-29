
var express = require('express'),
    logger = require('morgan'),
    app = express(),
    geocoderPackage = require('./geocoder.js'),
    formidable = require('express-formidable'),
    fs = require('fs-extra'),
    db = require('mysql');
    react = require('react');
    dbCreds = require('./db-creds.js');




// the express-formidable handles multi-type AJAX transactions
app.use(formidable());

// define static content directory
app.use(logger('combined'));
app.use(express.static(__dirname + '/public'));
app.set('json spaces', 2);

// GET /style.css, general.js, etc
app.use('/css', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public'));


// index route
app.get('/', function(req,res){
    res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/welcomAdmin', function(req,res){
    res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/manageUsers', function (req,res){
    res.status(200).sendFile(__dirname + "/manageUsers.html");
});

app.get('/manageAdmins', function (req,res){
    res.status(200).sendFile(__dirname + "/manageAdmins.html");
});

app.get('/businessIntelligence', function(req,res){
    res.status(200).sendFile(__dirname + '/businessIntelligence.html');
});

app.listen(8080, function(){
    console.log('App running on port 8080');
});