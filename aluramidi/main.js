function tocaSom(idAudio) {
    const  elemento = document.querySelector(`${idAudio}`);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }

    console.log('Elemento não encontrado');
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const buttonClass = tecla.classList[1];
    const idAudio = `#som_${buttonClass}`

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador++;

    
    tecla.onkeydown = function(evento) {
        if (evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter') {
        tecla.classList.add('ativa');
    }}

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}