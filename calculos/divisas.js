/*Cambia entre divisas para la calculadora de divisas*/
async function cambioDivisa(){
    let pantalla = obtenerPantallaActiva();
    if (document.getElementById("divisa").value == "" ) {
        pantalla.textContent = "❌ Error al obtener cambio, seleccione divisa";
    } else {
        if (document.getElementById("divisaConvertir").value == "" ) {
            pantalla.textContent = "❌ Error al obtener cambio, seleccione divisa";
        }
    }
    let divisa = document.getElementById("divisa").value;
    let divisaConvertir = document.getElementById("divisaConvertir").value;
    let cantidad = pantalla.textContent;

    const url = `https://v6.exchangerate-api.com/v6/b142171f17532ed003df8707/latest/${divisa}`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error("Divisa no encontrada");
        }
        const datos = await respuesta.json();

        const cambio = datos.conversion_rates[divisaConvertir];
        let final = cantidad*cambio;
        pantalla.textContent = final;
        let textoOperacion = `${cantidad} ${divisa} a ${divisaConvertir}`;
        añadirHistorial(textoOperacion);
    }
    catch (error) {
        pantalla.textContent = "❌ Error al obtener cambio";
        return null;
    }
}
function mostrarDivisas() {
    const contenedor = document.getElementById("divisas");
    const divisa = document.getElementById("mostrarDivisas");

    if (contenedor.style.display === "none") {
        contenedor.style.display = "block";
        divisa.style.left = "33%";
        divisa.style.top = "0";
    } else {
        contenedor.style.display = "none";
        divisa.style.left = "5px";
        divisa.style.top = "20px";
    }
}