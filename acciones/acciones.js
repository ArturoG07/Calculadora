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
});









