// Conceito ->  um método de callback é uma rotina que é passada como parâmetro para outro método. 
// É esperado então que o método execute o código do argumento em algum momento. A invocação do trecho 
// pode ser imediata, como em um (callback síncrono), ou em outro momento (callback assíncrono)

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log("f1");
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log("f3");
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

// Executa o f1 e sómente depois chama o f2
function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log("Olá mundo!");
}
