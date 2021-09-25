// Iteração com for of

// const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(let value of arrayOne) {
//     console.log(value)
// }

// Iteração com forEach

const arrayOne = [10, 20, 30, 40, 50, 60, 70, 80, 90]

arrayOne.forEach(function (value, index, completeArray) {
    console.log(value, index, completeArray)
})