const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const armDigitalController = require('./src/controllers/armDigitalController')
const reactExtensionController = require('./src/controllers/reactExtensionController')
const equipesController = require('./src/controllers/equipesController')


// Home routes
route.get('/', homeController.paginaInicial)

//contato 
route.get('/contato', contatoController.contato)
//arm digital
route.get('/reactinnovation/armdigital', armDigitalController.armDigital)

route.get('/extension/home', reactExtensionController.homeExtension)

//Equipes
route.get('/equipes', equipesController.equipes)


module.exports = route