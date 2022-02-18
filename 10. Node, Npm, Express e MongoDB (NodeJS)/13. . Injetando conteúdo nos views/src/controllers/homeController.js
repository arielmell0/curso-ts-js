const HomeModel = require('../models/HomeModel')

HomeModel.find()
    .then((dados) => console.log(dados))
    .catch((erro) => console.log(`Ops ocorreu um erro: ${erro}`))

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
    return
}

exports.trataPost = (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`)
}