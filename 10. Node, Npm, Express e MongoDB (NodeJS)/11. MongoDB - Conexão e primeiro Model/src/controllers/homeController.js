exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`)
}