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

console.log(stringToArray(limpaCpf('920.432.123-44')))
// output ->
// [ '9', '2', '0', '4', '3', '2', '1', '2', '3', '4', '4' ]

const validaCpf = function(cpf) {
    cpf.reduce(nCpf => nCpf*(1))
}