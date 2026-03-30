/**
 * 📌 deportiva.js
 * Calculadora de rendimiento deportivo.
 * Convierte distancia recorrida y tiempo transcurrido en velocidad en m/s y km/h.
 * También registra el cálculo en el historial.
 */

function calcularRendimiento() {
    // Obtener valores del DOM y convertir a números
    const km = Number(document.getElementById("kilometros").value);
    let h = Number(document.getElementById("horas").value);
    let m = Number(document.getElementById("minutos").value);
    let s = Number(document.getElementById("segundos").value);

    const pantalla = obtenerPantallaActiva();

    // Calcular tiempo total en segundos
    const totalSegundos = h * 3600 + m * 60 + s;

    if (totalSegundos === 0) {
        pantalla.textContent = "Tiempo inválido";
        return;
    }

    // Calcular rendimiento en m/s
    const rendimiento = (km * 1000) / totalSegundos;

    // Normalizar tiempo a días, horas, minutos y segundos
    let dias = 0;
    while (s >= 60) {
        s -= 60;
        m++;
    }
    while (m >= 60) {
        m -= 60;
        h++;
    }
    while (h >= 24) {
        h -= 24;
        dias++;
    }

    // Mostrar resultados en pantalla
    pantalla.textContent = `${rendimiento.toFixed(2)} m/s\n${(rendimiento * 3.6).toFixed(2)} km/h`;

    // Guardar en historial
    añadirHistorial(`Rendimiento: ${km} km en ${dias} dia/s ${h} h ${m} min ${s} sg`);
}