// retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const biggerThan10 = []

function biggerThan(array, number) {
    for(let i of array) {
        if(i > number) {
            biggerThan10.push(i)
        }
    }
}

biggerThan(numbers, 10)

console.log(biggerThan10)