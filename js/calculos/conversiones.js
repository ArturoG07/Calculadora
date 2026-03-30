/**
 * 📌 conversiones.js
 * Manejo de la calculadora de conversiones.
 * Permite convertir entre diferentes unidades según la categoría seleccionada.
 * Actualiza los select de origen y destino y muestra el resultado en pantalla.
 */

// Elementos DOM globales
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const num = document.getElementById("valor");
const categoriaSelect = document.getElementById("categoria");

/**
 * Actualiza las opciones de los selects "origen" y "destino" según la categoría.
 * @param {string} categoria - Valor de la categoría seleccionada.
 */
function actualizarOpciones(categoria) {
    const opciones = {
        "1": [ // Longitud
            "Metro (m)", "Kilómetro (km)", "Centímetro (cm)", "Milímetro (mm)",
            "Pulgada (in)", "Pie (ft)", "Yarda (yd)", "Milla (mi)"
        ],
        "2": [ // Peso
            "Kilogramo (kg)", "Gramo (g)", "Miligramo (mg)", "Tonelada (t)",
            "Libra (lb)", "Onza (oz)"
        ],
        "3": [ // Temperatura
            "Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)"
        ],
        "4": [ // Velocidad
            "Kilómetros por hora (km/h)", "Metros por segundo (m/s)", "Millas por hora (mph)", "Nudos (kn)"
        ],
        "5": [ // Almacenamiento
            "Bit (b)", "Byte (B)", "Kilobyte (KB)", "Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)"
        ],
        "6": [ // Energía
            "Julio (J)", "Kilojulio (kJ)", "Caloría (cal)", "Kilocaloría (kcal)", "Vatio-hora (Wh)", "Kilovatio-hora (kWh)"
        ],
        "7": [ // Área
            "Metro cuadrado (m²)", "Kilómetro cuadrado (km²)", "Centímetro cuadrado (cm²)", "Hectárea (ha)", "Pie cuadrado (ft²)", "Acre"
        ],
        "8": [ // Tiempo
            "Segundo", "Minuto", "Hora", "Día", "Semana", "Mes", "Año"
        ],
        "9": [ // Potencia
            "Vatio (W)", "Kilovatio (kW)", "Caballo de fuerza (hp)", "BTU/h"
        ],
        "10": [ // Presión
            "Pascal (Pa)", "Kilopascal (kPa)", "Bar", "PSI", "Atmósfera (atm)", "mmHg"
        ]
    };

    // Genera el HTML de opciones
    const html = (arr) => arr.map((item, index) => `<option value="${index + 1}">${item}</option>`).join("");

    origen.innerHTML = html(opciones[categoria]);
    destino.innerHTML = html(opciones[categoria]);
}

/**
 * Función principal para calcular conversiones según la categoría seleccionada
 */
function calcularConversion() {
    const pantalla = obtenerPantallaActiva();
    const categoria = categoriaSelect.value;

    // Map de funciones según categoría
    const calculadoras = {
        "1": calcularLongitud,
        "2": calcularPeso,
        "3": calcularTemperatura,
        "4": calcularVelocidad,
        "5": calcularAlmacenamiento,
        "6": calcularEnergia,
        "7": calcularArea,
        "8": calcularTiempo,
        "9": calcularPotencia,
        "10": calcularPresion
    };

    if (calculadoras[categoria]) {
        calculadoras[categoria](pantalla);
    } else {
        pantalla.textContent = "Categoría no válida";
        return;
    }

    // Añade la operación al historial
    añadirHistorial(`${num.value} ${origen.options[origen.selectedIndex].text} a ${destino.options[destino.selectedIndex].text}`);
}

/* ---------------------- Funciones de cálculo por categoría ---------------------- */

/**
 * Calcula conversiones lineales usando factores de conversión
 * @param {HTMLElement} pantalla
 * @param {Object} factores
 */
function calcularLineal(pantalla, factores) {
    const valorBase = num.value * factores[origen.value];
    const resultado = valorBase / factores[destino.value];
    pantalla.textContent = resultado;
}

function calcularLongitud(pantalla) {
    const factores = {1:1,2:1000,3:0.01,4:0.001,5:0.0254,6:0.3048,7:0.9144,8:1609.34};
    calcularLineal(pantalla, factores);
}

function calcularPeso(pantalla) {
    const factores = {1:1,2:0.001,3:0.000001,4:1000,5:0.453592,6:0.0283495};
    calcularLineal(pantalla, factores);
}

function calcularVelocidad(pantalla) {
    const factores = {1:0.277778,2:1,3:0.44704,4:0.514444};
    calcularLineal(pantalla, factores);
}

function calcularAlmacenamiento(pantalla) {
    const factores = {1:1/8,2:1,3:1024,4:1024**2,5:1024**3,6:1024**4};
    calcularLineal(pantalla, factores);
}

function calcularEnergia(pantalla) {
    const factores = {1:1,2:1000,3:4.184,4:4184,5:3600,6:3600000};
    calcularLineal(pantalla, factores);
}

function calcularArea(pantalla) {
    const factores = {1:1,2:1000000,3:0.0001,4:10000,5:0.092903,6:4046.86};
    calcularLineal(pantalla, factores);
}

function calcularTiempo(pantalla) {
    const factores = {1:1,2:60,3:3600,4:86400,5:604800,6:2629800,7:31557600};
    calcularLineal(pantalla, factores);
}

function calcularPotencia(pantalla) {
    const factores = {1:1,2:1000,3:745.7,4:0.293071};
    calcularLineal(pantalla, factores);
}

function calcularPresion(pantalla) {
    const factores = {1:1,2:1000,3:100000,4:6894.76,5:101325,6:133.322};
    calcularLineal(pantalla, factores);
}

/**
 * Calcula conversiones de temperatura
 */
function calcularTemperatura(pantalla) {
    const valor = parseFloat(num.value);
    let base;

    // Convertir a Celsius
    switch (origen.value) {
        case "1": base = valor; break;          // Celsius
        case "2": base = (valor - 32) * 5/9; break;  // Fahrenheit
        case "3": base = valor - 273.15; break;     // Kelvin
    }

    let resultado;
    switch (destino.value) {
        case "1": resultado = base; break;
        case "2": resultado = (base * 9/5) + 32; break;
        case "3": resultado = base + 273.15; break;
    }

    pantalla.textContent = resultado;
}


