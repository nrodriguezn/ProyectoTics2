'use strict'

const Flete = require('../models/flete')
const People = require('../models/people')
var ObjectId = require('mongodb').ObjectID;


function postNewFlete(req, res) {
  console.log("postNewFlete")
  let flete = new Flete()

  flete.persona_id = req.body.persona_id
  flete.horarioRetiro = req.body.horario
  flete.subasta = req.body.tipoFlete
  flete.titulo = req.body.titulo
  flete.comentario = req.body.comentario
  flete.urlImagen = req.body.imagen //TENGO Que manejar bien la imagen despues
  flete.direccionOrigen.comuna = req.body.comuna_origen
  flete.direccionOrigen.calle = req.body.calle_origen
  flete.direccionOrigen.numero = req.body.numero_origen
  flete.direccionDestino.comuna = req.body.comuna_destino
  flete.direccionDestino.calle = req.body.calle_destino
  flete.direccionDestino.numero = req.body.numero_destino
  flete.id_usuario_mongodb = req.body.id_mongodb

  flete.save((err, fleteStored) => {
    if (err) res.status(500).send({
      message: 'Error al guardar'
    })
    res.status(200).send({
      flete: fleteStored
    })
  })
}

function getAllFletes(req, res) {
  console.log("getFletes")
  Flete.find({}, (err, sends) => {
    if (err) return res.status(500).send({
      message: 'Error al realizar la peticion'
    })
    if (!sends) return res.status(404).send({
      message: 'Al parecer no hay envios aun '
    })
    res.status(200).send({
      sends
    })
  })
}

function getComunaFilter(req, res) {
  console.log("getFletesComuna:", req.params.comuna)
  let comuna = req.params.comuna
  Flete.find({
    $or: [{
      "direccionOrigen.comuna": comuna
    }, {
      "direccionDestino.comuna": comuna
    }]
  }, (err, send) => {
    if (err) return res.status(500).send({
      message: 'Error al realizar la peticion'
    })
    if (!send) return res.status(404).send({
      message: 'No se ha encontrado el perfil '
    })

    res.status(200).send({
      send
    })
  })
}

function putNewArchivado(req, res) {
  console.log("puNewArchivado", req.body)
  People.findByIdAndUpdate(req.body._id, req.body, (err, peopleUpdated) => {

    if (err) res.status(500).send({
      message: 'Error al actualizar'
    })
    res.status(200).send({
      peopleUpdated
    })
  })
}

function getFletesArchivados(req, res) {
  People.findById(req.params.idUsuario, {
    archivados: 1
  }, (err, people) => {
    if (err) res.status(500).send({
      message: 'Error al Buscar Usuario'
    })
    // fletes.find({_id: {$in: [ObjectId("5a1796dfceea2a84f371bea4"), ObjectId("5a17975cceea2a84f371bea5")] }})  //ESTE SI FUNCIONA
    //ASI SI FUNCIONA

    var id_array = new Array()

    for (var i = 0; i < people.archivados.length; i++) {
      id_array.push(`ObjectId("${people.archivados[i]}")`)
    }

    let salida = "["
    id_array.forEach(dato => {
      salida += dato + ", "
    })
    salida = salida + "]"

    Flete.find({
      _id: {
        $in: eval(salida)
      }
    }, (err, archivados) => {
      if (err) res.status(500).send({
        message: 'Error al Buscar Usuario'
      })
      res.status(200).send({
        archivados
      })
    })
  })
}

function deleteFleteArchivado(req, res) {
  console.log("delete Flete Archivado")
  People.update({
    _id: req.body._id_usuario
  }, {
    $pull: {
      archivados: req.body._id_archivado
    }
  }, (err, updated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar'
    })
    res.status(200).send({
      updated
    })
  })
}

function putOfertarFleteArchivado(req, res) { //Funcion llamada solo desde ver archivados, los elimina y oferta
  console.log("put Ofertar Flete")
  People.update({
    _id: req.body._id_usuario
  }, {
    $pull: {
      archivados: req.body._id_archivado
    }
  }, (err, updated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar'
    })
    People.update({
      _id: req.body._id_usuario
    }, {
      $push: {
        ofertado: {
          id_: req.body._id_archivado,
          monto: req.body._valor_flete
        }
      }
    }, (err, updated) => {
      if (err) res.status(500).send({
        message: 'Error al actualizar'
      })
      Flete.update({
        _id: req.body._id_archivado
      }, {
        $push: {
          ofertado: {
            id_usuario: req.body._id_usuario,
            monto: req.body._valor_flete
          }
        }
      }, (err, updated) => {
        if (err) res.status(500).send({
          message: 'Error al actualizar'
        })
        res.status(200).send({
          updated
        })
      })
    })
  })
}

function putOfertarFleteNormal(req, res) {
  console.log("ofertar Flete Normalmente")

  console.log(req.body)
  People.update({
    _id: req.body._id_usuario
  }, {
    $push: {
      ofertado: {
        id_: req.body._id_flete,
        monto: req.body._valor_flete
      }
    }
  }, (err, updated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar'
    })
    Flete.update({
      _id: req.body._id_flete
    }, {
      $push: {
        ofertado: {
          id_usuario: req.body._id_usuario,
          monto: req.body._valor_flete
        }
      }
    }, (err, updated) => {
      if (err) res.status(500).send({
        message: 'Error al actualizar'
      })
      res.status(200).send({
        updated
      })
    })
  })
}

