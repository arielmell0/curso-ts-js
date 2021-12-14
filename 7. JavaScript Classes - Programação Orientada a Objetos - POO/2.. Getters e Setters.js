class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

const pessoa1 = new Pessoa('Ariel', 'Oliveira de Mello')
pessoa1.nomeCompleto = 'Ariel Oliveira'
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
// output ->
// Ariel
// Oliveira
