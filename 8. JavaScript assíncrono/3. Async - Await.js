function rand(max = 0, min = 3) {
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

// esperaAi('Frase 1', rand(1, 4))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 2', rand(1, 4))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 3', rand(1, 4))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .catch(erro => {
//         // caso algum erro aconteça
//         console.log('Erro :', erro)
//     })
// output -> 
// Frase 1
// Frase 2
// Frase 3

// Maneira menos verbosa com async / await

async function executa() {
    const frase1 = await esperaAi('Frase 1', rand())
    console.log(frase1)
    const frase2 = await esperaAi('Frase 2', rand())
    console.log(frase2)
    const frase3 = await esperaAi('Frase 3', rand())
    console.log(frase3)
}
executa()
// output ->
// Frase 1
// Frase 2
// Frase 3