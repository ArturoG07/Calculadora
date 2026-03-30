/**
 * 📌 fechas.js
 * Calculadora de fechas: diferencias entre fechas y cálculo de edad.
 * Funciones:
 *  - calculoFecha: Calcula según el tipo de operación seleccionada.
 *  - calcularFecha: Devuelve un objeto Date según los campos de entrada.
 *  - diferenciaMeses: Calcula la diferencia en meses entre dos fechas.
 *  - calcularEdad: Calcula la edad basada en una fecha de nacimiento.
 */

/**
 * Ejecuta el cálculo de fecha según el tipo seleccionado en el <select> "tipoCalculo".
 */
function calculoFecha() {
    const select = document.getElementById("tipoCalculo");
    const calculo = parseInt(select.value);
    const tipo = select.options[select.selectedIndex].text;
    const pantalla = obtenerPantallaActiva();
    const fechaInicio = calcularFecha("Inicio");
    const fechaFinal = calcularFecha("Final");
    const diffDias = (fechaFinal - fechaInicio) / (1000 * 60 * 60 * 24); // Diferencia en días
    let resultado;

    switch (calculo) {
        case 1: // Diferencia en días
            resultado = diffDias;
            pantalla.textContent = resultado;
            añadirHistorial(`${tipo} entre ${fechaInicio} y ${fechaFinal} = ${resultado}`);
            break;
        case 2: // Diferencia en meses
            resultado = diferenciaMeses(fechaInicio, fechaFinal);
            pantalla.textContent = resultado;
            añadirHistorial(`${tipo} entre ${fechaInicio} y ${fechaFinal} = ${resultado}`);
            break;
        case 3: // Diferencia en años (entero)
            resultado = Math.floor(diferenciaMeses(fechaInicio, fechaFinal) / 12);
            pantalla.textContent = resultado;
            añadirHistorial(`${tipo} entre ${fechaInicio} y ${fechaFinal} = ${resultado}`);
            break;
        case 4: // Edad de una persona nacida en fechaInicio
            resultado = calcularEdad(fechaInicio);
            pantalla.textContent = resultado;
            añadirHistorial(`${tipo} de ${fechaInicio} = ${resultado}`);
            break;
        default:
            alert("Tipo de cálculo no reconocido");
            break;
    }
}

/**
 * Devuelve un objeto Date basado en los campos de entrada del DOM.
 * @param {string} tipo - "Inicio" o "Final"
 * @returns {Date} Objeto Date construido
 */
function calcularFecha(tipo) {
    let dia, mes, anio;

    if (tipo === "Inicio") {
        dia = parseInt(document.getElementById("diaInicio").value);
        mes = parseInt(document.getElementById("mesInicio").value);
        anio = parseInt(document.getElementById("anioInicio").value);
    } else if (tipo === "Final") {
        dia = parseInt(document.getElementById("diaFinal").value);
        mes = parseInt(document.getElementById("mesFinal").value);
        anio = parseInt(document.getElementById("anioFinal").value);
    } else {
        alert("Error al calcular fecha: tipo inválido");
        return null;
    }

    return new Date(anio, mes - 1, dia);
}

/**
 * Calcula la diferencia en meses entre dos fechas.
 * Ajusta meses y días para reflejar correctamente los meses parciales.
 * @param {Date} inicio - Fecha de inicio
 * @param {Date} final - Fecha final
 * @returns {number} Número total de meses entre las fechas
 */
function diferenciaMeses(inicio, final) {
    let años = final.getFullYear() - inicio.getFullYear();
    let meses = final.getMonth() - inicio.getMonth();
    let dias = final.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        años--;
    }

    return años * 12 + meses;
}

/**
 * Calcula la edad de una persona dado su fecha de nacimiento.
 * @param {Date} fecha - Fecha de nacimiento
 * @returns {number} Edad en años completos
 */
function calcularEdad(fecha) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();

    if (hoy.getMonth() < fecha.getMonth() ||
        (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())) {
        edad--;
    }

    return edad;
}