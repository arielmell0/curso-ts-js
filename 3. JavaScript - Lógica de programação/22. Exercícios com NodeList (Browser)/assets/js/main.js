const divParagraphs = document.querySelector('.paragraph')
//paragraphs retorna uma NodeList o que é algo mto similar a um array js
const paragraphs = divParagraphs.querySelectorAll('p')



function changePBackgroundColor(p){
    //obtém todos os estilos contidos no body
    const bodyStyles = getComputedStyle(document.body)
    const bodyBackgroundColor = bodyStyles.backgroundColor

    p.style.backgroundColor = bodyBackgroundColor
}

function changeFontColorForWhite(p){
    p.style.color = 'white'
}

for(let p of paragraphs){
    changePBackgroundColor(p)
    changeFontColorForWhite(p)
}