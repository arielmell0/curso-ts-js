// Declaração de função | (Function hoisting) -> a engine do js vai elevar a declaração de função para o topo do js.
function sayHi() {
    console.log('Hi')
}

// First-class objects (Objetos de primeira classe) 
// Function expression | Trata a função como um dado
const sayBye = function () {
    console.log('Bye')
}

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function!')
}

// Dentro de um objeto (método)
const people = {
    sayHello() {
        console.log('Hello!')
    }
}

people.sayHello()