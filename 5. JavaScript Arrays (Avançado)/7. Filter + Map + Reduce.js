const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pairNumbers = numbers
// Procura os números pares
// [ 50, 80, 2, 8, 22] pares
.filter(value => value % 2 === 0)
// Dobra os números pares
// [100, 160, 4, 16, 44] dobro
.map(value => value * 2)
// reduzir ( soma tudo )
.reduce((accumulator, value) => accumulator + value)



console.log(pairNumbers) // 324