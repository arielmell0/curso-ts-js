const relogio = document.querySelector('#clock')

const iniciar = document.querySelector('#start')
const pausar = document.querySelector('#pause')
const zerar = document.querySelector('#reset')

relogio.addEventListener('click', function (event) {
    alert('Clickei no relogio')
})

iniciar.addEventListener('click', function (event) {
    alert('Clickei no iniciar!')
})

pausar.addEventListener('click', function (event) {
    alert('Clickei no pausar!')
})

zerar.addEventListener('click', function(event) {
    alert('Clickei no zerar!')
})
 