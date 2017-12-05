'use strict'

const People = require('../models/people')

function setSesion(req, res) {
  console.log("Set Sesion")
  res.status(200).send({
    message: 'Tienes autorizacion'
  })
}

function postProfile(req, res) {
  console.log('POST /api/profile')
  let people = new People()
  people.sub = req.body.sub
  people.nombre = req.body.given_name
  people.apellido = req.body.family_name
  people.url_img = req.body.picture
  people.tipo = req.body.userType
  people.numeroEnvios = "0"
  people.fletesCancelados = "0"

  console.log(people, "Guardar Ahora")
  people.save((err, peopleStored) => {
    if (err) res.status(500).send({
      message: 'Error al guardar en la base de datos'
    })
    res.status(200).send({
      people: peopleStored
    })
  })
}

function getProfile(req, res) {
  console.log("get Profile")
  let id_auth = req.params.peopleId
  People.findOne({
    sub: id_auth
  }, (err, people) => {
    if (err) return res.status(500).send({
      message: 'Error al realizar la peticion'
    })
    if (!People) return res.status(404).send({
      message: 'No se ha encontrado el perfil'
    })

    res.status(200).send({
      people
    })
  })
}

//en este punto tendre que hacer una busqueda de personas con filtro de alguna manera
function getProfiles(req, res) {
  People.find({}, (err, peoples) => {
    if (err) return res.status(500).send({
      message: 'Error al realizar la peticion'
    })
    if (!peoples) return res.status(404).send({
      message: 'Al parecer no existen personas aun'
    })

    res.status(200).send({
      peoples
    })
  })
}

function getClientProfile(req, res) {
  People.find({
    _id: req.params.id_user
  }, (err, people) => {
    if (err) return res.status(500).send({
      message: 'Error al realizar la peticion'
    })
    if (!people) return res.status(404).send({
      message: 'Al parecer no existen personas aun'
    })
    res.status(200).send({
      people
    })
  })
}

function counts(req, res) {
  console.log("Counts Elems People")
  People.findOne({
    _id: req.params.id_people
  }, (err, ofertados) => {
    let ElemOfer = ofertados.ofertado
    let ElemArch = ofertados.archivados

    let salidaOfer = 0
    ofertados.ofertado.forEach(dato => {
      salidaOfer += 1
    })

    let salidaArch = 0
    ofertados.archivados.forEach(dato => {
      salidaArch += 1
    })

    let conteo = {
      contArch: salidaArch,
      contOfer: salidaOfer
    }

    if (err) return res.status(500).send({
      message: 'Error al realizar el Conteo'
    })
    if (!conteo) return res.status(404).send({
      message: 'No se pudo realizar correctamente el conteo'
    })

    res.status(200).send({
      conteo
    })



  })
}









//como son personas separamos los clientes(fletes) de usuarios
//tu siendo cliente quiero que me muestra los usuarios que cumplan con:
//tu siendo usuario quiero q me muestre los fletes que cumplan con :

//function getProfilesComuna ((comunaSSSSSSS,(cliente,usuario), people)
//function getProfilesTipocamion ((tipo,cliente) , people)


//ORDER BY onda comunas y ordenar por empresas de esa comuna
//function getProfilesCalificacion ((cliente,usuario),people) ordena por calificacion, una persona con buena calicacion aun que tenga pcoos envios puede que sea buena persona c:
//function getProfilesEmpresa (((empresa,independiente),cliente), people) ordena por empresa y dps independiente, o indepentidente y dps empresas
//function getProfilesEnvios (cliente, people) ordena por numero de envios , una persona con buena calificacion puede tener pocos envios




// function getCalificacion(req, res) {
//   let PeopleId = req.params.ProfileId
//   var sum = 0
//
//   People.findById(peopleId, (err, people) =>{
//     if (err) return res.status(500).send({message: 'error al realizar la peticion'})
//     if(!People) return res.status(404).send({message: 'No se ha encontrado el perfil'})
//     for(var i = 0; i < calificacionArr.lenght ; i++){
//       sum+ = calificacionarr[i];
//     }
//     var avg = sum / calificacionArr.lenght
//     People.calificacion = avg
//     res.status(200).send(People)
//   })
// }

// function putCalificacion(req,res){
//   let PeopleId = req.params.ProfileId
//   let update = req.body
//
//   People.findByIdAndUpdate(PeopleId, update, (err, peopleUpdated) =>{
//     if (err) res.status(500).send({message: 'Error al actualizar calificacion'})
//     res.status(200).send({people: peopleUpdated})
//   })
// }
//
//  function putNumeroEnvios(req, res) {
//    let PeopleId = req.params.ProfileId
//    People.findById(PeopleId , (err, people) =>{
//      if (err) return res.status(500).send({message: 'error al realizar la peticion'})
//      if(!People) return res.status(404).send({message: 'No se ha encontrado el perfil'})
//      var update People.numeroEnvios + 1
//      People.numeroEnvios = update
//      res.status(200).send(People)
//    })
//
//  }
//como son personas separamos los clientes(fletes) de usuarios
//tu siendo cliente quiero que me muestra los usuarios que cumplan con:
//tu siendo usuario quiero q me muestre los fletes que cumplan con :

//function getProfilesComuna ((comunaSSSSSSS,(cliente,usuario), people)
//function getProfilesTipocamion ((tipo,cliente) , people)


//ORDER BY onda comunas y ordenar por empresas de esa comuna
//function getProfilesCalificacion ((cliente,usuario),people) ordena por calificacion, una persona con buena calicacion aun que tenga pcoos envios puede que sea buena persona c:
//function getProfilesEmpresa (((empresa,independiente),cliente), people) ordena por empresa y dps independiente, o indepentidente y dps empresas
//function getProfilesEnvios (cliente, people) ordena por numero de envios , una persona con buena calificacion puede tener pocos envios



function putProfile(req, res) {
  let peopleId = req.params.peopleId
  let update = req.body

  People.findByIdAndUpdate(peopleId, update, (err, peopleUpdated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar el perfil'
    })
    res.status(200).send({
      people: peopleUpdated
    })
  })
}

function deleteProfile(req, res) {
  //hacer algun check, mas que nada en frontend de esto
  let peopleId = req.params.peopleId

  People.findById(peopleId, (err, people) => {
    if (err) res.status(500).send({
      message: 'Error al borrar el Perfil'
    })
    People.remove(err => {
      if (err) res.status(500).send({
        message: 'Error al borrar el Perfil'
      })
      res.status(200).send({
        message: 'El Perfil ha sido eliminado'
      })
    })
  })
}

function profileUpdate(req, res) {
  let peopleUpdate = req.body //revisar
  console.log(req.body)
  People.findById(peopleUpdate._id, peopleUpdate, (err, peopleUpdated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar el perfil'
    })
    res.status(200).send({
      peopleUpdated
    })
  })
}


module.exports = {
  getProfile,
  getProfiles,
  putProfile,
  deleteProfile,
  postProfile,
  setSesion,
  getClientProfile,
  counts,
  profileUpdate
}