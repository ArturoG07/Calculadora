function resolverBasica() {
    const pantalla = obtenerPantallaActiva();
    let operacion = pantalla.textContent;

    try {
        const resultado = Function("return " + operacion)(); // evalúa la operación
        pantalla.textContent = resultado; // muestra el resultado
        añadirHistorial(operacion); // guarda la operación en el historial
    } catch (error) {
        pantalla.textContent = "Error";
        console.error("Operación inválida:", error);
    }
}