function rand(max, min) {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg)
        if(callback) callback()
    }, tempo)
}

// Com callback:
// Pode facilmente virar um callback hell (aninhamento gigante de callbacks)
// por isso n é a melhor solução
esperaAi('Frase 1', rand(1, 5), function() {
    esperaAi('Frase 2', rand(1, 5), function() {
        esperaAi('Frase 3', rand(1, 5))
    })
})