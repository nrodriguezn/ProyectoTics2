'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var originsWhitelist = 'http://localhost:4200'      //this is my front-end url for development
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

app.engine('.hbs', hbs({
  defaultlayaut: 'default',
  extname: '.hbs'
}))//para configurar el motor de plantillas
app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/login', (req, res) =>{
  res.render('login')
})
app.get('/producta',  (req, res) =>{
  res.render('product')
})
//La magia
app.use(cors(corsOptions))

module.exports = app
