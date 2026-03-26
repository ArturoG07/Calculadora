/*Busca el clima en tiempo real usando la api openweathermap*/
async function buscarClima() {
    let pantalla = obtenerPantallaActiva();
    let zona = document.getElementById("zona").value;
    const KEY1 = API_KEY_CLIMA;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${zona}&appid=${KEY1}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error("Ciudad no encontrada");
        }
        const datos = await respuesta.json();

        const temperatura = datos.main.temp;
        const humedad = datos.main.humidity;
        const viento = (datos.wind.speed * 3.6).toFixed(1);
        const descripcion = datos.weather[0].description;

        pantalla.innerHTML =
            `🌡 Temperatura: ${temperatura}°C<hr>` +
            `💧 Humedad: ${humedad}%<hr>` +
            `💨 Viento: ${viento} km/h<hr>` +
            `📝 Descripción: ${descripcion}`;
        añadirHistorial(`Clima de ${zona}`);
    } catch (error) {
        pantalla.textContent = "❌ Error al obtener clima";
        return null;
    }
}