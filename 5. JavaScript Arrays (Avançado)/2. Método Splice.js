//                                 -2          -1
//                0        1        2           3 
const names = ['Maria', 'João', 'Eduardo', 'Gabriel']

// names.splice(índice, delete, elemen1, elemen2, elemen3)

// push com splice()
names.splice(names.length, 0, 'Ariel', 'Adriana')
console.log(names)

// output -> [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Ariel' ]