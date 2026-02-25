/*Calculo de el indice de masa corporal*/
function calculoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let pantalla = obtenerPantallaActiva();


    let total = (peso / (altura*altura)).toFixed(2);
    let tipo;
    if (total < 18.5) {
        tipo = "Bajo peso";
    }
    if (total >= 18.5 && total < 25) {
        tipo = "Peso normal";
    }
    if (total >= 25 && total < 30) {
        tipo = "Sobrepeso";
    }
    if (total >=30 && total < 35) {
        tipo = "Obesidad grado I";
    }
    if (total >=35 && total < 40) {
        tipo = "Obesidad grado II";
    }
    if (total >= 40) {
        tipo = "Obesidad grado III"
    }
    let texto =
        `Peso: ${peso}Kg<br>
        Altura: ${altura}m<br>
        IMC: ${total}<br>
        Clasificacion: ${tipo}<br>`;
    pantalla.innerHTML = texto;
    añadirHistorial(`IMC`);
}