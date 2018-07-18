const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {toDo} =  require('./models/toDo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var newtoDo = new toDo({
        text: req.body.text
    });

    newtoDo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req,res) => {
    toDo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('Server up on port 3000')
});

module.exports = {app};

