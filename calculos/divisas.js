/*Cambia entre divisas para la calculadora de divisas*/
function cambioDivisa(){
    if (document.getElementById("divisa").value == "" ) {
        alert("Seleccione divisa!!!");
    } else {
        if (document.getElementById("divisaConvertir").value == "" ) {
            alert("Seleccione divisa!!!");
        }
    }
    let divisa = document.getElementById("divisa").value;
    let divisaConvertir = document.getElementById("divisaConvertir").value;
    let pantalla = obtenerPantallaActiva();
    let cantidad = pantalla.textContent;
    let euros = aEuros();
    pantalla.textContent = aDivisa(euros);
    let textoOperacion = `${cantidad} ${divisa} a ${divisaConvertir}`;
    añadirHistorial(textoOperacion, pantalla.textContent);
}
/*Pasa cualquier tipo de moneda a euros*/
function aEuros() {
    let valor = obtenerPantallaActiva().textContent;
    let divisaSel = document.getElementById("divisa").value;
    const tasasAEUR = {
        USD: 0.85,
        JPY: 0.0055,
        GBP: 1.14,
        CNY: 0.12,
        CHF: 1.10,
        CAD: 0.62,
        AUD: 0.60,
        EUR: 1
    };
    for (const divisas in tasasAEUR)
        if (divisaSel == divisas) {
            return valor * tasasAEUR[divisas];
        }
}
/*Pasa de euros a otras divisas*/
function aDivisa(euros) {
    let divisaSel = document.getElementById("divisaConvertir").value;
    const tasasDesdeEUR = {
        USD: 1.18,
        JPY: 183,
        GBP: 0.87,
        CNY: 8.17,
        CHF: 0.91,
        CAD: 1.62,
        AUD: 1.67,
        EUR: 1
    };
    for (const divisas in tasasDesdeEUR)
        if (divisaSel == divisas) {
            return euros * tasasDesdeEUR[divisas];
        }

}