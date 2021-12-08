class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

const pessoa = new Pessoa('Ariel', 'Oliveira de Mello')

console.log(pessoa)
// output -> 
// Pessoa { nome: 'Ariel', sobrenome: 'Oliveira de Mello' }