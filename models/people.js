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
  "tipo": { type: String, enum: ['cliente', 'usuario', 'administrador']},
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
//Calificacion
//"calificacion": {type: Number, enum: ['1','2','3','4','5']},
// if (tiene 1 calificacion de 5 de un envio entonces tiene 5 estrellas (el numero de envios tb se muestra pero esta en otro campo!))
// if (tiene 10 calificaciones de 5 estrellas de un total de 20 envios, entonces queda en 2,5 estrellas)
//pico es solo para limitar las estrellas, ahi decidimos los margenes


//esta bien, solo que tendria que ser
    // "calificacion": [{type: Number, enum: [1,2,3,4,5] } ],
        //asi luego le haces push y cuando queiras calcular su calificacion
        //calculas AVG de todos los datos que contenga calificacion que seria un arreglo bien largo



//Numero de envios,  si es cliente
// "numeroenvios" : {type: Number}

    //esta bien, pero usa camelCase, seria "numeroEnvios" : {type: Number}



//Empresa (independiente, empresas)
//"empresa" : {
//    NICO NOSE COMO PERO:
// IF (es empresa){
//               "nombreempresa": {type: String}
//               "rutempresa": {type: String}
//                "direccionempresa": {type: String}
//    } else {
//      es independiente nomas
//}


  //ESto tienes que hacerlo como hice el perfil de las personas, el tema es que Schema tiene una estructura, la cual
    //no necesariamente tienes que llenarla siempre, entonces si es independiente, lo marcas y pones menos datos nomas.

//}_
module.exports = mongoose.model('People', PeopleSchema)
