/*Pone el boton que se le pase en pantalla*/
function apretarBoton(valor) {
	let pantalla = obtenerPantallaActiva();
	pantalla.textContent += valor;
}
/*Borra el texto de la calculadora activa*/
function borrar() {
    let pantalla = obtenerPantallaActiva();
    pantalla.textContent = "";
}
/*Borra el ultimo caracter de la pantalla activa*/
function borrarUltimo() {
	let pantalla = obtenerPantallaActiva();
	pantalla.textContent = pantalla.textContent.slice(0, -1);
}
/*Comprueba que pantalla pertenece a la calculadora activa*/
function obtenerPantallaActiva() {
    const activa = document.querySelector(".calculadora.activa");
    return activa.querySelector(".pantalla");
}



/*Cuando se pulse una tecla en el teclado, comprueba si es una de los botones disponibles y lo pone en pantalla*/
document.addEventListener('keydown', function(event) {
    const tecla = event.key;
    const calc = document.querySelector(".calculadora.activa");
    if (["calc1", "calc2", "calc3"].includes(calc.id)) {
        if ((tecla >= '0' && tecla <= '9') || tecla === '.' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
            apretarBoton(tecla);
            /*En caso de las letras, se comprueba que estemos en esa calculadora, en caso de no estar, no pulsara nada*/
        } else if (tecla.toUpperCase() === 'A' || tecla.toUpperCase() === 'B' ||tecla.toUpperCase() === 'C'
            ||tecla.toUpperCase() === 'D' || tecla.toUpperCase() === 'E' || tecla.toUpperCase() === 'F' ) {
            const calcActiva = document.querySelector(".calculadora.activa");
            if (calcActiva.id == "calc2") {
                apretarBoton(tecla.toUpperCase());
            }
        } else if (tecla === 'Enter') {
            resolver();
        } else if (tecla === 'Backspace') {
            borrarUltimo();
        } else if (tecla.toLowerCase() === 'q') {
            borrar();
        } else if (tecla === '(' || tecla === ')') {
            apretarBoton(tecla);
	}}
    if (tecla == "ArrowRight"){
        nextBtn.click();
    }
    if (tecla == "ArrowLeft"){
        prevBtn.click();
    }
    if (tecla == " "){
        cambiarTema();
    }
});

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
function mostrarInfo() {
    document.getElementById("contInf").style.display = "block";
    document.getElementById("inf").style.display = "none";
    let calcActiva = document.querySelector(".calculadora.activa");
    cargarContenidoInfo(calcActiva);
}

function ocultarInfo() {
    document.getElementById("contInf").style.display = "none";
    document.getElementById("inf").style.display = "block";
}
function cargarContenidoInfo(calc) {
   let contenido = document.getElementById("contenido");
    if (calc.id === "calc1") {
        contenido.textContent = "Realiza operaciones matemáticas fundamentales como suma, resta, multiplicación, división, paréntesis y decimales, ofreciendo una experiencia rápida y sencilla.";
    }

    if (calc.id === "calc2") {
        contenido.textContent = "Permite trabajar con números en decimal, hexadecimal, octal y binario, realizando conversiones automáticas entre bases y mostrando la base activa en todo momento.";
    }

    if (calc.id === "calc3") {
        contenido.textContent = "Convierte entre múltiples monedas internacionales mediante la selección de divisa de origen y destino usando tasas de cambio predefinidas.";
    }

    if (calc.id === "calc4") {
        contenido.textContent = "Calcula la diferencia entre dos fechas en días, meses o años, y permite obtener la edad exacta a partir de una fecha de nacimiento.";
    }

    if (calc.id === "calc5") {
        contenido.textContent = "Calcula el total pagado, los intereses generados y la cuota mensual utilizando interés simple o compuesto según el caso.";
    }

    if (calc.id === "calc6") {
        contenido.textContent = "Obtén tu Índice de Masa Corporal introduciendo peso y altura para conocer tu estado corporal de forma rápida.";
    }

    if (calc.id === "calc7") {
        contenido.textContent = "Calcula calorías y distribución de macronutrientes según tus datos físicos, nivel de actividad y objetivo.";
    }

    if (calc.id === "calc8") {
        contenido.textContent = "Consulta el clima en tiempo real de cualquier ubicación mediante una API meteorológica abierta.";
    }

    if (calc.id === "calc9") {
        contenido.textContent = "Convierte fácilmente entre diferentes unidades de medida como longitud, peso o temperatura.";
    }

    if (calc.id === "calc10") {
        contenido.textContent = "Calcula tu velocidad media en m/s y km/h a partir de la distancia recorrida y el tiempo empleado.";
    }
}





