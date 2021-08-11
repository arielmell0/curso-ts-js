// Utilizando a mesma função que retorna a hora do arquivo 29

function retornaHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// Primeiro parâmetro é uma referência a função (sem as aspas para não executar) e o 
// segundo parâmetro é o tempo em milisegundos.
const timer = setInterval(function () {
    console.log(retornaHora())
}, 1000)

// Executa somente uma vez aquilo que é passado no primeiro parâmetro
// No segundo parâmetro é daqui a quanto tempo isso vai ser executado
setTimeout(function () {
    clearInterval(timer)
}, 6000)