/*Resuelve la operacion en pantalla*/
function resolverProgramador() {
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
            operacion = `${operacion}`
            añadirHistorial(operacion);
        } else {
            pantalla.textContent = "Error";
        }
    } catch(e) {
        pantalla.textContent = "Error";
    }
}
/*Cambio entre bases para la calculadora de programador*/
function cambiarBase() {
    let tipo = document.getElementById("Base").textContent;

    switch(tipo) {
        case "Decimal":
            document.getElementById("Base").textContent = "Binario";
            baseActual = 2;
            break;
        case "Binario":
            document.getElementById("Base").textContent = "Octal";
            baseActual = 8;
            break;
        case "Octal":
            document.getElementById("Base").textContent = "Hexadecimal";
            baseActual = 16;
            break;
        case "Hexadecimal":
            document.getElementById("Base").textContent = "Decimal";
            baseActual = 10;
            break;
    }

    actualizarBotonesHex(); // habilita/deshabilita A-F
}
function actualizarBotonesHex() {
    const botonesHex = document.querySelectorAll(".botonNum");

    botonesHex.forEach(btn => {
        const letra = btn.textContent.toUpperCase();
        if ("ABCDEF".includes(letra)) {
            // Solo habilitar si la base actual es 16
            btn.disabled = (baseActual !== 16);
            btn.style.opacity = (baseActual === 16 ? 1 : 0.5);
            btn.style.cursor = (baseActual === 16 ? "pointer" : "not-allowed");
        }
    });
}
let baseActual = 10;
/*Convierte entre bases para la calculadora de programador*/
function conversion(valor) {
    let pantalla = obtenerPantallaActiva();
    let num = pantalla.textContent;

    let decimal = parseInt(num, baseActual);
    let base;
    if (baseActual == 10) {
        base = "Dc"
    }
    if (baseActual == 8) {
        base = "Oc"
    }
    if (baseActual == 16) {
        base = "Hx"
    }
    if (baseActual == 2) {
        base = "Bn"
    }
    let expresion = `${base} ${num} TO ${valor}`
    if (isNaN(decimal)) {
        alert("Número inválido para la base actual");
        return;
    }

    if (valor === "Hx") {
        num = decimal.toString(16).toUpperCase();
        baseActual = 16;
        document.getElementById("Base").textContent = "Hexadecimal";
    }

    if (valor === "Dc") {
        num = decimal.toString(10);
        baseActual = 10;
        document.getElementById("Base").textContent = "Decimal";
    }

    if (valor === "Oc") {
        num = decimal.toString(8);
        baseActual = 8;
        document.getElementById("Base").textContent = "Octal"
    }

    if (valor === "Bn") {
        num = decimal.toString(2);
        baseActual = 2;
        document.getElementById("Base").textContent = "Binario"
    }

    pantalla.textContent = num;
    añadirHistorial(expresion, pantalla.textContent);
}
