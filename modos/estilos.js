let actual = -1;
let temas = [];

// Detecta automáticamente todas las clases tema- disponibles en los estilos cargados
function obtenerTemas() {
    const hojas = document.styleSheets;

    for (let hoja of hojas) {
        try {
            const reglas = hoja.cssRules || hoja.rules;
            for (let regla of reglas) {
                if (regla.selectorText && regla.selectorText.startsWith("body.tema-")) {
                    const nombreTema = regla.selectorText
                        .replace("body.", "")
                        .trim();

                    if (!temas.includes(nombreTema)) {
                        temas.push(nombreTema);
                    }
                }
            }
        } catch (e) {
            // Evita errores por hojas externas con CORS
            continue;
        }
    }
}
/*Rota entre todos los temas detectados automaticamente al hacer click en el boton de cambiar el estilo*/
function cambiarTema() {
    if (temas.length === 0) return;

    if (actual >= 0) {
        document.body.classList.remove(temas[actual]);
    }

    actual = (actual + 1) % temas.length;
    document.body.classList.add(temas[actual]);
}


// Inicializar automáticamente
obtenerTemas();
cambiarTema();