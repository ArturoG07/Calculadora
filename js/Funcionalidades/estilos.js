let actual;
let temas = [];

// Recupera el tema seleccionado previamente desde localStorage
actual = parseInt(localStorage.getItem("modo"));
if (isNaN(actual)) actual = 0;

/* -----------------------------------------
   Detecta automáticamente todas las clases de tema
   que comiencen con "tema-" en las hojas de estilo
----------------------------------------- */
function obtenerTemas() {
    const hojas = document.styleSheets;

    for (let hoja of hojas) {
        try {
            const reglas = hoja.cssRules || hoja.rules;

            for (let regla of reglas) {
                if (regla.selectorText && regla.selectorText.startsWith("body.tema-")) {
                    const nombreTema = regla.selectorText.replace("body.", "").trim();

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

/* -----------------------------------------
   Cambia al siguiente tema de forma cíclica
----------------------------------------- */
function cambiarTema() {
    if (temas.length === 0) return;

    // Remover clase del tema actual
    if (actual >= 0 && actual < temas.length) {
        document.body.classList.remove(temas[actual]);
    }

    // Incrementar índice y aplicar el siguiente tema
    actual = (actual + 1) % temas.length;
    document.body.classList.add(temas[actual]);

    // Guardar selección en localStorage
    localStorage.setItem("modo", actual);
}

/* -----------------------------------------
   Inicialización: obtener temas y aplicar el guardado
----------------------------------------- */
obtenerTemas();

if (temas.length > 0) {
    if (actual >= temas.length) actual = 0; // Por si hay cambios en las hojas CSS
    document.body.classList.add(temas[actual]);
}