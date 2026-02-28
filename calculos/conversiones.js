const categoria = document.getElementById("categoria");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const num = document.getElementById("valor");
categoria.addEventListener("change", function() {
    actualizarOpciones(categoria.value);
});
actualizarOpciones(categoria.value);
function actualizarOpciones(categoria) {
    if (categoria === "1") {
        origen.innerHTML = `
<option value="1">Metro (m)</option>
<option value="2">Kilómetro (km)</option>
<option value="3">Centímetro (cm)</option>
<option value="4">Milímetro (mm)</option>
<option value="5">Pulgada (in)</option>
<option value="6">Pie (ft)</option>
<option value="7">Yarda (yd)</option>
<option value="8">Milla (mi)</option>`;
        destino.innerHTML = `
<option value="1">Metro (m)</option>
<option value="2">Kilómetro (km)</option>
<option value="3">Centímetro (cm)</option>
<option value="4">Milímetro (mm)</option>
<option value="5">Pulgada (in)</option>
<option value="6">Pie (ft)</option>
<option value="7">Yarda (yd)</option>
<option value="8">Milla (mi)</option>`;
    }
    if (categoria === "2") {
        origen.innerHTML =`
<option value="1">Kilogramo (kg)</option>
<option value="2">Gramo (g)</option>
<option value="3">Miligramo (mg)</option>
<option value="4">Tonelada (t)</option>
<option value="5">Libra (lb)</option>
<option value="6">Onza (oz)</option>`;
        destino.innerHTML = `
<option value="1">Kilogramo (kg)</option>
<option value="2">Gramo (g)</option>
<option value="3">Miligramo (mg)</option>
<option value="4">Tonelada (t)</option>
<option value="5">Libra (lb)</option>
<option value="6">Onza (oz)</option>`;
    }
    if (categoria === "3") {
        origen.innerHTML = `
<option value="1">Celsius (°C)</option>
<option value="2">Fahrenheit (°F)</option>
<option value="3">Kelvin (K)</option>`;
        destino.innerHTML = `
<option value="1">Celsius (°C)</option>
<option value="2">Fahrenheit (°F)</option>
<option value="3">Kelvin (K)</option>`;
    }
    if (categoria === "4") {
        origen.innerHTML = `
<option value="1">Kilómetros por hora (km/h)</option>
<option value="2">Metros por segundo (m/s)</option>
<option value="3">Millas por hora (mph)</option>
<option value="4">Nudos (kn)</option>`;
        destino.innerHTML = `
<option value="1">Kilómetros por hora (km/h)</option>
<option value="2">Metros por segundo (m/s)</option>
<option value="3">Millas por hora (mph)</option>
<option value="4">Nudos (kn)</option>`;
    }
    if (categoria === "5") {
        origen.innerHTML = `
<option value="1">Bit (b)</option>
<option value="2">Byte (B)</option>
<option value="3">Kilobyte (KB)</option>
<option value="4">Megabyte (MB)</option>
<option value="5">Gigabyte (GB)</option>
<option value="6">Terabyte (TB)</option>`;
        destino.innerHTML = `
<option value="1">Bit (b)</option>
<option value="2">Byte (B)</option>
<option value="3">Kilobyte (KB)</option>
<option value="4">Megabyte (MB)</option>
<option value="5">Gigabyte (GB)</option>
<option value="6">Terabyte (TB)</option>`;
    }
    if (categoria === "6") {
        origen.innerHTML = `
<option value="1">Julio (J)</option>
<option value="2">Kilojulio (kJ)</option>
<option value="3">Caloría (cal)</option>
<option value="4">Kilocaloría (kcal)</option>
<option value="5">Vatio-hora (Wh)</option>
<option value="6">Kilovatio-hora (kWh)</option>`;
        destino.innerHTML = `
<option value="1">Julio (J)</option>
<option value="2">Kilojulio (kJ)</option>
<option value="3">Caloría (cal)</option>
<option value="4">Kilocaloría (kcal)</option>
<option value="5">Vatio-hora (Wh)</option>
<option value="6">Kilovatio-hora (kWh)</option>`;
    }
    if (categoria === "7") {
        origen.innerHTML = `
<option value="1">Metro cuadrado (m²)</option>
<option value="2">Kilómetro cuadrado (km²)</option>
<option value="3">Centímetro cuadrado (cm²)</option>
<option value="4">Hectárea (ha)</option>
<option value="5">Pie cuadrado (ft²)</option>
<option value="6">Acre</option>`;
        destino.innerHTML = `
<option value="1">Metro cuadrado (m²)</option>
<option value="2">Kilómetro cuadrado (km²)</option>
<option value="3">Centímetro cuadrado (cm²)</option>
<option value="4">Hectárea (ha)</option>
<option value="5">Pie cuadrado (ft²)</option>
<option value="6">Acre</option>`;
    }
    if (categoria === "8") {
        origen.innerHTML = `
<option value="1">Segundo</option>
<option value="2">Minuto</option>
<option value="3">Hora</option>
<option value="4">Día</option>
<option value="5">Semana</option>
<option value="6">Mes</option>
<option value="7">Año</option>`;
        destino.innerHTML = `
<option value="1">Segundo</option>
<option value="2">Minuto</option>
<option value="3">Hora</option>
<option value="4">Día</option>
<option value="5">Semana</option>
<option value="6">Mes</option>
<option value="7">Año</option>`;
    }
    if (categoria === "9") {
        origen.innerHTML = `
<option value="1">Vatio (W)</option>
<option value="2">Kilovatio (kW)</option>
<option value="3">Caballo de fuerza (hp)</option>
<option value="4">BTU/h</option>`;
        destino.innerHTML = `
<option value="1">Vatio (W)</option>
<option value="2">Kilovatio (kW)</option>
<option value="3">Caballo de fuerza (hp)</option>
<option value="4">BTU/h</option>`;
    }
    if (categoria === "10") {
        origen.innerHTML = `
<option value="1">Pascal (Pa)</option>
<option value="2">Kilopascal (kPa)</option>
<option value="3">Bar</option>
<option value="4">PSI</option>
<option value="5">Atmósfera (atm)</option>
<option value="6">mmHg</option>`;
        destino.innerHTML = `
<option value="1">Pascal (Pa)</option>
<option value="2">Kilopascal (kPa)</option>
<option value="3">Bar</option>
<option value="4">PSI</option>
<option value="5">Atmósfera (atm)</option>
<option value="6">mmHg</option>`;
    }
}
function calcularConversion() {
    const pantalla = obtenerPantallaActiva();
    if (categoria.value === "1") {
        calcularLongitud(pantalla);
    }
    if (categoria.value === "2") {
        calcularPeso(pantalla);
    }
    if (categoria.value === "3") {
        calcularTemperatura(pantalla);
    }
    if (categoria.value === "4") {
        calcularVelocidad(pantalla);
    }
    if (categoria.value === "5") {
        calcularAlmacenamiento(pantalla);
    }
    if (categoria.value === "6") {
        calcularEnergia(pantalla);
    }
    if (categoria.value === "7") {
        calcularArea(pantalla);
    }
    if (categoria.value === "8") {
        calcularTiempo(pantalla);
    }
    if (categoria.value === "9") {
        calcularPotencia(pantalla);
    }
    if (categoria.value === "10") {
        calcularPresion(pantalla);
    }
    añadirHistorial(`${num.value} ${origen.options[origen.selectedIndex].text} a ${destino.options[destino.selectedIndex].text}`);
}
let pantalla = obtenerPantallaActiva();

