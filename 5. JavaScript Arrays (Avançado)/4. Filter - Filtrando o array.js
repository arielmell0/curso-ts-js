// retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// quando a função tem só uma linha o retorno é implicito
const filteredNumbers = numbers.filter(value => value > 10) 

//console.log(filteredNumbers)
// output -> [ 50, 80, 11, 15, 22, 27 ]

const people = [
    { name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Letícia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
]

const peopleWithLargeName = people.filter (obj => obj.name.length >= 5)
const peopleWithMoreThan50Years = people.filter(obj => obj.age > 50)
const nameEndsWithA = people.filter(obj => {
    return obj.name.toLowerCase().endsWith('a')
})

console.log(nameEndsWithA)
// output -> 
// [
//   { name: 'Maria', age: 23 },
//   { name: 'Letícia', age: 19 },
//   { name: 'Rosana', age: 32 }
// ]