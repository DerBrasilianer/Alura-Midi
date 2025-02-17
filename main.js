
function tocarSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    // Se elemento existe (!= null) E elemento...
    if (elemento && elemento.localName === 'audio') {
         elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = (`#som_${instrumento}`);

    tecla.onclick = function() {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa');
    }

}
