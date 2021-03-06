/** Created by fcanet on 11/08/2016. */

var express = require('express');

var app = express();
var port = process.env.PORT || 8888;

var nav =  [
    {
        Link: '/Books',
        Text: 'Books'
    },

    {
        Link: '/Authors',
        Text: 'Authors'
    }
];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render',
        nav:[{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}]});
});

app.listen(port, function(error) {
    console.log('Listening on port: ' + port);
});
