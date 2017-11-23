'use strict'

const Flete = require('../models/flete')


function postNewFlete(req, res){
  console.log("postNewFlete")
  console.log(req.body)

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

  flete.save((err, fleteStored) =>{
    if(err) res.status(500).send({message: 'Error al guardar'})
    res.status(200).send({flete: fleteStored})
  })
}

function getAllFletes(req, res){
    console.log("getFletes")
        Flete.find({}, (err, sends) =>{
        if(err) return res.status(500).send({message: 'Error al realizar la peticion'})
        if(!sends) return res.status(404).send({message: 'Al parecer no hay envios aun '})

        console.log(sends)
        res.status(200).send({ sends })
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
  getAllFletes
  // getSend,
  // getSends,
  // putSend,
  // deleteSend,
  // postSend
}
