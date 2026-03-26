/*Calculos de la calculadora de fecha, dependiendo del tipo de calculo*/
function calculoFecha() {
    let calculo = document.getElementById("tipoCalculo").value;
    if (calculo == -1) {
        alert("Seleccione el tipo de calculo!!!");
    }
    let fechaInicio = calcularFecha("Inicio");
    let fechaFinal = calcularFecha("Final");
    let diffDias = ((fechaFinal - fechaInicio)/(1000*60*60*24))
    let pantalla = obtenerPantallaActiva();

    var select = document.getElementById("tipoCalculo");
    var tipo = select.options[select.selectedIndex].text;

    /*El calculo 1 devuelve la diferencia en dias entre dos fechas*/
    if (calculo == 1) {
        pantalla.textContent = diffDias;
    }
    /*El calculo 2 devuelve la diferencia en meses entre dos fechas*/
    if (calculo == 2) {
        pantalla.textContent = diferenciaMeses(fechaInicio, fechaFinal);
    }
    /*El calculo 3 devuelve la diferencia en años entre dos fechas, en numero entero*/
    if (calculo == 3) {
        pantalla.textContent = diferenciaMeses(fechaInicio, fechaFinal)/12;
    }
    /*El calculo 4 devuelve la edad que tendria una persona nacida en la primera fecha*/
    if (calculo == 4) {
        pantalla.textContent = calcularEdad(fechaInicio);
        let operacion = `${tipo} de ${fechaInicio} = ${pantalla.textContent}`
        añadirHistorial(operacion);
    }
    if (calculo < 4 && calculo > 0) {
        let operacion = `${tipo} entre ${fechaInicio} y ${fechaFinal} = ${pantalla.textContent}`
        añadirHistorial(operacion);
}

}
/*Dados los valores actuales devuelve una fecha formateada, usado para operaciones internas*/
function calcularFecha(tipo) {
    let fecha;
    if (tipo == "Inicio") {
        let dia = parseInt(document.getElementById("diaInicio").value);
        let mes = parseInt(document.getElementById("mesInicio").value);
        let anio = parseInt(document.getElementById("anioInicio").value);
        fecha = new Date(anio, mes-1, dia);
    } else {
        if (tipo == "Final") {
            let dia = parseInt(document.getElementById("diaFinal").value);
            let mes = parseInt(document.getElementById("mesFinal").value);
            let anio = parseInt(document.getElementById("anioFinal").value);
            fecha = new Date(anio, mes - 1, dia);
        } else {
            alert("error");
        }
    }
    return fecha;
}
/*Calcula la diferencia en meses entre dos fechas, restando un mes en caso de que los dias acaben siendo
* negativos, y sumando 12 por año*/
function diferenciaMeses(inicio,final) {
    let años = final.getFullYear() - inicio.getFullYear();
    let meses = final.getMonth() - inicio.getMonth();
    let dias = final.getDate();
    -inicio.getDate;
    if (dias < 0) {
        meses--
    }
    if (meses < 0) {
        meses += 12;
    }
    let total = años * 12 + meses
    return total;
}
/*Calcula la edad dada una fecha*/
function calcularEdad(fecha) {
    let hoy = new Date();
    let cumple = new Date(fecha);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    if (hoy.getMonth() < cumple.getMonth()) {
        edad--;
    } else {
        if (hoy.getMonth() === cumple.getMonth()) {
            if (hoy.getDate() < cumple.getDate()) {
                edad--;
            }
        }
    }
    return edad;
}