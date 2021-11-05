function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta 
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        this.verSaldo()
        return
    }

    this.saldo -= valor
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Você possui ${this.saldo}R$ de saldo.`)
}

const conta1 = new Conta(3306, 2311, 25)
console.log(conta1)
// output -> 
// Conta { agencia: 3306, conta: 2311, saldo: 25 }