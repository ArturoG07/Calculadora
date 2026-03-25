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
        contenido.textContent = "" +
            "Realiza operaciones matemáticas fundamentales como suma, resta, multiplicación, división, paréntesis y decimales, ofreciendo una experiencia rápida y sencilla."
    }

    if (calc.id === "calc2") {
        contenido.textContent = "Permite trabajar con números en decimal, hexadecimal, octal y binario, realizando conversiones automáticas entre bases y mostrando la base activa en todo momento." +
            "\nPara cambiar de base, hacer click en el contenedor arriba a la izquierda"
    }

    if (calc.id === "calc3") {
        contenido.textContent = "Convierte entre múltiples monedas internacionales mediante la selección de divisa de origen y destino usando una api libre, se debe escribir las tasas con formato de 3 caracteres en mayuscula (USD, EUR, etc..)" ;
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
    if (calc.id === "calc11") {
        contenido.textContent = "Permite calcular la efectividad de un ataque de un tipo a otro"
    }
}

function mostrarCalculadoras() {
    const cont = document.getElementById("calculadoras");

    if (cont.style.display === "block") {
        cont.style.display = "none";
        document.getElementById("calculadorasBoton").style.left ="5px";
        document.getElementById("calculadorasBoton").style.top ="35%";
        document.getElementById("Base").style.left = "5px";
        document.getElementById("Base").style.top = "20px";
    } else {
        cont.style.display = "block";
        document.getElementById("calculadorasBoton").style.left ="40%";
        document.getElementById("calculadorasBoton").style.top ="0%";
        document.getElementById("Base").style.left = "40%";
        document.getElementById("Base").style.top = "10%";
    }

}

function añadirCalculadorasMenu() {
    const calcs = document.querySelectorAll('.calculadora');
    const contenedor = document.getElementById("calculadoras");
    calcs.forEach((calc, index) => {
        let midiv = document.createElement("div");
        midiv.classList.add("calculadoraMenu");
        midiv.textContent = calc.querySelector("h2").textContent;
        contenedor.append(midiv);
        midiv.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
}
añadirCalculadorasMenu();

document.getElementById("limpiar").addEventListener("click", function() {
    document.querySelectorAll('.pantalla').forEach(function(elemento) {
        elemento.textContent = "";
    });
});