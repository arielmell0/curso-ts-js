// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome,preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Generico', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plástico', 5)
caneca.estoque = 100

console.log(caneca.estoque)
console.log(caneca)
console.log(camiseta)
console.log(produto)

// output ->
// 100
// Caneca {
//   nome: 'Caneca',
//   preco: 13,
//   material: 'Plástico',
//   estoque: [Getter/Setter] }
// Camiseta { nome: 'Regata', preco: 7.5, cor: 'Preta' }
// Produto { nome: 'Generico', preco: 111 }