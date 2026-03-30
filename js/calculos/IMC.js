/**
 * 📌 IMC.js
 * Calculadora del Índice de Masa Corporal (IMC).
 * Función principal:
 *  - calculoIMC: Calcula el IMC a partir de peso y altura, clasifica el resultado y lo muestra en pantalla.
 */

/**
 * Calcula el IMC y clasifica el resultado según estándares internacionales.
 * Muestra los resultados en la pantalla activa y registra la operación en el historial.
 */
function calculoIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const pantalla = obtenerPantallaActiva();

    // Validación de entrada
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        pantalla.textContent = "❌ Por favor ingrese peso y altura válidos.";
        return;
    }

    // Cálculo del IMC
    const total = (peso / (altura * altura)).toFixed(2);

    // Clasificación del IMC
    let tipo;
    if (total < 18.5) tipo = "Bajo peso";
    else if (total < 25) tipo = "Peso normal";
    else if (total < 30) tipo = "Sobrepeso";
    else if (total < 35) tipo = "Obesidad grado I";
    else if (total < 40) tipo = "Obesidad grado II";
    else tipo = "Obesidad grado III";

    // Construcción del texto de salida
    const texto =
        `Peso: ${peso} Kg\n` +
        `Altura: ${altura} m\n` +
        `IMC: ${total}\n` +
        `Clasificación: ${tipo}`;

    pantalla.textContent = texto;

    // Guardar operación en historial
    añadirHistorial(`IMC calculado: ${total} (${tipo})`);
}