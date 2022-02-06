const fs = require('fs')
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' }
]
const json = JSON.stringify(pessoas, '', 2)

fs.writeFile(caminhoArquivo, json, {flag: 'w', encoding: 'utf8'}, (err) => {
    if(err) throw err

    console.log('Arquivo salvado com sucesso!')
})