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
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)


//User Controllers
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({
    message: 'Tienes autorizacion'
  })
})

//People Controllers
// api.get('/setsesion', peopleCtrl.setSesion)
api.get('/setsesion', (req, res) => {
  console.log("funciona")
  res.status(200).send({
    message: 'funcionando'
  })
})
api.post('/people', peopleCtrl.postProfile)
api.get('/people', peopleCtrl.getProfiles)
api.get('/people/:peopleId', peopleCtrl.getProfile)
api.put('/people/:peopleId', peopleCtrl.putProfile)
api.delete('/people/:peopleId', peopleCtrl.deleteProfile)
api.get('/people/client/:id_user', peopleCtrl.getClientProfile)

//Flete controllers
api.post('/postform', fleteCtrl.postNewFlete)
api.get('/fletes', fleteCtrl.getAllFletes)
api.get('/fletes/:comuna', fleteCtrl.getComunaFilter)
api.put('/fletes/archivar', fleteCtrl.putNewArchivado)
api.get('/fletes/archivados/:idUsuario', fleteCtrl.getFletesArchivados)
api.put('/fletes/quitar/archivado', fleteCtrl.deleteFleteArchivado)
api.put('/fletes/ofertar/archivado', fleteCtrl.putOfertarFleteArchivado)
api.put('/fletes/ofertar/normal', fleteCtrl.putOfertarFleteNormal)
api.get('/fletes/ofertados/:id_usuario', fleteCtrl.getAllFletesOfertadosActivos)
api.put('/fletes/activo/abandonar', fleteCtrl.deleteFleteActivo)
api.get('/fletes/usuario/:id_usuario', fleteCtrl.getAllUserFletes)
api.put('/flete/update', fleteCtrl.putFlete)


//Send Controllers
api.post('/send', sendCtrl.postSend)
api.get('/send', sendCtrl.getSend)
api.get('/send/:sendId', sendCtrl.getSend)
api.put('/send/:sendId', sendCtrl.putSend)
api.delete('/send/:sendId', sendCtrl.deleteSend)



module.exports = api