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

// cópia com assign

const produto3 = {nome: 'Boneco', preco: 29.99}
const copia3 = Object.assign({}, produto3, {material: 'Plástico'}) 
// params. target -> objeto vazio, source -> alvo da cópia
// 3° param -> adicionais ao objeto que n existem no objeto original

produto3.nome = 'Boneco do Super-Man'

console.log(produto3)
console.log(copia3)

// output ->
// { nome: 'Boneco do Super-Man', preco: 29.99 }
// { nome: 'Boneco', preco: 29.99 }

// Object.freeze()
const produto4 = {nome: 'Paçoquinha', preco: 0.25}
Object.freeze(produto4)
produto4.preco = 0.50
console.log(produto4.preco)
// output -> 
// 0.25
// o objeto não foi alterado após o freeze

// Object.getOwnPropertyDescriptor() retorna as configurações da sua propriedade
console.log(Object.getOwnPropertyDescriptors(produto4))
// output -> 
// { nome:
//     { value: 'Paçoquinha',
//       writable: false,
//       enumerable: true,
//       configurable: false 
//     },
//    preco:
//     { value: 0.25,
//       writable: false,
//       enumerable: true,
//       configurable: false 
//     } 
// }

// Object.values()
console.log(Object.values(produto4)) // retorna somente os valores ignorando as chaves
// Output ->
// [ 'Paçoquinha', 0.25 ]

// Object.keys()
console.log(Object.keys(produto4)) // retorna somente as chaves ignorando os valores
// Output ->
// [ 'nome', 'preco' ]

// Object.entries()
console.log(Object.entries(produto4)) // retorna valor e chave dentro de um array
// output -> 
// [ [ 'nome', 'Paçoquinha' ], [ 'preco', 0.25 ] ]