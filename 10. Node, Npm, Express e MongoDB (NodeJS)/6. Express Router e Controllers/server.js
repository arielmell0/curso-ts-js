const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const route = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(route)

app.listen(3030, () => {
    console.log('O servidor está rodando na porta 3030!')
})