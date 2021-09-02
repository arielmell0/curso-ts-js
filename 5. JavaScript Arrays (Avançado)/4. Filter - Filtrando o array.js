// retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callBackFilter(value, index, array) {
    return value > 10
}

const filteredNumbers = numbers.filter(callBackFilter)

console.log(filteredNumbers)