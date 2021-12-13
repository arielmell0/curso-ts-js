class Pessoa1 {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome 
    this.sobrenome = sobrenome

    Pessoa2.prototype.falar = function() {
        console.log(`${this.nome} está falando.`)
    }
}

const pessoa1 = new Pessoa1('Ariel', 'Oliveira de Mello')
const pessoa2 = new Pessoa2('Ariel', 'Oliveira de Mello')

console.log(pessoa1)
console.log(pessoa2)
// output -> 
// Observar no browser para melhor entendimento dos prototypes