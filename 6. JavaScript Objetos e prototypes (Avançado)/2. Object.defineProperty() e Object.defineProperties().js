const CriaProduto = function(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    // definir propriedades com mais precisão
    Object.defineProperty(this, 'estoque', {
        enumerable:true,  // mostra a chave (mostra o valor no for)
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true 
        // configurável: posso declarar outro Object.defineProperty
        // e alterar as configurações do Object.defineProperty atual
        // caso false tbm não posso apagar a propriedade
    })

    // para mais de uma propriedade: 
    Object.defineProperties(this, {
        nome2: {
            enumerable: true,
            value: 'Camiseta manga curta',
            writable: true,
            configurable: true
        },

        preco2: {
            enumerable: true,
            value: 39.49,
            writable: true,
            configurable: true
        },

        estoque2: {
            enumerable: true,
            value: 5,
            writable: true,
            configurable: true
        }
    })
}

const camiseta = new CriaProduto('Camiseta', 24.99, 20) // usar new em funções construtoras também
console.log(camiseta)

for(let chave in camiseta) {
    console.log(chave)
}