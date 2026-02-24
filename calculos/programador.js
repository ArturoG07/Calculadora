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
