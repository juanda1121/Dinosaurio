let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Genera un número secreto aleatorio entre 1 y 10

let intentos = 0;
// Inicializa un contador para llevar la cuenta de los intentos

function adivinar() {
    let intento = document.getElementById("numero").value;
    // Obtiene el valor del campo de entrada donde el usuario ingresa su número

    intentos++;
    // Incrementa el contador de intentos

    if (intento == numeroSecreto) {
        document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos.";
        // Si el número ingresado es el correcto, muestra un mensaje de éxito con el número de intentos
    } else if (intento < numeroSecreto) {
        document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo";
        // Si el número ingresado es menor, da una pista de que el número secreto es mayor
    } else {
        document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo";
        // Si el número ingresado es mayor, da una pista de que el número secreto es menor
    }
}
