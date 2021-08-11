// Exemplo com finally
function retornaHora(date) {
    if(date && !(date instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if(!date) {
        date = new Date()
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hora = retornaHora()
    console.log(hora)
} catch(error) {
    // trata o erro
} finally {
    console.log('Tenha um bom dia!')
}