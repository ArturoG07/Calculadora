/**
 * Muestra el menú de informacion de la calculadora
 */
function mostrarInfo() {
    document.getElementById("contInf").style.display = "block";
    document.getElementById("inf").style.display = "none";
    let calcActiva = document.querySelector(".calculadora.activa");
    cargarContenidoInfo(calcActiva);
}

/**
 * Oculta el menú de informacion de la calculadora
 */
function ocultarInfo() {
    document.getElementById("contInf").style.display = "none";
    document.getElementById("inf").style.display = "block";
}

/**
 * Breve descripcion de cada calculadora
 */
const infoCalculadoras = {
    calc1: "Realiza operaciones matemáticas fundamentales...",
    calc2: "Permite trabajar con números en decimal, hexadecimal...",
    calc3: "Convierte entre múltiples monedas internacionales...",
    calc4: "Calcula la diferencia entre dos fechas...",
    calc5: "Calcula el total pagado, los intereses generados...",
    calc6: "Obtén tu Índice de Masa Corporal...",
    calc7: "Calcula calorías y distribución de macronutrientes...",
    calc8: "Convierte fácilmente entre diferentes unidades de medida...",
    calc9: "Calcula tu velocidad media en m/s y km/h...",
    calc10: "Permite calcular la efectividad de un ataque de un tipo a otro"
};

/**
 * Carga el contenido segun la calculadora
 * @param calc Id de la calculadora de la que se quiere cargar la informacion
 */
function cargarContenidoInfo(calc) {
    const contenido = document.getElementById("contenido");
    contenido.textContent = infoCalculadoras[calc.id] || "";
}