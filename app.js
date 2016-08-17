/** Created by fcanet on 11/08/2016. */

var express = require('express');
//var handlebars = require('express-handlebars');
var app = express();
var port = process.env.PORT || 8888;

app.use(express.static('public'));
//app.use(express.static('src/views')); --> changed on module 4 for the next statement.
//app.set('views', './src/views'); --> For Handlebars

//app.set('view engine', 'jade'); --> For Jade

//Handlebars
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');

//EJS
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from Render!', list: ['a', 'b']});
});

app.listen(port, function(error) {
    console.log('Listening on port: ' + port);
});
