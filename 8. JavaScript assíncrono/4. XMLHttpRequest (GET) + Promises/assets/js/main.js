const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', evento => {
    const element = evento.target
    const tag = element.tagName.toLowerCase()

    if(tag == 'a') {
        evento.preventDefault()
        carregaPagina(element)
    }
})

function carregaPagina(element) {
    const href = element.getAttribute('href')
    const objConfig = {
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response)
        }, 
        error(errorText) {
            console.log(errorText)
        }
    }

    request(objConfig)
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}