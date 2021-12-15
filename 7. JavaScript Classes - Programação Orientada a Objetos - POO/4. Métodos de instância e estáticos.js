class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // método de instância
    aumentarVolume() {
        if(this.volume >= 100) return
        this.volume += 2
    }

    // método de instância
    diminuirVolume() {
        if(this.volume <= 0) return
        this.volume -= 2
    }

    // método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }
}

const controle1 = new ControleRemoto('LG')
// métodos de instância
controle1.aumentarVolume()
controle1.aumentarVolume()

// método estáticos
ControleRemoto.trocaPilha()

console.log(controle1)
// output ->
// ControleRemoto { tv: 'LG', volume: 4 }