//                0        1        2           3 
const names = ['Maria', 'João', 'Eduardo', 'Gabriel']

// names.splice(índice, delete, elemen1, elemen2, elemen3)
// pop
const removeds = names.splice(2, 2)
console.log(names, removeds)

// output -> [ 'Maria', 'João' ] [ 'Eduardo', 'Gabriel' ]