'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const peopleCtrl = require('../controllers/people')
const sendCtrl = require('../controllers/send')
const auth = require('../middlewares/auth')
const fleteCtrl = require('../controllers/flete')
const api = express.Router()


//Product Controllers
api.get('/product', productCtrl.getProducts)
api.post('/product', productCtrl.saveProduct)
api.get('/product/:productId', productCtrl.getProduct)
api.put('/product/:productId',productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)


//User Controllers
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
res.status(200).send({message: 'Tienes autorizacion'})
})

//People Controllers
// api.get('/setsesion', peopleCtrl.setSesion)
api.get('/setsesion', (req,res) => {
  console.log("funciona")
res.status(200).send({message: 'funcionando'})})
api.post('/people', peopleCtrl.postProfile )
api.get('/people', peopleCtrl.getProfiles )
api.get('/people/:peopleId', peopleCtrl.getProfile )
api.put('/people/:peopleId', peopleCtrl.putProfile )
api.delete('/people/:peopleId', peopleCtrl.deleteProfile )

//Flete controllers
api.post('/postform', fleteCtrl.postNewFlete )



//Send Controllers
api.post('/send',sendCtrl.postSend  )
api.get('/send', sendCtrl.getSend )
api.get('/send/:sendId', sendCtrl.getSend )
api.put('/send/:sendId', sendCtrl.putSend )
api.delete('/send/:sendId', sendCtrl.deleteSend )



module.exports = api
