const btnStart = document.querySelector("#btnStart")
const btnRestore = document.querySelector('#btnRestore')
const btnPause = document.querySelector("#btnPause")
const spanCounting = document.querySelector('#couting')

// const btnMarkTurn = document.querySelector("#btnMarkTurn")

var second = 0
var minute = 0
var hour = 0

var coutingInterval = null

// var turns = []

btnStart.addEventListener('click', startCouting)

// btnMarkTurn.addEventListener('click', markTurn)

function startCouting(){
    // Inicia a contagem, adicionando e renderizando os numeros a cada 1s
    coutingInterval = setInterval(addCouting, 1000)

    // Desabilita o botao 'Iniciar' e remove o evento de click
    btnStart.classList.toggle('hidden')
    btnStart.removeEventListener('click', startCouting)

    // Habilita o botão 'Restaurar' e adiciona o evento de click
    btnRestore.classList.toggle('hidden')
    btnRestore.addEventListener('click', )

    // Habilita o botao 'Pausar' e adiciona o evento de click
    btnPause.classList.toggle('disabled')
    btnPause.addEventListener('click', stopCouting)
}

function addCouting(){
    // Função para adicionar os segundos, minutos ou horas

    if(second < 59){
        second++
    } else if(minute < 59){
        second = 0
        minute++
    } else{
        hour++
        minute = 0
        second = 0
    }

    renderCouting()
}

function renderCouting(){
    // Função para atualizar a contagem no html

    spanCounting.innerHTML = formatCouting()
}

function formatCouting(){
    // Função para retornar os numeros da contagem formatados

    let hourFormatted = hour > 9 ? hour : `0${hour}`
    let minuteFormatted = minute > 9 ? minute : `0${minute}`
    let secondFormatted = second > 9 ? second : `0${second}`

    return `${hourFormatted}:${minuteFormatted}:${secondFormatted}`
}

function stopCouting(){
    // Para a contagem
    clearInterval(coutingInterval)

    // Habilita o botao 'Iniciar' e adiciona o evento de click
    btnStart.classList.toggle('disabled')
    btnStart.addEventListener('click', startCouting)

    // Desabilita o botao 'Pausar' e remove o evento de click
    btnPause.classList.toggle('disabled')
    btnPause.removeEventListener('click', stopCouting)
}


// function markTurn(){
//     let couting = formatCouting()

//     turns.push(couting)

//     renderTurns()
// }

// function renderTurns(){
//     // Função que percorre o array com as voltas criando e adicionando cada uma delas na area

//     let areaTurns = document.querySelector('#areaTurns')
//     areaTurns.style.display = turns.length > 0 ? "block" : "none"

//     let tbody = document.querySelector('#areaTurns table tbody')
//     tbody.innerHTML = ''

//     for (let i = 0; i < turns.length; i++) {
//         tbody.appendChild(createTurnElement(i+1, turns[i]))
//     }

//     console.log(areaTurns)
// }

// function createTurnElement(position, time){
//     // Função para criar o elemento tr da volta

//     let lineTurn = document.createElement('tr')

//     let turn = document.createElement('td')
//     turn.innerHTML = position

//     let timeTurn = document.createElement('td')
//     timeTurn.innerHTML = time

//     let trash = document.createElement('td')
//     let trashIcon = document.createElement('i')
//     trashIcon.classList.add("ri-delete-bin-fill")
//     trash.appendChild(trashIcon)
//     trash.addEventListener('click', ()=>{
//         deleteTurn(position-1)
//     })

//     lineTurn.appendChild(turn)
//     lineTurn.appendChild(timeTurn)
//     lineTurn.appendChild(trash)

//     return lineTurn
// }

// function deleteTurn(position){
//     turns.splice(position, 1)

//     renderTurns()
// }

