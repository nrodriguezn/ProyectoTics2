'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PeopleSchema = new Schema({

  "nombre": { type: String },
  "apellido": { type: String },
  "email": { type: String, unique: true, lowercase: true },
  "telefono": { type: Number },
  "url_img": { type: String },
  "activo": false,
  "tipo": { type: String, enum: ['cliente', 'usuario']},
  "SignupDate": { type: Date, default: Date.now() },
  "direccion": {
        "comuna": { type: String },
        "calle": { type: String },
        "numero": { type: Number },
        "dpto": { type: Number },
  },
  "cedula": {
        "rut": { type: String },
        "num_ci": { type: String },
        "fecha_expiracion": { type: Date },
  },
  "vehiculo":
            [
              {
                    "tipo": {type: String, enum: ['camion', 'furgon', 'moto']},
                    "patente": {type: String},
                    "color": {type: String},
                    "url_img": {type: String}
              }
            ]

})


module.exports = mongoose.model('People', PeopleSchema)
