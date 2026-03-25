document.addEventListener('keydown', function(event) {
    const tecla = event.key;
    const calc = document.querySelector(".calculadora.activa");
    const calculadorasNumeros = ["calc1", "calc2", "calc3"];
    const calculadorasOperadores = ["calc1", "calc2"];
    const calculadoraProgramador  = "calc2";
    const pantalla = obtenerPantallaActiva();

    if (tecla === "Delete") {
        pantalla.textContent = "";
    }
    if (calculadorasNumeros.includes(calc.id) && tecla >= 0 && tecla <= 9) {
        apretarBoton(tecla);
    }
    if (calculadorasOperadores.includes(calc.id) && (tecla === '.' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/' || tecla === '(' || tecla === ')')) {
        apretarBoton(tecla);
    }
    if (calculadoraProgramador === calc.id) {
            if (tecla.toUpperCase() === 'A' || tecla.toUpperCase() === 'B' ||tecla.toUpperCase() === 'C'
            ||tecla.toUpperCase() === 'D' || tecla.toUpperCase() === 'E' || tecla.toUpperCase() === 'F' ) {
                apretarBoton(tecla.toUpperCase());
            }
    }
    if (tecla === 'Enter') {
        calcular(calc.id);
    }
    if (tecla === 'Backspace') {
            borrarUltimo();
    }
    if (tecla === 'Delete') {
            borrar();
    }
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