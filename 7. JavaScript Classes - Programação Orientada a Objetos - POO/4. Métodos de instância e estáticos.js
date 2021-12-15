class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        if(this.volume >= 100) return
        this.volume += 2
    }

    diminuirVolume() {
        if(this.volume <= 0) return
        this.volume -= 2
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1)
// output ->
// ControleRemoto { tv: 'LG', volume: 4 }