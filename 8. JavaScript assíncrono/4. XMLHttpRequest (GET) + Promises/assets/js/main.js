const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', evento => {
    const element = evento.target
    const tag = element.tagName.toLowerCase()

    if (tag == 'a') {
        evento.preventDefault()
        carregaPagina(element)
    }
})

async function carregaPagina(element) {
    try {
        const href = element.getAttribute('href')
        const response = await fetch(href)
        if(response.status !== 200) throw new Error()
        const html = await response.text()
        carregaResultado(html)
    } catch(error) {
        console.error('Erro 404!', error)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}