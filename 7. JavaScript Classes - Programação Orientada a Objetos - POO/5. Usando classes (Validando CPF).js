class ValidaCpf {
    constructor(cpfUsuario) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfUsuario.replace(/\D+/g, '')
        })
    }
}

const validaCpf = new ValidaCpf('024.225.820.44')
console.log(validaCpf)