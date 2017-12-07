'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

var corsOptions = {
  origin: 'https://proflete-angular.herokuapp.com, http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultlayaut: 'default',
  extname: '.hbs'
})) //para configurar el motor de plantillas
app.use('/api', api)


//No para proyecto Fletes
// app.set('view engine', '.hbs')

// app.get('/login', (req, res) =>{
//   res.render('login')
// })
// app.get('/producta',  (req, res) =>{
//   res.render('product')
// })
//FIN

module.exports = app