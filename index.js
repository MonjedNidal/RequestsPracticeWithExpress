const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Monjed',
        comment: 'lololo hahahahah',
        id: 1,
    },
    {
        username: 'Mohammad',
        comment: 'lololo nice one',
        id: 2,
    },
    {
        username: 'Yousef',
        comment: 'ok that was goood!',
        id: 3,
    },
    {
        username: 'ali',
        comment: 'Thank u man',
        id: 4,
    },
    {
        username: 'Sami',
        comment: 'Happy birthday!!',
        id: 5,
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id);
    res.render('comments/show', { comment });
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})