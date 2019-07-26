const express = require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')
const { pets, Pets }   = require('./endpoints')

var app = express();


const mongooseConfig = { useNewUrlParser: true }
mongoose.connect('mongodb+srv://root:qwerty1234@rokketlabs-aw0ja.gcp.mongodb.net/test?retryWrites=true&w=majority', mongooseConfig)

var bodyParser = require('body-parser')
var cors = require('cors')

var corsOptions = {
    origin: true,
    credentials: true
};

const petsHandlers = pets({ Pets })

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.get('/pets', petsHandlers.get)




app.post('/pets', petsHandlers.post)




app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});