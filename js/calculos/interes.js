/**
 * 📌 interes.js
 * Calculadora de intereses financieros.
 * Funciones:
 *  - calculoInteres: Calcula intereses simples o compuestos y muestra resultados.
 *  - comprobarParametrosInteres: Valida los parámetros de entrada antes de calcular.
 */

/**
 * Calcula los intereses según los datos ingresados en la calculadora.
 * Muestra el resultado en la pantalla activa y lo registra en el historial.
 */
function calculoInteres() {
    const capital = parseFloat(document.getElementById("capital").value);
    const interes = parseFloat(document.getElementById("interes").value) / 100;
    const tipo = document.getElementById("tipoInteres").value;
    const anios = parseInt(document.getElementById("aniosInteres").value);
    const pantalla = obtenerPantallaActiva();

    // Validar parámetros
    const comprobacion = comprobarParametrosInteres(capital, interes, tipo, anios);
    if (comprobacion !== true) {
        pantalla.textContent = comprobacion;
        return;
    }

    let total = 0;
    let intereses = 0;
    let cuota = 0;

    if (tipo === "Simple") {
        intereses = capital * interes * anios;
        total = capital + intereses;
        cuota = total / (anios * 12);
    } else if (tipo === "Compuesto") {
        total = capital;
        for (let i = 0; i < anios; i++) {
            const interesAnual = total * interes;
            intereses += interesAnual;
            total += interesAnual;
        }
        cuota = total / (anios * 12);
    } else {
        pantalla.textContent = "Tipo de interés no reconocido";
        return;
    }

    // Mostrar resultado
    pantalla.textContent =
        `Capital inicial: ${capital}\n` +
        `Tasa de interés: ${(interes * 100).toFixed(2)}%\n` +
        `Años: ${anios}\n` +
        `Tipo de interés: ${tipo}\n` +
        `Total pagado: ${total.toFixed(2)}\n` +
        `Total intereses: ${intereses.toFixed(2)}\n` +
        `Cuota mensual: ${cuota.toFixed(2)}`;

    // Guardar en historial
    añadirHistorial(`Intereses de capital de ${capital} a tasa ${(interes * 100).toFixed(2)}% de tipo ${tipo} en ${anios} años`);
}

/**
 * Valida los parámetros de entrada para calcular intereses.
 * @param {number} capital - Capital inicial
 * @param {number} interes - Tasa de interés en formato decimal
 * @param {string} tipo - "Simple" o "Compuesto"
 * @param {number} anios - Número de años
 * @returns {true|string} True si todo es válido, mensaje de error si no
 */
function comprobarParametrosInteres(capital, interes, tipo, anios) {
    if (!capital || isNaN(capital) || capital <= 0) return "Introduzca un capital válido";
    if (!interes || isNaN(interes) || interes <= 0) return "Introduzca una tasa de interés válida";
    if (!tipo || tipo === "Tipo de Interés...") return "Seleccione tipo de interés";
    if (!anios || isNaN(anios) || anios <= 0) return "Introduzca un número de años válido";
    return true;
}