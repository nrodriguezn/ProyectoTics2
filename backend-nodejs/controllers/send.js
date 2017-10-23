'use strict'

const Send = require('../models/send')


function postSend(req, res) {
    res.status(200).send({message: 'Bien Implementado'})
}

function getSend(req, res) {
    res.status(200).send({message: 'Bien Implementado'})
}

function getSends(req, res) {
    res.status(200).send({message: 'Bien Implementado'})
}

function putSend(req, res) {
    res.status(200).send({message: 'Bien Implementado'})
}

function deleteSend(req, res) {
    res.status(200).send({message: 'Bien Implementado'})
}

function getComplete(req, res) {
    res.status(200).send({message: 'Bien Implementado'})
}

module.exports = {
  getSend,
  getSends,
  putSend,
  deleteSend,
  postSend
}
