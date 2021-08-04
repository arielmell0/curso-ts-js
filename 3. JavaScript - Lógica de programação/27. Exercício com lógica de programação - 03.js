// Escreva uma função que recebe um número e 
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o que receber
// Use a função com números de 0 a 100

function fizzBuzz(num) {
    if(isNaN(num)){
        return num
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return num
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } 
}

console.log(fizzBuzz('5'))