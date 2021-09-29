const people1 = new Object() // Com construtor 
//           = {}           -> Literal

// Atributo
people1.name = 'Ariel'

// Método
people1.sayHi = function () {
    console.log(`Hi ${this.name}, how are you?`)
}

// Chamando o método
people1.sayHi()