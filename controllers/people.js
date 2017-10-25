'use strict'

const People = require('../models/people')

function postProfile ( req, res ) {
  console.log('POST /api/profile')
  let people = new People()
  people.nombre = req.body.nombre
  people.apellido = req.body.apellido
  people.email = req.body.email
  people.telefono = req.body.telefono
  people.url_img = req.body.url_img
  people.activo = true
  people.tipo = req.body.tipo
  people.SignupDate = req.body.SignupDate
  people.direccion = req.body.direccion
  people.cedula = req.body.cedula
  people.vehiculo = req.body.vehiculo

  people.save((err, peopleStored)=>{
    if(err) res.status(500).send({message: 'Error al guardar en la base de datos'})
    res.status(200).send({people: peopleStored})
  })
}

function getProfile(req, res) {

  let peopleId = req.params.profileId
  People.findById(peopleId, (err, people) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion'})
    if (!people) return res.status(404).send({message: 'No se ha encontrado el perfil'})

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

  Product.findByIdAndUpdate(peopleId, update, (err, peopleUpdated) =>{
    if (err) res.status(500).send({message: 'Error al actualizar el perfil'})
    res.status(200).send({ people: peopleUpdated})
  })
}

function deleteProfile(req, res) {
  //hacer algun check, mas que nada en frontend de esto
  let peopleId = req.params.peopleId

  People.findById(peopleId, (err, people) =>{
    if(err) res.status(500).send({message: 'Error al borrar el Perfil'})
    people.remove(err =>{
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
