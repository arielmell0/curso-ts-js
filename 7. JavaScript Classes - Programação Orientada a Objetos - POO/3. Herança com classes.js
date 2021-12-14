class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já está ligado.')
            return
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        // herda o método construtor do pai 
        super(nome)

        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)

        this.temWifi = temWifi
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }

    falaOi() {
        console.log('Oi')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy Note 10')
console.log(s1)
// output -> 
// Smartphone {
//     nome: 'Samsung',
//     ligado: false,
//     cor: 'Preto',
//     modelo: 'Galaxy Note 10'
//   }

const t1 = new Tablet('iPad', true)
t1.ligar()
t1.ligar()
t1.falaOi()
// output ->
// Olha, você alterou o método ligar.
// Olha, você alterou o método ligar.
// Oi