function getAllFletesOfertadosActivos(req, res) {

  console.log("getAllFletesOfertadosActivos")

  People.findById(req.params.id_usuario, {
    ofertado: 1,
    _id: 0
  }, (err, people) => {

    var id_array = new Array()
    for (var i = 0; i < people.ofertado.length; i++) {
      if (people.ofertado[i].id_ != undefined)
        id_array.push(`ObjectId("${people.ofertado[i].id_}")`)
    }
    let salida = "["
    id_array.forEach(dato => {
      salida += dato + ", "
    })
    salida = salida + "]"

    Flete.find({
      _id: {
        $in: eval(salida)
      }
    }, (err, activos) => {
      if (err) res.status(500).send({
        message: 'Error al Buscar Usuario'
      })



      res.status(200).send(activos)
    })

  })

}

function deleteFleteActivo(req, res) {
  console.log("delete Flete Activo")
  People.update({
    _id: req.body._id_usuario
  }, {
    $pull: {
      ofertado: {
        id_: req.body._id_activo
      }
    }
  }, (err, updated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar'
    })
    Flete.update({
      _id: req.body._id_activo
    }, {
      $pull: {
        ofertado: {
          id_usuario: req.body._id_usuario
        }
      }
    }, (err, updated) => {
      if (err) res.status(500).send({
        message: 'Error al actualizar'
      })
      res.status(200).send({
        updated
      })
    })
  })
}

function getAllUserFletes(req, res) {
  console.log("getFletesUsuario")
  Flete.find(
    req.params.id_usuario, (err, sends) => {
      if (err) return res.status(500).send({
        message: 'Error al realizar la peticion'
      })
      if (!sends) return res.status(404).send({
        message: 'Al parecer no hay envios aun '
      })
      res.status(200).send({
        sends
      })
    })
}

function putFlete(req, res) {
  Flete.findByIdAndUpdate(req.body._id, req.body, (err, sendUpdated) => {
    if (err) res.status(500).send({
      message: 'Error al actualizar'
    })
    res.status(200).send({
      send: sendUpdated
    })
  })
}

function deleteFleteUser(req, res) {
  console.log("deleteFleteUser", req.params.flete_id)
  Flete.remove({
    _id: req.params.flete_id
  }, (err, flete) => {
    if (err) res.status(500).send({
      message: 'Errror al borrar el flete'
    })
    People.update({
      archivados: req.params.flete_id
    }, {
      $pull: {
        archivados: req.params.flete_id
      }
    }, (err, updated) => {
      if (err) res.status(500).send({
        message: 'Error al eliminar, inconsistencia de datos'
      })
      People.update({
        ofertado: {
          id_: req.params.flete_id
        }
      }, {
        $pull: {
          ofertado: {
            id_: req.params.flete_id
          }
        }
      }, (err, update) => {
        if (err) res.status(500).send({
          message: 'Error al eliminar ofertado, inconsistencia de datos'
        })
        res.status(200).send({
          message: 'El flete ha sido borrado'
        })
      })
    })
  })
}








// function postSend(req, res) {
//   console.log('POST /api/profile')
//   console.log(req.body)
//   let send = new Send()
//   Send.persona_id = req.body.persona_id
//   Send.fecha_creacion = req.body.fecha_creacion
//   Send.lapso_inicial_retiro = req.body.lapso_inicial_retiro
//   Send.lapso_final_retiro = req.body.lapso_final_retiro
//   Send.fecha_expiracion = req.body.fecha_expiracion
//   Send.subasta = null
//   Send.asignado = null
//   Send.activo = false //DATO CANDIDATO A CAMBIO POR true
//   Send.propuesta_cliente = req.body.propuesta_cliente
//
//   Send.save((err, sendStored) => {
//     if (err) res.status(200).send({message: 'Error al guardar'})
//     res.status(200).send({send: sendStored})
//   })
// }
//
// function getSend(req, res) {
//   let sendId = req.params.sendId
//   Send.findById(sendId, (err, send) =>{
//     if (err) return res.status(500).send({message:'Error al realizar la peticion'})
//     if (!send) return res.status(404).send({message: 'No se ha encontrado el perfil '})
//
//     res.status(200).send({ send })
//   })
// }
//
// function getSends(req, res) {
//     Send.find({}, (err, sends) =>{
//       if(err) return res.status(500).send({message: 'Error al realizar la peticion'})
//       if(!sends) return res.status(404).send({message: 'Al parecer no hay envios aun '})
//
//       res.status(200).send({ sends })
//     })
// }
//
// function putSend(req, res) {
//     let sendId = req.params.sendId
//     let update = req.body
//
//     Send.findByIdAndUpdate(sendId, update, (err, sendUpdated) => {
//       if (err) res.status(500).send({message: 'Error al actualizar'})
//       res.status(200).send({ send: sendUpdated})
//     })
// }
//
// function deleteSend(req, res) {
//     let sendId = req.params.peopleId
//
//     Send.findById(peopleId, (err, people) => {
//       if(err) res.status(500).send({message: 'Error al borrar el perfil'})
//       Send.remove(err => {
//         if(err) res.status(500).send({message: 'Error al borrar el envio'})
//         res.status(200).send({message:' El envio ha sido borrado'})
//       })
//     })
// }
//
// function getComplete(req, res) {
//     res.status(200).send({message: 'Falta tener claro que implementar en este punto'})
// }

module.exports = {
  postNewFlete,
  getAllFletes,
  getComunaFilter,
  putNewArchivado,
  getFletesArchivados,
  deleteFleteArchivado,
  putOfertarFleteArchivado,
  putOfertarFleteNormal,
  getAllFletesOfertadosActivos,
  deleteFleteActivo,
  getAllUserFletes,
  putFlete,
  deleteFleteUser
  // getSend,
  // getSends,
  // putSend,
  // deleteSend,
  // postSend
}