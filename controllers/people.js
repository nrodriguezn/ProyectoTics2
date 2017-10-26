'use strict'

const People = require('../models/people')

function postProfile ( req, res ) {
  console.log('POST /api/profile')
  let people = new People()
  People.nombre = req.body.nombre
  People.apellido = req.body.apellido
  People.email = req.body.email
  People.telefono = req.body.telefono
  People.url_img = req.body.url_img
  People.activo = true
  People.tipo = req.body.tipo
  People.SignupDate = req.body.SignupDate
  People.direccion = req.body.direccion
  People.cedula = req.body.cedula
  People.vehiculo = req.body.vehiculo

  People.save((err, peopleStored)=>{
    if(err) res.status(500).send({message: 'Error al guardar en la base de datos'})
    res.status(200).send({people: peopleStored})
  })
}

function getProfile(req, res) {
  let peopleId = req.params.profileId
  People.findById(peopleId, (err, people) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion'})
    if (!People) return res.status(404).send({message: 'No se ha encontrado el perfil'})

    res.status(200).send({ people })
  })
}

//en este punto tendre que hacer una busqueda de personas con filtro de alguna manera
function getProfiles(req, res) {
  People.find({}, (err, peoples) => {
    if(err) return res.status(500).send({message: 'Error al realizar la peticion'})
    if (!peoples) return res.status(404).send({message: 'Al parecer no existen personas aun'})

    res.status(200).send({ peoples })
  })
}

function putProfile(req, res) {
  let peopleId = req.params.peopleId
  let update = req.body

  People.findByIdAndUpdate(peopleId, update, (err, peopleUpdated) =>{
    if (err) res.status(500).send({message: 'Error al actualizar el perfil'})
    res.status(200).send({ people: peopleUpdated})
  })
}

function deleteProfile(req, res) {
  //hacer algun check, mas que nada en frontend de esto
  let peopleId = req.params.peopleId

  People.findById(peopleId, (err, people) =>{
    if(err) res.status(500).send({message: 'Error al borrar el Perfil'})
    People.remove(err =>{
      if(err) res.status(500).send({message: 'Error al borrar el Perfil'})
      res.status(200).send({message: 'El Perfil ha sido eliminado'})
    })
  })
}


module.exports = {
  getProfile,
  getProfiles,
  putProfile,
  deleteProfile,
  postProfile
}
