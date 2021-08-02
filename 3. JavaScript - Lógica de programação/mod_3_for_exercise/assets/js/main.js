const elements = [
    { tag: 'p', text: 'Frase 1'},
    { tag: 'div', text: 'Frase 2'},
    { tag: 'footer', text: 'Frase 3'},
    { tag: 'section', text: 'Frase 4'},
]

function insertElements(){
    const mainSection = document.querySelector("#main-section");

    for (let i = 0; i < elements.length; i++) {
        const {tag, text} = elements[i]

        mainSection.innerHTML += `<${tag}>${text}</${tag}`
    }
}

insertElements()