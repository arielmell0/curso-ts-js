//                                 -2          -1
//                0        1        2           3 
const names = ['Maria', 'João', 'Eduardo', 'Gabriel']

// names.splice(índice, delete, elemen1, elemen2, elemen3)

// unshift com splice
names.splice(0, 0, 'Nicolas', 'Gustavo')
console.log(names)

// output -> [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Ariel' ]