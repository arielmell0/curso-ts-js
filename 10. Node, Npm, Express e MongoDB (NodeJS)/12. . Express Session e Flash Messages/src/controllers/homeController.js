const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: "Um título de testes 3",
    descricao: 'Uma descrição de testes 3'
})
    .then((dados) => console.log(dados))
    .catch((erro) => console.log(`Ops ocorreu um erro: ${erro}`))

exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Ariel', logado: true }
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`)
}