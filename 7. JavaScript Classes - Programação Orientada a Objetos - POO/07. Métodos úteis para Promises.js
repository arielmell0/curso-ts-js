function rand(max, min) {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error())

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// Métodos para promisses
// Método: Promise.all (resolve todas as Promises)
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 1000),
    esperaAi('Promise 3', 3000),
    'Outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

// output ->
// [
//   'Primeiro valor',
//   'PROMISE 1 - Passei na promise',
//   'PROMISE 2 - Passei na promise',
//   'PROMISE 3 - Passei na promise',
//   'Outro valor'
// ]

Promise.race(promises)
    .then((primeiroValorResolvido) => {
        console.log(primeiroValorResolvido)
    })
    .catch((erro) => {
        console.log('Oops! Ocorreu um erro \n', erro)
    })

// Output ->
// Primeiro valor (retorna esse valor pois já é uma Promise resolvida (sem tempo de espera))