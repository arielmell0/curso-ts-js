// Função construtora ->
// - Retorna objeto
// - People (new)
// - É um molde para montar novos objetos
function People(name, surname) {
    // Ótima maneira de declarar métodos internos
    // Atributos ou métodos privados
    const internMethod = function () {
        // faz algo
    }

    // Atributos ou métodos públicos
    this.name = name
    this.surname = surname
}

const peopleOne = new People('Ariel', 'Mello')

console.log(peopleOne.name)
