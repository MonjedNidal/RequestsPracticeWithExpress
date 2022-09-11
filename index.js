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
        comment: 'lololo hahahahah'
    },
    {
        username: 'Mohammad',
        comment: 'lololo nice one'
    },
    {
        username: 'Yousef',
        comment: 'ok that was goood!'
    },
    {
        username: 'ali',
        comment: 'Thank u man'
    },
    {
        username: 'Sami',
        comment: 'Happy birthday!!'
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


app.listen(3000, () => {
    console.log('Listening to port 3000');
})