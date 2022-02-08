const { query } = require('express')
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

// recebendo parametros via URL
app.get('/teste/:primeiroParametro?/:segundoParametro?', (req, res) => {
    res.send(req.params)
})

// recebendo a requisição
app.post('/', (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3030, () => {
    console.log('O servidor está rodando na porta 3030!')
})