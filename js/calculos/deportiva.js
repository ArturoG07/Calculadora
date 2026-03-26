function calcularRendimiento() {
    const km = Number(document.getElementById("kilometros").value);
    let h = Number(document.getElementById("horas").value);
    let m = Number(document.getElementById("minutos").value);
    let s = Number(document.getElementById("segundos").value);
    let pantalla = obtenerPantallaActiva();

    let rendimiento = km*1000/(h*3600+m*60+s);
    let dias = 0;
    while (s >= 60) {
        s = s-60;
        m++;
    }
    while (m >= 60) {
        m = m-60;
        h++;
    }
    while (h >= 24) {
        h = h-24;
        dias++;
    }

    let texto = `${rendimiento.toFixed(2)} m/s<hr>
    ${(rendimiento*3.6).toFixed(2)} km/h`;
    pantalla.innerHTML = texto;
    añadirHistorial(`Rendimiento :${km}km en ${dias} dia/s ${h}h ${m}min ${s}sg`)
}