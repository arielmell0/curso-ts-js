// b e c possuem 2 e 4 como valores padroes caso n recebam argumentos
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}

// única maneira de que b seja o valor padrão é enviar undefined
funcao(2, undefined, 20)