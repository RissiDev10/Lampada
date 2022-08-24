const on = document.getElementById('on')
const off = document.getElementById('off')
const lamp = document.getElementById('img')

function lampOn () {
    lamp.src = 'imagens/acessa.png'
}

function lampOff () {
    lamp.src = 'imagens/apagada.png'
}

on.addEventListener('click', lampOn)
off.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)




