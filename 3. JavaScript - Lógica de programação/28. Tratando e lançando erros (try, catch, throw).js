// try -> tenta executar o código, casa uma excessão seja lançada executa o bloco catch
// catch -> parametro é o erro, evitar de mostrar ao usuario para evitar uma mal UX
// o erro pode ser salvo numa log (parametro err abaixo)
try {
    console.log(variavelNaoExistente)
} catch(err) {
    console.log("Falha ao executar o bloco acima!")
}