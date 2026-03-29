/*Calcula los intereses dados los datos en la calculadora*/
function calculoInteres() {
    let capital = Number(document.getElementById("capital").value);
    let interes = Number(document.getElementById("interes").value)/100;
    let tipo = document.getElementById("tipoInteres").value;
    let anios = Number(document.getElementById("aniosInteres").value);
    let pantalla = obtenerPantallaActiva();
    let comprobacion = comprobarParametrosInteres(capital, interes, tipo, anios);
    let total;
    let intereses;
    let cuota;
    if (comprobacion == true) {
        if (tipo == "Simple") {
            total = capital * interes * anios + capital;
            intereses = capital * interes * anios;
            cuota = total / anios / 12;
        }
        if (tipo == "Compuesto") {
            total = capital;
            intereses = 0;
            for (let i = 0; i < anios; i++){
                intereses = intereses + total*interes
                total = total + total * interes;
            }
            cuota = total/anios/12;

        }
        pantalla.textContent = `
Capital inicial: ${capital} \n
Tasa de Intereses: ${interes * 100}% \n
Años: ${anios} \n
Tipo de interés: ${tipo} \n 
Total pagado: ${total.toFixed(2)} \n
Total intereses: ${intereses.toFixed(2)} \n
Cuota mensual: ${cuota.toFixed(2)}`;
        añadirHistorial(`Intereses de capital de ${capital} a tasa ${interes} de tipo ${tipo} en ${anios} anios`);
    }else {
        pantalla.textContent = comprobacion;
    }
}
/*Comprueba que se hayan introducido todos los parametros*/
function comprobarParametrosInteres(capital, interes, tipo, anios) {
    let comprobacion = true;
    if (!capital) comprobacion = "Introduzca capital";
    if (!interes) comprobacion = "Introduzca el interes";
    if (tipo === "Tipo de Interés...") comprobacion = "Introduzca tipo de interes";
    if (!anios) comprobacion = "Introduzca los años";
    return comprobacion;
}
