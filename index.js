const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.get('/cars', (req, res) => {
    res.send('get request done!')
})
app.post('/cars', (req, res) => {
    console.log(req.body);
    res.send('post request done!')
})



app.listen(3000, () => {
    console.log('Listening to port 3000');
})