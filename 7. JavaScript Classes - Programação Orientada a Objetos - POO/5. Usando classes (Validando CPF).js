class ValidaCpf {
    constructor(cpfUsuario) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfUsuario.replace(/\D+/g, '')
        })
    }

    eSequencia() {
        return this.cpfLimpo.chatAt(0).repeat(11) === this.cpfLimpo
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.lenght !== 11) return false
        return 'Cheguei aqui!'
    }
}

const validaCpf = new ValidaCpf('024.225.820-44')
console.log(validaCpf.valida())