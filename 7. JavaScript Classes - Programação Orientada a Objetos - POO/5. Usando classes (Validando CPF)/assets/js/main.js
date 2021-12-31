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
}