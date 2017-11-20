'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SendSchema = Schema ({
  "persona_id": {type: String },
  "fecha_creacion": { type: Date, default: Date.now() },
  "lapso_inicial_retiro": {  type: Date },
  "lapso_final_retiro": {  type: Date },
  "fecha_expiracion": {  type: Date },
  "subasta": { type: false },
  "asignado": { type: false },
  "activo": { type: false },
  "direccion":{
            "comuna": { type: String },
            "calle": { type: String },
            "numero": { type: Number },
            "dpto": { type: Number },
            }
  "propuesta_cliente": [
                        {//Puede tener varias
                            "obj_id_clienet": { type: String },
                            "Precio": { type: Number },
                            "comentario": { type: String }
                        }
                      ]
})

module.exports = mongoose.model('Send', SendSchema)
