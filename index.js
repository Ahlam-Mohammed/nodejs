var express = require('express');
var app = express();

app.use(express.static(__dirname + '/assets'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index',{title:"home"});
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about',{title:"about"});
});

// portfolio page
app.get('/portfolio', function(req, res) {
    res.render('pages/portfolio',{title:"portfolio"});
});

// services page
app.get('/services', function(req, res) {
    res.render('pages/services',{title:"services"});
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact',{title:"contact"});
});

app.listen(8080);
console.log('Server is listening on port 8080');
