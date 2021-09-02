//                 0         1        2
const names = ['Eduardo', 'Maria', 'Joana']
const names2 = names

names.pop()
// Como names está sendo passado só como referência para names2
// Todas as alterações em um são refletidas no outro
console.log(names)