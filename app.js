/** Created by fcanet on 11/08/2016. */

var express = require('express');

var app = express();
var port = process.env.PORT || 8888;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render', list:['a','b','c']});
});

app.listen(port, function(error) {
    console.log('Listening on port: ' + port);
});
