// IIFE -> immediately invoked function express
// A função anônima é envolvida em parentêses 
(function (age, weight, height){
    const surname = 'Mello'

    function createName(name) {
        return name + ' ' + surname
    }

    function sayName() {
        console.log(createName('Ariel'))
    }

    sayName()
    console.log(age, weight, height)
})(19, 84, 1.84) // esses parênteses passam os argumentos 