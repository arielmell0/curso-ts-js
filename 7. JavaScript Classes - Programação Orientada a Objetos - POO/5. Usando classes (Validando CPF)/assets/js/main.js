class ValidaFormulario {
    static limpaCpf(cpf) {
        const arrayCpf = [...cpf]
        let arrayLimpo = ''

        for(let i = 0; i < 14; i++) {
            if(arrayCpf[i] !== '.' && arrayCpf[i] !== '-') {
                arrayLimpo += arrayCpf[i]
            }
        }

        console.log(arrayLimpo)
    }
}

ValidaFormulario.limpaCpf('024.225.820-44')
// 02422582044