/**
 * 📌 basica.js
 * Función para resolver operaciones matemáticas básicas.
 * Evalúa la operación que se muestra en la pantalla activa y actualiza la UI.
 * También registra la operación en el historial.
 */

function resolverBasica() {
    // Obtiene el elemento de la pantalla que está actualmente activo
    const pantalla = obtenerPantallaActiva();

    // Obtiene la operación como string desde la pantalla
    const operacion = pantalla.textContent;

    try {
        /**
         * Evalúa la operación de forma segura usando Function.
         * ⚠️ Nota: Function es más seguro que eval, pero aún así se debe controlar
         * la entrada si proviene de usuarios para evitar código malicioso.
         */
        const resultado = Function("return " + operacion)();

        // Actualiza la pantalla con el resultado
        pantalla.textContent = resultado;

        // Añade la operación al historial
        añadirHistorial(operacion);
    } catch (error) {
        // En caso de error, muestra "Error" y registra en consola
        pantalla.textContent = "Error";
        console.error("Operación inválida:", error);
    }
}