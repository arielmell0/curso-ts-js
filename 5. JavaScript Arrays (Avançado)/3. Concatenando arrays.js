const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

// método concat:
// const array3 = array1.concat(array2, [7, 8, 9], 'Ariel')
// output -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Ariel' ]

// usando spread operator (...)
const array3 = [...array1, 'Ariel', ...array2, ...[7, 8, 9]]

console.log(array3)
// output -> [ 1, 2, 3, 'Ariel', 4, 5, 6, 7, 8, 9 ]