'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FleteSchema = Schema({
  "persona_id": {
    type: String
  },
  "fechaCreacion": {
    type: Date,
    default: Date.now()
  },
  "horarioRetiro": {
    type: String
  },
  "subasta": {
    type: String,
    default: "Normal"
  },
  "titulo": {
    type: String
  },
  "comentario": {
    type: String
  },
  "urlImagen": {
    type: String
  },
  "direccionOrigen": {
    "comuna": {
      type: String
    },
    "calle": {
      type: String
    },
    "numero": {
      type: String
    },
  },
  "direccionDestino": {
    "comuna": {
      type: String
    },
    "calle": {
      type: String
    },
    "numero": {
      type: String
    },
  },
  "id_usuario_mongodb": {
    type: String
  },
  "ofertado": [{
    "id_usuario": {
      type: String
    },
    "monto": {
      type: String
    }

  }]
})

module.exports = mongoose.model('Flete', FleteSchema)