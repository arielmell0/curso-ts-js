const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// retorna o valor do array para você manipular
const numbersX2 = numbers.map(value => value * 2)
// output -> [10, 100, 160...]

const people = [
    { name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Letícia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
]

// quando retornar um objeto via arrow function de uma linha
// o envolva em parenteses -> ({chave que voce quer: parâmetro.valor})
const names = people.map(obj => ({name: obj.name}))
console.log(names)
// output -> 
// [
//     { name: 'Luiz' },
//     { name: 'Maria' },
//     { name: 'Eduardo' },
//     { name: 'Letícia' },
//     { name: 'Rosana' },
//     { name: 'Wallace' }
//   ]

