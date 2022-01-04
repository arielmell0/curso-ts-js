function rand(max, min) {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

// funções não irão executar na ordem correta, pois dependem do tempo
// para executa-las na ordem correta(1, 2, 3) deve-se usar callbacks ou promisses para resolver o problema

esperaAi('Frase 1', rand(1, 5))
esperaAi('Frase 2', rand(1, 5))
esperaAi('Frase 3', rand(1, 5))