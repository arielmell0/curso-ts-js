// Utilizando a mesma função que retorna a hora do arquivo 29

function retornaHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

//Essa função somente serve para mostrar o valor da outra função na tela
function funcaoDoIntervalo() {
    console.log(retornaHora())
}

// Primeiro parâmetro é uma referência a função (sem as aspas para não executar) e o 
// segundo parâmetro é o tempo em milisegundos.
setInterval(funcaoDoIntervalo, 1000)