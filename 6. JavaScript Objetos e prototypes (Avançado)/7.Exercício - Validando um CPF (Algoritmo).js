const limpaCpf = function(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '')

    return cpfLimpo
}