function calcularLongitud(pantalla) {
    const factores = {
        1: 1,        // metro
        2: 1000,     // km
        3: 0.01,     // cm
        4: 0.001,    // mm
        5: 0.0254,   // pulgada
        6: 0.3048,   // pie
        7: 0.9144,   // yarda
        8: 1609.34   // milla
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;
}
function calcularPeso(pantalla) {
    const factores = {
        1: 1,
        2: 0.001,
        3: 0.000001,
        4: 1000,
        5: 0.453592,
        6: 0.0283495
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;
}
function calcularTemperatura(pantalla) {
    let valor = parseFloat(num.value);
    let base;

    if (origen.value == 1) base = valor;
    if (origen.value == 2) base = (valor - 32) * 5/9;
    if (origen.value == 3) base = valor - 273.15;

    let resultado;

    if (destino.value == 1) resultado = base;
    if (destino.value == 2) resultado = (base * 9/5) + 32;
    if (destino.value == 3) resultado = base + 273.15;

    pantalla.textContent = resultado;

}
function calcularVelocidad(pantalla) {
    const factores = {
        1: 0.277778, // km/h
        2: 1,        // m/s
        3: 0.44704,  // mph
        4: 0.514444  // nudo
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;

}
function calcularAlmacenamiento(pantalla) {
    const factores = {
        1: 1/8,              // bit
        2: 1,                // byte
        3: 1024,
        4: 1024**2,
        5: 1024**3,
        6: 1024**4
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;

}
function calcularEnergia(pantalla) {
    const factores = {
        1: 1,
        2: 1000,
        3: 4.184,
        4: 4184,
        5: 3600,
        6: 3600000
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;

}
function calcularArea(pantalla) {
    const factores = {
        1: 1,
        2: 1000000,
        3: 0.0001,
        4: 10000,
        5: 0.092903,
        6: 4046.86
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;

}
function calcularTiempo(pantalla) {
    const factores = {
        1: 1,
        2: 60,
        3: 3600,
        4: 86400,
        5: 604800,
        6: 2629800,
        7: 31557600
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;
}
function calcularPotencia(pantalla) {
    const factores = {
        1: 1,
        2: 1000,
        3: 745.7,
        4: 0.293071
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;
}
function calcularPresion(pantalla) {
    const factores = {
        1: 1,
        2: 1000,
        3: 100000,
        4: 6894.76,
        5: 101325,
        6: 133.322
    };

    let valorBase = num.value * factores[origen.value];
    let resultado = valorBase / factores[destino.value];

    pantalla.textContent = resultado;
}

