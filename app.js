/** Created by fcanet on 11/08/2016. */

var express = require('express');

var app = express();
var port = process.env.PORT || 8888;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var books = [
    {
        tittle: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        tittle: 'Kama-sutra',
        genre: 'Love',
        author: 'Vatsiaiana',
        read: false
    },
    {
        tittle: 'El Capital',
        genre: 'Political Science',
        author: 'Karl Marx',
        read: false
    },
    {
        tittle: 'Rayuela',
        genre: 'Surrealism',
        author: 'Julio Cortázar',
        read: false
    }
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {title: 'Books',
            nav:[{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}],
            books: books});
    });

bookRouter.route('/Single')
    .get(function (req, res) {
        res.send('Hello Single Book!');
    });

app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render',
        nav:[{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}]});
});

app.listen(port, function(error) {
    console.log('Listening on port: ' + port);
});
