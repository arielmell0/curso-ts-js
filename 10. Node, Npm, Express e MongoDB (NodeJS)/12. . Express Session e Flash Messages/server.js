require('dotenv').config()

const express = require('express')
const app = express()

const session = require('express-session')
const mongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const mongoose = require('mongoose')
const path = require('path')
const meuMiddlewareGlobal = require('./src/middlewares/middleware')
const MongoStore = require('connect-mongo')

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado à base de dados.')
        app.emit('pronto')
    })
    .catch((e) => console.log(e))

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'dwadawdpawjdpawjdoawd9219319dwa291',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 27 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Nossos proprios middlewares
app.use(meuMiddlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3030, () => {
        console.log('O servidor está rodando na porta 3030!')
    })
})