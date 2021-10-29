const limpaCpf = function(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '')

    return cpfLimpo
}

const stringToArray = function(limpaCpf) {
    return (Array.from(limpaCpf))
}

console.log(stringToArray(limpaCpf('920.432.123-44')))
// output ->
// [ '9', '2', '0', '4', '3', '2', '1', '2', '3', '4', '4' ]