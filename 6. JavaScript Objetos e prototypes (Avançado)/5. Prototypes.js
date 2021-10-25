// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveA: 'B'
    // __proto__: Object.prototype
}

const objC = new Object()
objC.chaveC = 'C'

// aninhando os prototypes para facilitar o entendimento
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA)

// não é correto alterar o prototype de um objeto, pode afetar
// a performance do código!!