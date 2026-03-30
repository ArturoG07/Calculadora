/**
 * Muestra o oculta el menu de calculadoras segun como este en ese momento
 */
function mostrarCalculadoras() {
    const cont = document.getElementById("calculadoras");

    if (cont.style.display === "block") {
        cont.style.display = "none";
        document.getElementById("calculadorasBoton").style.left ="5px";
        document.getElementById("calculadorasBoton").style.top ="35%";
        document.getElementById("Base").style.left = "5px";
        document.getElementById("Base").style.top = "20px";
    } else {
        cont.style.display = "block";
        document.getElementById("calculadorasBoton").style.left ="40%";
        document.getElementById("calculadorasBoton").style.top ="0%";
        document.getElementById("Base").style.left = "40%";
        document.getElementById("Base").style.top = "10%";
    }

}

/**
 * detecta y añade automaticamente todas las calculadoras al menu
 */
function añadirCalculadorasMenu() {
    const calcs = document.querySelectorAll('.calculadora');
    const contenedor = document.getElementById("calculadoras");
    calcs.forEach((calc, index) => {
        let midiv = document.createElement("div");
        midiv.classList.add("calculadoraMenu");
        midiv.textContent = calc.querySelector("h2").textContent;
        contenedor.append(midiv);
        midiv.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
}