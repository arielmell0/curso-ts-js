const CriaProduto = function(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    Object.defineProperty(this, 'estoque', {
        enumerable:true,  // mostra a chave (mostra o valor no for)
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true 
        // configurável: posso declarar outro Object.defineProperty
        // e alterar as configurações do Object.defineProperty atual
        // caso false tbm não posso apagar a propriedade
    })
}

const camiseta = new CriaProduto('Camiseta', 24.99, 20) // usar new em funções construtoras também
console.log(camiseta)

for(let chave in camiseta) {
    console.log(chave)
}