// Como o arguments não funcionam em arrow e funcoes anonimas use o 
// rest operator no parametro quando precisar obter varios numeros
const conta = (...args) => {
    console.log(args)
}

conta('+', 1, 2, 10, 32)