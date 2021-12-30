class ValidaFormulario {
    constructor(cpf, nome, sobrenome, usuario, senha, repetirSenha) {
        this.cpf = cpf
        this.nome = nome
        this.sobrenome = sobrenome
        this.usuario = usuario
        this.senha = senha
        this.repetirSenha = repetirSenha

    }
}

const cpf = new ValidaFormulario('024.225.820-44')
console.log(cpf.validaCpf())