// Como copiar objetos

// Aqui os valores de produto estão sendo somente referenciados 
const produto = {nome: 'Caneca', preco: 10.99}
const referencia = produto

produto.nome = 'Outro nome'
referencia.preco = 2.5
console.log(produto)
console.log(referencia)

// output -> { nome: 'Outro nome', preco: 2.5 }
// output -> { nome: 'Outro nome', preco: 2.5 }

// Com spread operator conseguimos realizar a cópia do objeto

const produto2 = {nome: 'Caneca', preco: 10.99}
const copia = {...produto2}

produto2.nome = 'Outro nome'
copia.preco = 2.5
console.log(produto2)
console.log(copia)

// output -> { nome: 'Outro nome', preco: 10.99 }
// output -> { nome: 'Caneca', preco: 2.5 }

// copia é independente de produto