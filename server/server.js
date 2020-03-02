const express = require('express')
const BoardGame = './models/BoardGameModel'

const mongoose = require('mongoose')

const port = process.env.PORT || 5000
const bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/BoardGamedb')

mongoose.model('BoardGame', BoardGame)

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// importing route
const routes = require('./routes/BoardGameRoutes')
// register the route
routes(app)

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)
