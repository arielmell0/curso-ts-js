const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const connectionString = 'link de conexão com o banco de dados aqui'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Banco de dados conectado.'))

const path = require('path')
const meuMiddlewareGlobal = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Nossos proprios middlewares
app.use(meuMiddlewareGlobal)
app.use(routes)

app.listen(3030, () => {
    console.log('O servidor está rodando na porta 3030!')
})