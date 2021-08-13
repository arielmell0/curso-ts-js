const relogio = document.querySelector('#clock')
const iniciar = document.querySelector('#start')
const pausar = document.querySelector('#pause')
const zerar = document.querySelector('#reset')

let seconds = 0;
let clockState

function clock(seconds) {
    let time = new Date(seconds * 1000)

    return time.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

relogio.addEventListener('click', function (event) {
    
})

iniciar.addEventListener('click', function (event) {
    clockState = setInterval(function () {
        seconds++
        relogio.innerHTML = clock(seconds) 
    }, 1000)
})

pausar.addEventListener('click', function (event) {
    setTimeout(function () {
        clearInterval(clockState)
    }, 0)
})

zerar.addEventListener('click', function(event) {
    seconds = 0
    relogio.innerHTML = clock(seconds)
})