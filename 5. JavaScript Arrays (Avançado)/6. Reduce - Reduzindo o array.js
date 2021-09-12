const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// mêsmos parâmetros do filter e map -> accumulator é o parâmetro que nos outros dois n tem
const total = numbers.reduce((accumulator, value, index, array) => {
    // retorna 0 e dps undefined
    //accumulator deve ser usado juntamente com um laço for 
    console.log(accumulator)
}, 0)

console.log(total)