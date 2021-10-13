const CriaProduto = function(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    // definir propriedades com mais precisão
    Object.defineProperty(this, 'estoque', {
        enumerable:true,  // mostra a chave (mostra o valor no for)
        // value: estoque, // usaremos getters e setters então eles vão fornecer os valores
        // writable: true, // retiramos o writable por que teremos métodos para trabalhar o nosso valor (setter)
        get: function() {
            return estoque
        },
        configurable: true 
        // configurável: posso declarar outro Object.defineProperty
        // e alterar as configurações do Object.defineProperty atual
        // caso false tbm não posso apagar a propriedade
    })
}

const camiseta = new CriaProduto('Camiseta', 24.99, 20) // usar new em funções construtoras também
console.log(camiseta)

// output -> CriaProduto { nome: 'Camiseta', preco: 24.99, estoque: [Getter] }