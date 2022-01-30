const nome = 'Ariel'
const sobrenome = 'Oliveira de Mello'

const falaNome = () => {
    console.log(nome, sobrenome)
};

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome - falaNome // referência

// ou usando somente o this
this.qualquerCoisa = 'O que eu quiser exportar'

console.log(module)
// Output ->
// Module {
//     id: '.',
//     path: 'c:\\Users\\Ariel\\Documents\\curso-ts-js\\10. Node, Npm, Express e MongoDB (NodeJS)\\Módulos',
//     exports: {
//       nome: 'Ariel',
//       sobrenome: 'Oliveira de Mello',
//       qualquerCoisa: 'O que eu quiser exportar'
//     },
//     filename: 'c:\\Users\\Ariel\\Documents\\curso-ts-js\\10. Node, Npm, Express e MongoDB (NodeJS)\\Módulos\\Modulo1.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'c:\\Users\\Ariel\\Documents\\curso-ts-js\\10. Node, Npm, Express e MongoDB (NodeJS)\\Módulos\\node_modules',
//       'c:\\Users\\Ariel\\Documents\\curso-ts-js\\10. Node, Npm, Express e MongoDB (NodeJS)\\node_modules',
//       'c:\\Users\\Ariel\\Documents\\curso-ts-js\\node_modules',
//       'c:\\Users\\Ariel\\Documents\\node_modules',
//       'c:\\Users\\Ariel\\node_modules',
//       'c:\\Users\\node_modules',
//       'c:\\node_modules'
//     ]
//   }