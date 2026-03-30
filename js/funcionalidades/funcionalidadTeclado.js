document.addEventListener('keydown', function(event) {
    const tecla = event.key;
    const calc = document.querySelector(".calculadora.activa");
    const calculadorasNumeros = ["calc1", "calc2", "calc3"];
    const calculadorasOperadores = ["calc1", "calc2"];
    const calculadoraProgramador  = "calc2";
    const pantalla = obtenerPantallaActiva();
    const tag = document.activeElement.tagName.toLowerCase();

    // Evitar interferir cuando el usuario escribe en input, textarea o select
    const enInput = (tag === 'input' || tag === 'textarea' || tag === 'select');

    // -----------------------------------
    // Teclas de edición
    // -----------------------------------
    if (tecla === "Delete") {
        borrar(); // Limpiar pantalla
        return;
    }
    if (tecla === "Backspace") {
        borrarUltimo(); // Borrar último carácter
        return;
    }

    // -----------------------------------
    // Teclas de números
    // -----------------------------------
    if (calculadorasNumeros.includes(calc.id) && tecla >= '0' && tecla <= '9') {
        apretarBoton(tecla);
        return;
    }

    // -----------------------------------
    // Teclas de operadores
    // -----------------------------------
    if (calculadorasOperadores.includes(calc.id) && ['.', '+', '-', '*', '/', '(', ')'].includes(tecla)) {
        apretarBoton(tecla);
        return;
    }

    // -----------------------------------
    // Teclas de calculadora programador (hex)
    // -----------------------------------
    if (calc.id === calculadoraProgramador) {
        if ("ABCDEF".includes(tecla.toUpperCase())) {
            apretarBoton(tecla.toUpperCase());
            return;
        }
    }

    // -----------------------------------
    // Ejecutar cálculo
    // -----------------------------------
    if (tecla === 'Enter') {
        calcular(calc.id);
        return;
    }

    // -----------------------------------
    // Navegación carrusel (ignorar inputs)
    // -----------------------------------
    if (!enInput) {
        if (tecla === "ArrowRight") {
            nextBtn.click();
            return;
        }
        if (tecla === "ArrowLeft") {
            prevBtn.click();
            return;
        }
        if (tecla === " ") {
            cambiarTema();
            return;
        }
    }
});