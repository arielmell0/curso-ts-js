const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatosController = require('./controllers/contatosController')

// Rota da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rota contatos
route.get('/contatos', contatosController.paginaInicial)

module.exports = route