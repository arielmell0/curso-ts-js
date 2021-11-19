const pessoas = [
    {id: 3, nome: 'Ariel'},
    {id: 2, nome: 'Gustavo'},
    {id: 1, nome: 'Brenda'}
]

// const novasPessoas = {}
// for(const pessoa of pessoas) {
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa}
// }

// console.log(novasPessoas)
// output -> 
// { '1': { id: 1, nome: 'Brenda' },
//   '2': { id: 2, nome: 'Gustavo' },
//   '3': { id: 3, nome: 'Ariel' } }
// o javascript muda a ordem de saida dos elementos para ordem numerica
// usando o objeto Map() vc evita o problema da troca de ordem

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa
    // set para definir 
    novasPessoas.set(id, {...pessoa})
}

// com o método keys retorna só as chaves e com o método
// value retorna todos os valores
// for(const pessoas of novasPessoas.value()) {
//     console.log(pessoas)
// }

// deletando o id 2
novasPessoas.delete(2)
console.log(novasPessoas)

