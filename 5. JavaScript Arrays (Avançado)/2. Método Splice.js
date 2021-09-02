//                                 -2          -1
//                0        1        2           3 
const names = ['Maria', 'João', 'Eduardo', 'Gabriel']

// names.splice(índice, delete, elemen1, elemen2, elemen3)
// pop

// Começa do -2 ou seja 0 -2 elementos do fim do array
// Number.MAX_VALUE representa o maior número do javascript
const removeds = names.splice(-2, Number.MAX_VALUE) 
console.log(names, removeds)

// output -> [ 'Maria', 'João' ] [ 'Eduardo', 'Gabriel' ]