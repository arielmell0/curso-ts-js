class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.')
            this.formulario.submit()
        }
    }

    camposSaoValidos() {
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText

            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    senhaSaoValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            valid = false
            this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirSenha, 'Campo senha e repetir senha precisam ser iguais.')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.')
        }

        return valid
    }
}