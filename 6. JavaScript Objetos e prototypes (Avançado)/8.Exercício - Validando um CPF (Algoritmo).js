// 705.484.450-52 070.987.720-03
//
// 7x 0x 5x 4x 8x 4x 4x 5x 0x
// 10 9  8  7  6  5  4  3  2
// 70 0  40 28 48 20 16 15 0 = 237
//
// 11 - (237 % 11) = 5 (Primeiro digito)
// Se o número do digito for maior que 9, consideramos 0
//
// 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
// 11 10 9  8  7  6  5  4  3  2
// 77  0 45 32 56 24 20 20 0 10 = 284
//
// 11 - (284% 11) = 2 (Primeiro digito)
// se o numero do digito for maior que 9, consideramos 0

const limpaCpf = function(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '')

    return cpfLimpo
}

const stringToArray = function(limpaCpf) {
    return (Array.from(limpaCpf)) //transforma a string em array 
}
// output ->
// [ '9', '2', '0', '4', '3', '2', '1', '2', '3', '4', '4' ]

const validaCpf = function(cpf) {
    let arrayCpf = stringToArray(limpaCpf(cpf))

    const primeiraSoma = function() {
        let somaDoArray = 0

        somaDoArray += Number(arrayCpf[0]) * 10
        somaDoArray += Number(arrayCpf[1]) * 9
        somaDoArray += Number(arrayCpf[2]) * 8
        somaDoArray += Number(arrayCpf[3]) * 7
        somaDoArray += Number(arrayCpf[4]) * 6
        somaDoArray += Number(arrayCpf[5]) * 5
        somaDoArray += Number(arrayCpf[6]) * 4
        somaDoArray += Number(arrayCpf[7]) * 3
        somaDoArray += Number(arrayCpf[8]) * 2
        
        return somaDoArray
    }

    const segundaSoma = function() {
        let somaDoArray = 0

        somaDoArray += Number(arrayCpf[0]) * 11
        somaDoArray += Number(arrayCpf[1]) * 10
        somaDoArray += Number(arrayCpf[2]) * 9
        somaDoArray += Number(arrayCpf[3]) * 8
        somaDoArray += Number(arrayCpf[4]) * 7
        somaDoArray += Number(arrayCpf[5]) * 6
        somaDoArray += Number(arrayCpf[6]) * 5
        somaDoArray += Number(arrayCpf[7]) * 4
        somaDoArray += Number(arrayCpf[8]) * 3
        somaDoArray += Number(arrayCpf[9]) * 2
        
        return somaDoArray
    }
  
    const validaPrimeiraSoma = 11 - (primeiraSoma() % 11)
    const validaSegundaSoma = 11 - (segundaSoma() % 11)


    if(validaPrimeiraSoma === Number(arrayCpf[9]) && validaSegundaSoma === Number(arrayCpf[10])) {
        console.log('Cpf é válido!')
        return true
    } else {
        console.log('Cpf inválido')
        return false
    }
    
}

validaCpf('024.225.820-44')

