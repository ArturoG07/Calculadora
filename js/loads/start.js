document.addEventListener('DOMContentLoaded', async () => {
    const estilos = [
        "css/componentes/botones.css",
        "css/componentes/forms.css",
        "css/layout/contenedoresEspecificos.css",
        "css/layout/contenedoresGenerales.css",

        // funcionalidades
        "css/funcionalidades/carrusel.css",
        "css/funcionalidades/historial.css",
        "css/funcionalidades/infoCalculadoras.css",

        // modos
        "css/modos/aurora.css",
        "css/modos/blanco.css",
        "css/modos/blue.css",
        "css/modos/cyber.css",
        "css/modos/green.css",
        "css/modos/negro.css",
        "css/modos/neon.css",
        "css/modos/pastel.css"
    ];

    const scripts = [
        // calculos
        "js/calculos/conversiones.js",
        "js/calculos/Basica.js",
        "js/calculos/divisas.js",
        "js/calculos/macros.js",
        "js/calculos/fechas.js",
        "js/calculos/interes.js",
        "js/calculos/pokemon.js",
        "js/calculos/IMC.js",
        "js/calculos/programador.js",
        "js/calculos/deportiva.js",

        // funcionalidades
        "js/Funcionalidades/carrusel.js",
        "js/Funcionalidades/historial.js",
        "js/Funcionalidades/estilos.js",
        "js/Funcionalidades/funcionalidadTeclado.js",
        "js/Funcionalidades/resoluciones.js",
        "js/Funcionalidades/generales.js",

        // loads
        "js/loads/loadsListeners.js"
    ];
    await cargarEstilos(estilos);
    await cargarCalculadoras();
    await cargarScriptsEnOrden(scripts);
    await cargarEventListeners();
    cargaFinal();
});
async function cargarEstilos(estilos) {
    for (const href of estilos) {
        await cargarEstilo(href)
    }
}
function cargarEstilo(href) {
    return new Promise((resolve, reject) => {
        const estilo = document.createElement("link");
        estilo.rel = "stylesheet";
        estilo.href = href;
        estilo.onload = resolve;
        estilo.onerror = reject;
        document.body.appendChild(estilo);
    });
}
async function cargarScriptsEnOrden(scripts) {
    for (const src of scripts) {
        await cargarScript(src);
    }
}
function cargarScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

async function cargarCalculadoras(){
    await cargarScript("js/loads/loadsCalculadoras.js");
    try {
        await cargarBasica();
        await cargarProgramador();
        await cargarDivisas();
        await cargarFechas();
        await cargarInteres();
        await cargarIMC();
        await cargarMacros();
        await cargarConversor();
        await cargarDeportiva();
        await cargarPokemon();
    } catch (error) {
        console.error("Error cargando contenidos:", error);
    }
}
function cargaFinal() {
    actualizarOpciones(document.getElementById("categoria").value);
    añadirCalculadorasMenu();
    document.getElementById("historial").innerHTML = localStorage.getItem("historial");
}