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
    hideButton(btnStart, startCouting)

    // Habilita o botão 'Restaurar' e adiciona o evento de click
    showButton(btnRestore, restoreCouting)
    btnRestore.addEventListener('click', restoreCouting)

    // Habilita o botao 'Pausar' e adiciona o evento de click
    btnPause.classList.toggle('disabled')
    showButton(btnPause, stopCouting)
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
    showButton(btnStart, startCouting)

    // Desabilita o botao 'Pausar' e remove o evento de click
    hideButton(btnPause, stopCouting)
    btnPause.classList.toggle("disabled")
}

function hideButton(button, func){
    button.classList.add("hidden")
    button.removeEventListener('click', func)
}

function showButton(button, func){
    button.classList.remove('hidden')
    button.addEventListener('click', func)
}

function disabledButton(button, func){
    button.classList.toggle('disabled')
    button.removeEventListener('click', func)
}

function restoreCouting(){
    // Zera oks segundos, minutos e horas
    second = 0
    minute = 0
    hour = 0    

    // Para a contagem
    clearInterval(coutingInterval)

    // Renderizar a contagem zerada na tela
    renderCouting()

    // Mostra o botao 'Restaurar'
    hideButton(btnRestore, restoreCouting)

    //Mostra o botão 'Iniciar'
    showButton(btnStart, startCouting)

    //Mostrar o botão 'Pausar', porem desbilitado
    
    btnPause.classList.remove('hidden')
    disabledButton(btnPause, stopCouting)
}
