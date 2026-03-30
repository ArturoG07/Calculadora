/**
 * 📌 divisas.js
 * Funciones para la calculadora de divisas:
 * - cambioDivisa: realiza la conversión usando la API de ExchangeRate.
 * - mostrarDivisas: alterna la visualización del panel de divisas.
 */

const API_KEY_DIVISAS = "88e0042c21f317cee972b2d1"; // Clave de la API de ExchangeRate

/**
 * Convierte la cantidad mostrada en pantalla de una divisa a otra.
 * Usa la API de ExchangeRate para obtener el tipo de cambio actual.
 */
async function cambioDivisa() {
    const pantalla = obtenerPantallaActiva();
    const divisa = document.getElementById("divisa").value;
    const divisaConvertir = document.getElementById("divisaConvertir").value;
    const cantidad = parseFloat(pantalla.textContent);

    // Validación de campos
    if (!divisa || !divisaConvertir) {
        pantalla.textContent = "❌ Error al obtener cambio, seleccione divisa";
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY_DIVISAS}/latest/${divisa}`;

    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Divisa no encontrada en la API");
        }

        const datos = await respuesta.json();
        const cambio = datos.conversion_rates[divisaConvertir];

        if (cambio === undefined) {
            throw new Error("Tipo de cambio no disponible");
        }

        // Calcular y mostrar resultado
        const resultado = cantidad * cambio;
        pantalla.textContent = resultado;

        // Guardar operación en historial
        const textoOperacion = `${cantidad} ${divisa} a ${divisaConvertir}`;
        añadirHistorial(textoOperacion);

    } catch (error) {
        pantalla.textContent = "❌ Error al obtener cambio";
        console.error("Error en cambioDivisa:", error);
    }
}

/**
 * Muestra u oculta el contenedor de divisas en la UI.
 */
function mostrarDivisas() {
    const contenedor = document.getElementById("divisas");
    const divisa = document.getElementById("mostrarDivisas");

    if (contenedor.style.display === "none") {
        contenedor.style.display = "block";
        divisa.style.left = "33%";
        divisa.style.top = "0";
    } else {
        contenedor.style.display = "none";
        divisa.style.left = "5px";
        divisa.style.top = "20px";
    }
}