const _velocidade = Symbol('Velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        console.log('SETTER')
        this[_velocidade] = valor
    } 

    get velocidade() {
        console.log('GETTER')
        return this[_velocidade]
    }

    acelerar() {
        if(this.velocidade >= 100) return
        this.velocidade++
    }

    freiar() {
        if(this.velocidade <= 0) return
        this.velocidade--
    }
}

const carro1 = new Carro('Fusca')

carro1.velocidade = 55
console.log(carro1.velocidade)
// output ->
// SETTER
// GETTER
// 55
