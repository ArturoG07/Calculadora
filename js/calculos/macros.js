/**
 * 📌 macros.js
 * Calculadora de macronutrientes y calorías según datos del usuario.
 * Funciones:
 *  - calcularMacros: Calcula calorías y distribución de macronutrientes.
 *  - calcularTMB: Calcula la Tasa Metabólica Basal según sexo, peso, altura y edad.
 *  - calcularTDEE: Calcula el Gasto Energético Total Diario según TMB y nivel de actividad.
 *  - calcularCalorias: Ajusta las calorías según el objetivo (perder, mantener o ganar peso).
 *  - calcularDistribucion: Distribuye las calorías entre proteínas, carbohidratos y grasas según la preferencia.
 */

/**
 * Calcula las calorías totales y la distribución de macronutrientes
 * según los datos ingresados en la calculadora.
 */
function calcularMacros() {
    const pantalla = obtenerPantallaActiva();
    const peso = parseFloat(document.getElementById("peso2").value);
    const altura = parseFloat(document.getElementById("altura2").value) * 100; // altura en cm
    const edad = parseInt(document.getElementById("edad").value);
    const actividad = parseFloat(document.getElementById("actividad").value);
    const objetivo = parseFloat(document.getElementById("obj").value);
    const preferencia = document.getElementById("pref").value;
    const sexo = document.getElementById("sexo").value;

    // Calculos principales
    const TMB = calcularTMB(sexo, peso, altura, edad);
    const TDEE = calcularTDEE(TMB, actividad);
    const calorias = calcularCalorias(TDEE, objetivo);
    const distribucion = calcularDistribucion(calorias, preferencia);

    pantalla.textContent = distribucion;
    añadirHistorial("MACROS");
}

/**
 * Calcula la Tasa Metabólica Basal (TMB) según el sexo, peso, altura y edad.
 * @param {string} sexo - "1" para hombres, "2" para mujeres
 * @param {number} peso - Peso en kg
 * @param {number} altura - Altura en cm
 * @param {number} edad - Edad en años
 * @returns {number} TMB en kcal/día
 */
function calcularTMB(sexo, peso, altura, edad) {
    if (sexo === "1") {
        return (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    } else if (sexo === "2") {
        return (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    } else {
        console.warn("Sexo no reconocido, usando valores por defecto para hombres");
        return (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    }
}

/**
 * Calcula el Gasto Energético Total Diario (TDEE) a partir de TMB y nivel de actividad.
 * @param {number} TMB - Tasa Metabólica Basal
 * @param {number} actividad - Multiplicador de actividad física
 * @returns {number} TDEE en kcal/día
 */
function calcularTDEE(TMB, actividad) {
    return TMB * actividad;
}

/**
 * Ajusta las calorías según el objetivo.
 * @param {number} TDEE - Gasto energético total diario
 * @param {number} objetivo - Multiplicador según objetivo:
 *                            0.85: pérdida de peso
 *                            1: mantenimiento
 *                            1.1: ganancia muscular
 * @returns {number} Calorías totales ajustadas
 */
function calcularCalorias(TDEE, objetivo) {
    return TDEE * objetivo;
}

/**
 * Calcula la distribución de macronutrientes según las calorías y la preferencia del usuario.
 * @param {number} calorias - Calorías totales
 * @param {string} preferencia - "1" a "4" indicando la distribución preferida
 * @returns {string} Texto con calorías y gramos de proteínas, carbohidratos y grasas
 */
function calcularDistribucion(calorias, preferencia) {
    let proteina, carbohidratos, grasas;

    switch (preferencia) {
        case "1": // Balance clásico
            proteina = (calorias * 0.3) / 4;
            carbohidratos = (calorias * 0.4) / 4;
            grasas = (calorias * 0.3) / 9;
            break;
        case "2": // Alto en proteínas
            proteina = (calorias * 0.35) / 4;
            carbohidratos = (calorias * 0.35) / 4;
            grasas = (calorias * 0.3) / 9;
            break;
        case "3": // Bajo en carbohidratos
            proteina = (calorias * 0.35) / 4;
            carbohidratos = (calorias * 0.25) / 4;
            grasas = (calorias * 0.4) / 9;
            break;
        case "4": // Alto en carbohidratos
            proteina = (calorias * 0.25) / 4;
            carbohidratos = (calorias * 0.5) / 4;
            grasas = (calorias * 0.25) / 9;
            break;
        default:
            console.warn("Preferencia no reconocida, usando distribución clásica");
            proteina = (calorias * 0.3) / 4;
            carbohidratos = (calorias * 0.4) / 4;
            grasas = (calorias * 0.3) / 9;
    }

    return `Calorías: ${calorias.toFixed(0)} kcal\n` +
        `Proteínas: ${proteina.toFixed(0)} g\n` +
        `Carbohidratos: ${carbohidratos.toFixed(0)} g\n` +
        `Grasas: ${grasas.toFixed(0)} g`;
}