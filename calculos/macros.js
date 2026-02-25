function calcularMacros() {
    let pantalla = obtenerPantallaActiva();
    let peso = parseFloat(document.getElementById("peso2").value);
    let altura = parseFloat(document.getElementById("altura2").value) * 100;
    let edad = parseInt(document.getElementById("edad").value);
    let actividad = parseFloat(document.getElementById("actividad").value);
    let objetivo = parseFloat(document.getElementById("obj").value);
    let preferencia = document.getElementById("pref").value;
    let sexo = document.getElementById("sexo").value;
    let TMB = calcularTMB(sexo, peso, altura, edad);
    let TDEE = calcularTDEE(TMB, actividad);
    let calorias = calcularCalorias(TDEE, objetivo);
    let distribucion = calcularDistribucion(calorias, preferencia);
    pantalla.innerHTML = distribucion;
    añadirHistorial("MACROS");
}
/*Calcula la tabla metabolica basal, a partir del sexo peso altura (en centimetros) y edad
* el sexo se representa con un 1 en hombres y un 2 en mujeres */
function calcularTMB(sexo, peso, altura, edad) {
    let TMB;
    if (sexo === "1") {
        TMB = (10*peso) + (6.25*altura) - (5*edad) +5;
    }
    if (sexo === "2") {
        TMB = (10*peso) + (6.25*altura) - (5*edad)-161;
    }
    return TMB;
}
/*Calcula el gasto energetico total diario a partir de el TMB y el nivel de actividad
* La actividad se pasa ya como multiplicador, siendo
* 1.2 Sedentario
* 1.375 Ligero
* 1.55 Moderado
* 1.72 5Alto
* 1.9 Muy Alto
 */
function calcularTDEE(TMB, actividad) {
    return TMB*actividad;
}
/*Calcula el total de calorias a partir del TDEE y el objetivo como multiplicador, siendo
* 0.85 Perdida de peso
* 1 mantenimiento
* 1.1 Ganancia muscular*/
function calcularCalorias(TDEE, objetivo) {
    return TDEE*objetivo;
}
/*Dadas las calorias totales y la preferencia, calcula la distribucion en macronutrientes*/
function calcularDistribucion(calorias, preferencia) {
    let proteina;
    let carbohidratos;
    let grasas;
    if (preferencia === "1") {
        proteina = (calorias*0.3)/4;
        carbohidratos = (calorias*0.4)/4;
        grasas = (calorias*0.3)/9;
    }
    if (preferencia === "2") {
        proteina = (calorias*0.35)/4;
        carbohidratos = (calorias*0.35)/4;
        grasas = (calorias*0.3)/9;
    }
    if (preferencia === "3") {
        proteina = (calorias*0.35)/4;
        carbohidratos = (calorias*0.25)/4;
        grasas = (calorias*0.4)/9;
    }
    if (preferencia === "4") {
        proteina = (calorias*0.25)/4;
        carbohidratos = (calorias*0.5)/4;
        grasas = (calorias*0.25)/9;
    }
    let texto = `
Calorías: ${calorias.toFixed(0)} kcal<hr>
Proteínas: ${proteina.toFixed(0)} g<hr>
Carbohidratos: ${carbohidratos.toFixed(0)} g<hr>
Grasas: ${grasas.toFixed(0)} g
`;
    return texto;
}