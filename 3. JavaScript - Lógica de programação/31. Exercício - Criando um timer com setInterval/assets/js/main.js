const relogio = document.querySelector('#clock')

const iniciar = document.querySelector('#start')
const pausar = document.querySelector('#pause')
const zerar = document.querySelector('#reset')

let seconds = 1;

function clock(seconds) {
    let time = new Date(seconds * 1000)

    return time.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

relogio.addEventListener('click', function (event) {
    relogio.innerHTML = clock(0)
})

iniciar.addEventListener('click', function (event) {
    setInterval(function () {
        relogio.innerHTML = clock(seconds) 
        seconds++
    }, 1000)
})

pausar.addEventListener('click', function (event) {
    alert('Clickei no pausar!')
})

zerar.addEventListener('click', function(event) {
    alert('Clickei no zerar!')
})
