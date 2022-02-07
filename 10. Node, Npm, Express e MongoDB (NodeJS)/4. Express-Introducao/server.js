const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário!')
})

app.get('/contatos', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!')
})

app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080!')
})