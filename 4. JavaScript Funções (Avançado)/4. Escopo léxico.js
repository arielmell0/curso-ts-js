const name = 'Ariel'

function sayName() {
    const name = 'Mello'
    console.log(name)
}

function useSayName() {
    sayName()
}

// Retorna Mello pois primeiro a função usa as váriaveis dentro do seu escopo
// e somente depois busca no escopo do seu pai, ou pai do seu pai
useSayName()