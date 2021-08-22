const name = 'Ariel'

function sayName() {
    // função criada aqui então chama a variável name de seu pai
    console.log(name)
}

function useSayName() {
    // A função lembra aonde foi criada
    const name = 'Mello'
    sayName()
}

useSayName()