function indexIMC (){
    const form = document.querySelector('.form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')
        const resultado = document.querySelector('#resultado-imc')
        let situacao
        
        function IMC(){
            const imc = peso.value / altura.value ** 2
        
            return imc.toFixed(2)
        }

        if(IMC() < 18,5){
            situacao = 'Abaixo do peso'
        }else if(IMC() >= 18,5 && IMC() <= 24,9){
            situacao = 'Peso normal'
        }else if(IMC() >= 25 && IMC() <= 29,9){
            situacao = 'Sobrepeso'
        }else if(IMC() >= 30 && IMC() && 34,9){
            situacao = 'Obesidade Grau 1'
        }else if(IMC() >= 35 && IMC() <= 39,9){
            situacao = 'Obesidade Grau 2'
        }else if(IMC() >= 40){
            situacao = 'Obesidade grau 3'
        }else{
            situacao = 'Erro!'
        }

        resultado.innerHTML += `<p>IMC = ${IMC()} | ${situacao}</p>`
    })

}

indexIMC()