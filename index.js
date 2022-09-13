const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        username: 'Monjed',
        comment: 'lololo hahahahah',
        id: uuid(),
    },
    {
        username: 'Mohammad',
        comment: 'lololo nice one',
        id: uuid(),
    },
    {
        username: 'Yousef',
        comment: 'ok that was goood!',
        id: uuid(),
    },
    {
        username: 'ali',
        comment: 'Thank u man',
        id: uuid(),
    },
    {
        username: 'Sami',
        comment: 'Happy birthday!!',
        id: uuid(),
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    // comments.push(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id);
    if (comment == undefined) {
        res.render('comments/index', { comments });
    }
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    if (comment == undefined) {
        res.render('comments/index', { comments });
    }
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})