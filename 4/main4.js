function calcular() {
    // Obtener el valor del primer número ingresado y convertirlo a un número decimal
    let num1 = parseFloat(document.getElementById("num1").value);
    // Obtener el valor del segundo número ingresado y convertirlo a un número decimal
    let num2 = parseFloat(document.getElementById("num2").value);

    // Obtener el valor de la operación matemática seleccionada por el usuario
    let operacion = document.getElementById("operacion").value;

    // Variable para almacenar el resultado del cálculo
    let resultado;

    // Determinar la operación a realizar con base en la selección del usuario
    switch (operacion) {
        case "+":
            resultado = num1 + num2;  // Realiza la suma
            break;

        case "-":
            resultado = num1 - num2;  // Realiza la resta
            break;

        case "*":
            resultado = num1 * num2;  // Realiza la multiplicación
            break;

        case "/":
            resultado = num1 / num2;  // Realiza la división
            break;

        default:
            resultado = "Operación no válida";  // Muestra un mensaje de error si la operación no es válida
    }
    
    // Muestra el resultado del cálculo en el elemento con id "resultado"
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
