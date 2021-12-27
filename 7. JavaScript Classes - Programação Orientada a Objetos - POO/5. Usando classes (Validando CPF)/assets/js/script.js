function showFormData(){
    const form = document.querySelector('.form')
    const results = document.querySelector('.resultado')
    const peopleData = [];

    // Maneira arcaica de realizar esse exercicío: 
    // form.onsubmit = function(evento){
    //     evento.preventDefault()
    //     alert("Olá mundo!")
    //     console.log("Foi enviado!")
    // };

    form.addEventListener('submit', (evento) => {
        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const people = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value, 
            altura: altura.value
        }
        results.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`

        peopleData.push(people)

        console.log(peopleData)        
    } )
    
}

showFormData()
