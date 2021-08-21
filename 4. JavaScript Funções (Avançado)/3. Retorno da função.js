function createMultiplier(multiplier) {
    // multiplicador 
    return function(n) {
        return n * multiplier;
    }
}

// closure function abaixo
// fecham o escopo da função
const double = createMultiplier(2)
const triple = createMultiplier(3)
const quadriple = createMultiplier(4)

console.log(double(10))
console.log(triple(10))
console.log(quadriple(10))