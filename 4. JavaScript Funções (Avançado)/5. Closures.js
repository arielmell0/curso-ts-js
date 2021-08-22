// Closure é a habilidade que a função tem de acessar seu escopo léxico

function returnFunction(name) {
    return function () {
        return name
    }
}

const functionOne = returnFunction('Ariel') // fecha o escopo com o closure 'Ariel'
const functionTwo = returnFunction('Mello') // Nessa função sempre vai ser 'Mello'

// abra no console do navegador para ver a diferença entre .log e .dir
// olhar os closure no console do navegador
console.dir(functionOne)
console.dir(functionTwo)

console.log(functionOne(), functionTwo())