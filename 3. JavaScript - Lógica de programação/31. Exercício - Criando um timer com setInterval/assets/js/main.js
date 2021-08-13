const relogio = document.querySelector('.clock')
const iniciar = document.querySelector('.start')
const pausar = document.querySelector('.pause')
const zerar = document.querySelector('.reset')

let seconds = 0
let clockState

function clock(seconds) {
    let time = new Date(seconds * 1000)

    return time.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

document.addEventListener('click', function (event) {
    const clickTarget = event.target

    if(clickTarget.classList.contains('start')) {
        relogio.classList.remove('paused')

        clockState = setInterval(function () {
            seconds++
            relogio.innerHTML = clock(seconds) 
        }, 1000)
    }else if(clickTarget.classList.contains('pause')) {
        relogio.classList.add('paused')
    
        setTimeout(function () {
            clearInterval(clockState)
        }, 0)
    }else if(clickTarget.classList.contains('reset')) {
        relogio.classList.remove('paused')

        seconds = 0
        relogio.innerHTML = clock(seconds)
        clearInterval(clockState)
    }
})