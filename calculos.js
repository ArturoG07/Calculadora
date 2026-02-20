/*Resuelve la operacion en pantalla*/
function resolver() {
    const pantalla = obtenerPantallaActiva();
    const calcActiva = document.querySelector(".calculadora.activa");
    let expresion = pantalla.textContent;

    // Si baseActual no es decimal, convertir cada número a decimal
    if (baseActual !== 10) {
        let tokens = expresion.match(/[0-9A-F]+|[\+\-\*\/\(\)]/gi); // separar números y operadores
        if (!tokens) {
            pantalla.textContent = "Error";
            return;
        }
        expresion = tokens.map(tok => {
            // Si es número, parsea a decimal
            if (/^[0-9A-F]+$/i.test(tok)) {
                return parseInt(tok, baseActual);
            }
            return tok; // operador (+, -, *, /, (, ))
        }).join('');
    }

    // Evaluar la expresión
    try {
        const resultado = Function("return " + expresion)();
        if (typeof resultado === "number" && isFinite(resultado)) {
            pantalla.textContent = resultado.toString(baseActual).toUpperCase();
        } else {
            pantalla.textContent = "Error";
        }
    } catch(e) {
        pantalla.textContent = "Error";
    }
}

let baseActual = 10;
/*Convierte entre bases para la calculadora de programador*/
function conversion(valor) {
    let pantalla = obtenerPantallaActiva();
    let num = pantalla.textContent;

    let decimal = parseInt(num, baseActual);

    if (isNaN(decimal)) {
        alert("Número inválido para la base actual");
        return;
    }

    if (valor === "Hx") {
        num = decimal.toString(16);
        baseActual = 16;
    }

    if (valor === "Dc") {
        num = decimal.toString(10);
        baseActual = 10;
    }

    if (valor === "Oc") {
        num = decimal.toString(8);
        baseActual = 8;
    }

    if (valor === "Bn") {
        num = decimal.toString(2);
        baseActual = 2;
    }

    pantalla.textContent = num;
}
/*Cambia entre divisas para la calculadora de divisas*/
function cambioDivisa(){
    if (document.getElementById("divisa").value == "" ) {
        alert("Seleccione divisa!!!");
    } else {
        if (document.getElementById("divisaConvertir").value == "" ) {
            alert("Seleccione divisa!!!");
        }
    }
    let pantalla = obtenerPantallaActiva();
    let euros = aEuros();
    pantalla.textContent = aDivisa(euros);
}
/*Pasa cualquier tipo de moneda a euros*/
function aEuros() {
    let valor = obtenerPantallaActiva().textContent;
    let divisaSel = document.getElementById("divisa").value;
    const tasasAEUR = {
        USD: 0.85,
        JPY: 0.0055,
        GBP: 1.14,
        CNY: 0.12,
        CHF: 1.10,
        CAD: 0.62,
        AUD: 0.60,
        EUR: 1
    };
    for (const divisas in tasasAEUR)
        if (divisaSel == divisas) {
            return valor * tasasAEUR[divisas];
        }
}
/*Pasa de euros a otras divisas*/
function aDivisa(euros) {
    let divisaSel = document.getElementById("divisaConvertir").value;
    const tasasDesdeEUR = {
        USD: 1.18,
        JPY: 183,
        GBP: 0.87,
        CNY: 8.17,
        CHF: 0.91,
        CAD: 1.62,
        AUD: 1.67,
        EUR: 1
    };
    for (const divisas in tasasDesdeEUR)
        if (divisaSel == divisas) {
            return euros * tasasDesdeEUR[divisas];
        }

}
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
            fecha = new Date(anio, mes-1, dia);
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
    if (hoy.getMonth() > cumple.getMonth()) {
        edad--;
    } else {
        if (hoy.getMonth() == cumple.getMonth()) {
            if (hoy.getDay() > cumple.getDay()) {
                edad--;
            }
        }
    }
    return edad;
}