// arguments -> sustenta todos os argumentos enviados
function funcao() {
    let total = 0

    for(let argumento of arguments) {
        total += argumento
    }
}

// os argumentos não precisam estar setados como parametros 
funcao(1, 2, 3, 4, 5)