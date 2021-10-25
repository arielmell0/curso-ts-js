function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}

const produto1 = new Produto('Camiseta', 50)
produto1.desconto(20)
console.log(produto1)

// Objeto literal
// Repare que não possui os métodos aumento e desconto
const produto2 = {
    nome: 'Tênis',
    preco: 120
}
Object.setPrototypeOf(produto2, Produto.prototype)
produto2.desconto(30)
// Repare que agora o produto2 possui o método aumento e desconto
console.log(produto2)

const produto3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 789
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})
produto3.aumento(10)
console.log(produto3)

// output ->
 
// Produto { nome: 'Camiseta', preco: 40 }
// Produto { nome: 'Tênis', preco: 84 }
// Produto { preco: 867.9, tamanho: 42 }