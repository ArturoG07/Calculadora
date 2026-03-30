// Variable global que indica la base actual de la calculadora
let baseActual = 10;

/* ------------------------------
   Resuelve la operación en pantalla
--------------------------------- */
function resolverProgramador() {
    const pantalla = obtenerPantallaActiva();
    let expresion = pantalla.textContent;
    const operacionOriginal = expresion;

    // Si la base no es decimal, convertir cada número a decimal antes de evaluar
    if (baseActual !== 10) {
        const tokens = expresion.match(/[0-9A-F]+|[\+\-\*\/\(\)]/gi); // separa números y operadores
        if (!tokens) {
            pantalla.textContent = "Error";
            return;
        }
        expresion = tokens.map(tok => {
            if (/^[0-9A-F]+$/i.test(tok)) return parseInt(tok, baseActual); // parsea a decimal
            return tok; // operadores
        }).join('');
    }

    // Evaluar la expresión de manera segura
    try {
        const resultado = Function("return " + expresion)();
        if (typeof resultado === "number" && isFinite(resultado)) {
            pantalla.textContent = resultado.toString(baseActual).toUpperCase();
            añadirHistorial(operacionOriginal);
        } else {
            pantalla.textContent = "Error";
        }
    } catch (e) {
        pantalla.textContent = "Error";
    }
}

/* ------------------------------
   Cambio cíclico de bases
--------------------------------- */
function cambiarBase() {
    const baseLabel = document.getElementById("Base");

    switch (baseLabel.textContent) {
        case "Decimal":
            baseActual = 2;
            baseLabel.textContent = "Binario";
            break;
        case "Binario":
            baseActual = 8;
            baseLabel.textContent = "Octal";
            break;
        case "Octal":
            baseActual = 16;
            baseLabel.textContent = "Hexadecimal";
            break;
        case "Hexadecimal":
            baseActual = 10;
            baseLabel.textContent = "Decimal";
            break;
    }

    actualizarBotonesHex();
}

/* ------------------------------
   Habilita o deshabilita los botones A-F según la base
--------------------------------- */
function actualizarBotonesHex() {
    const botonesHex = document.querySelectorAll(".botonNum");

    botonesHex.forEach(btn => {
        const letra = btn.textContent.toUpperCase();
        if ("ABCDEF".includes(letra)) {
            btn.disabled = (baseActual !== 16);
            btn.style.opacity = (baseActual === 16 ? 1 : 0.5);
            btn.style.cursor = (baseActual === 16 ? "pointer" : "not-allowed");
        }
    });
}

/* ------------------------------
   Conversión directa entre bases
   valor: "Hx", "Dc", "Oc", "Bn"
--------------------------------- */
function conversion(valor) {
    const pantalla = obtenerPantallaActiva();
    const num = pantalla.textContent;
    const decimal = parseInt(num, baseActual);

    if (isNaN(decimal)) {
        alert("Número inválido para la base actual");
        return;
    }

    let nuevoValor;
    switch (valor) {
        case "Hx":
            nuevoValor = decimal.toString(16).toUpperCase();
            baseActual = 16;
            document.getElementById("Base").textContent = "Hexadecimal";
            break;
        case "Dc":
            nuevoValor = decimal.toString(10);
            baseActual = 10;
            document.getElementById("Base").textContent = "Decimal";
            break;
        case "Oc":
            nuevoValor = decimal.toString(8);
            baseActual = 8;
            document.getElementById("Base").textContent = "Octal";
            break;
        case "Bn":
            nuevoValor = decimal.toString(2);
            baseActual = 2;
            document.getElementById("Base").textContent = "Binario";
            break;
    }

    pantalla.textContent = nuevoValor;
    const expresionHistorial = `${num} TO ${valor}`;
    añadirHistorial(expresionHistorial, pantalla.textContent);
}