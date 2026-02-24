/*Muestra el contenedor del historial, cambia de sitio la base de programador, el boton de historial,
y cambia el texto a ocultar*/
function mostrarHistorial() {
    document.getElementById("historial").style.display = "block";
    document.getElementById("botonHist").textContent = "<Ocultar Historial";
    document.getElementById("botonHist").style.left ="40%";
    document.getElementById("botonHist").style.bottom ="10%";
    document.getElementById("Base").style.left = "40%";
}
/*Oculta el contenedor de historial, y devuelve los botones a su lugar original*/
function ocultarHistorial () {
    document.getElementById("historial").style.display = "none";
    document.getElementById("botonHist").textContent = "Mostrar historial>";
    document.getElementById("botonHist").style.left = "5px";
    document.getElementById("botonHist").style.bottom ="40%";
    document.getElementById("Base").style.left = "5px";
}
/*Añade una operacion al historial, pasandole como parametro el texto de la operacon, el resultado lo coge de la pantalla*/
function añadirHistorial(textoOperacion) {
    let miDiv = document.createElement("div");
    miDiv.classList.add("operacion");
    miDiv.textContent = `${textoOperacion} = ${obtenerPantallaActiva().textContent}`;
    document.getElementById("historial").prepend(miDiv);
}
/*Muestra o oculta el historial*/
function cambiarVista() {
    let historial = document.getElementById("botonHist");
    if (historial.textContent == "Mostrar historial>") {
        mostrarHistorial();
    } else {
        ocultarHistorial();
    }
}