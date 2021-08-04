const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

for(let numero of numeros) {
    //Pula para próximo elemento do laço (2 -> 4)
    if(numero === 3) {
        continue
    }

    //Break sai do laço (6 -> break -> sai do laço)
    if(numero === 7) {
        console.log('Você saiu do laço!')

        break
    }

    console.log(numero)
}

