const limpaCpf = function(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '')

    return cpfLimpo
}

console.log(limpaCpf('920.432.123-44'))
// output ->
// 92043212344