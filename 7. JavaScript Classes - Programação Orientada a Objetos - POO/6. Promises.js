function rand(max, min) {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error())

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Frase 1', rand(1, 4))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', rand(1, 4))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22222, rand(1, 4))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(erro => {
        console.log('Erro :', erro)
    })
