/**
 * Created by fcanet on 18/08/2016.
 */
var express = require('express');

var bookRouter = express.Router();

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
        res.render('bookListView', {title: 'Books',
            nav:[{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}],
            books: books});
    });

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {title: 'Books',
            nav:[{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}],
            book: books[id]});
    });

module.exports = bookRouter;
