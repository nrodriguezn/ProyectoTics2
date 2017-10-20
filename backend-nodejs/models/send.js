'use strict'

const Mongoose = require('mongoose')
const Schema = mongoose.Schema

const SendSchema = Schema ({
  "persona_id": {type: String },
  "fecha_creacion": { type: Date, default: Date.now() },
  "lapso_inicial_retiro": {  type: Date },
  "lapso_final_retiro": {  type: Date },
  "fecha_expiracion": {  type: Date },
  "subasta": { type: boolean },
  "asignado": { type: boolean },
  "activo": { type: boolean },
  "propuesta_cliente": {  ARREGLAR AQUI
      "obj_id_clienet": { type: String },
      "Precio": { type: Number },
      "comentario": { type: String },
})

module.exports = mongoose.model('Send', SendSchema)
