var contador = 1;
// Inicializa la variable 'contador' en 1

var temporizador;
// Declara una variable 'temporizador' para controlar el intervalo de cambio de imágenes

function iniciar() {
    temporizador = setInterval(rotarImagenes, 3000);
    // Inicia un temporizador que llama a 'rotarImagenes' cada 3 segundos
}

function rotarImagenes() {
    if (contador >= 10) {
        contador = 0;
        // Reinicia 'contador' a 0 si llega a 10
    }

    var img = document.getElementById('imgSlide');
    // Obtiene el elemento de la imagen usando el id 'imgSlide'

    img.src = '../images/img' + ++contador + '.jpg';
    // Cambia la fuente de la imagen a la siguiente en la secuencia incrementando 'contador'
}
