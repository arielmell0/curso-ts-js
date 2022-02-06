const fs = require('fs')
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

fs.writeFile(caminhoArquivo, 'Olá mundo!\n', {flag: 'a', encoding: 'utf8'})