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
/*Cuando se pulse una tecla en el teclado, comprueba si es una de los botones disponibles y lo pone en pantalla*/
document.addEventListener('keydown', function(event) {
	const tecla = event.key;

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
	}
});

/*Cambia la hoja de estilos de light a dark y viceversa*/
function cambiarTema() {
  const tema = document.getElementById('tema');

  if (tema.getAttribute('href') === 'light.css') {
    tema.setAttribute('href', 'dark.css');
  } else {
    tema.setAttribute('href', 'light.css');
  }
}
/*Comprueba que pantalla pertenece a la calculadora activa*/
function obtenerPantallaActiva() {
	const activa = document.querySelector(".calculadora.activa");
	return activa.querySelector(".pantalla"); 
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




