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
    calc1: "Realiza operaciones matemáticas fundamentales como suma, resta, division, multiplicacion",
    calc2: "Permite trabajar con números en decimal, hexadecimal, octal y binario, hacer operaciones en esas bases y hacer conversiones",
    calc3: "Convierte entre múltiples monedas internacionales usando tasas en tiempo real",
    calc4: "Calcula la diferencia entre dos fechas en dias, meses, años, o la edad que tendria alguien de la primera fecha",
    calc5: "Calcula el total pagado, los intereses generados, y la cuota mensual",
    calc6: "Obtén tu Índice de Masa Corporal a partir de tu peso y altura",
    calc7: "Calcula calorías y distribución de macronutrientes segun sexo, edad, peso, altura, objetivo y preferencia",
    calc8: "Convierte fácilmente entre diferentes unidades de medida",
    calc9: "Calcula tu velocidad media en m/s y km/h",
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