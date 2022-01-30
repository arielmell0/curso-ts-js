const nome = 'Ariel'
const sobrenome = 'Oliveira de Mello'

const falaNome = () => `${nome} ${sobrenome}`

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome // referência

// ou usando somente o this
this.qualquerCoisa = 'O que eu quiser exportar'