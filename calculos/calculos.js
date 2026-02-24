/*Resuelve la operacion en pantalla*/
function resolver() {
    const pantalla = obtenerPantallaActiva();
    const calcActiva = document.querySelector(".calculadora.activa");
    let expresion = pantalla.textContent;
    let operacion = pantalla.textContent;

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
            let final = resultado.toString(baseActual).toUpperCase();
            pantalla.textContent = final;
            operacion = `${operacion} = ${final}`
            añadirHistorial(operacion);
        } else {
            pantalla.textContent = "Error";
        }
    } catch(e) {
        pantalla.textContent = "Error";
    }
}



