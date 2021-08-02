const date = new Date()

function addZeroInLeft(num){
    return num > 9 ? num : `0${num}`
}

function dateInBrazilianFormat(date){
    let weekDay = date.getDay()
    const day = addZeroInLeft(date.getDate())
    let month = date.getMonth() + 1
    const year = addZeroInLeft(date.getFullYear())
    const hour = addZeroInLeft(date.getHours())
    const minutes = addZeroInLeft(date.getMinutes())
    const seconds = addZeroInLeft(date.getSeconds())

    switch(weekDay){
        case 0:
            weekDay = "Domingo"
        break;

        case 1:
            weekDay = "Segunda-feira"
        break;

        case 2:
            weekDay = "Terça-feira"
        break;

        case 3:
            weekDay = "Quarta-feira"
        break;

        case 4:
            weekDay = "Quinta-feira"
        break;

        case 5:
            weekDay = "Sexta-feira"
        break;

        case 6:
            weekDay = "Sabádo"
        break;
    }

    switch(month){
        case 1:
            month = "Janeiro"
        break

        case 2:
            month = "Fevereiro"
        break
        
        case 3:
            month = "Março"
        break

        case 4:
            month = "Abril"
        break

        case 5:
            month = "Maio"
        break

        case 6:
            month = "Junho"
        break

        case 7:
            month = "Julho"
        break

        case 8:
            month = "Agosto"
        break

        case 9:
            month = "Setembro"
        break

        case 10:
            month = "Outubro"
        break

        case 11:
            month = "Novembro"
        break

        case 12:
            month = "Dezembro"
        break
    }

    return `${weekDay}, ${day} de ${month} de ${year} ${hour}:${minutes}:${seconds}`
}

function showDate(){
    const h1Date = document.querySelector('#date')

    h1Date.innerHTML = dateInBrazilianFormat(date)
}

showDate()