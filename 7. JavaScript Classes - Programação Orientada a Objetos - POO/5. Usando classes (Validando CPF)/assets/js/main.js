class ValidaFormulario {
    constructor(cpf, nome, sobrenome, usuario, senha, repetirSenha) {
        this.cpf = cpf
        this.nome = nome
        this.sobrenome = sobrenome
        this.usuario = usuario
        this.senha = senha
        this.repetirSenha = repetirSenha
    }

    limpaCpf() {
        const arrayCpf = [...this.cpf]
        let arrayLimpo = new Array()

        for(let i = 0; i < 14; i++) {
            if(arrayCpf[i] !== '.' && arrayCpf[i] !== '-') {
                arrayLimpo.push(arrayCpf[i])
            }
        }

        return arrayLimpo
    }

    static validaCpf(cpfLimpo) {
        
    }
}

const usuario1 = new ValidaFormulario('024.225.820-44', 'Ariel', 'Oliveira', 'coxinha123', 'coxinha123')
console.log(usuario1.limpaCpf())
// retorna o array sem pontos e traços 
// output ->
// [
//     '0', '2', '4', '2',
//     '2', '5', '8', '2',
//     '0', '4', '4'
// ]