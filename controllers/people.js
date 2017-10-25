'use strict'

const People = require('../models/people')

function postProfile ( req, res ) {
  res.status(200).send({message: 'Bien Implementado'})
}

function getProfile(req, res) {
  res.status(200).send({message: 'Bien Implementado'})
}

function getProfiles(req, res) {
  res.status(200).send({message: 'Bien Implementado'})
}

function putProfile(req, res) {
  res.status(200).send({message: 'Bien Implementado'})
}

function deleteProfile(req, res) {
  res.status(200).send({message: 'Bien Implementado'})
}


module.exports = {
  getProfile,
  getProfiles,
  putProfile,
  deleteProfile,
  postProfile
}
