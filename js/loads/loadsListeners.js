
function cargarEventListeners() {
    document.querySelectorAll('.botonOp').forEach(el => {
        el.addEventListener('click', e => {
            apretarBoton(e.target.textContent);
        })
    })
    document.querySelectorAll('.botonNum').forEach(el => {
        el.addEventListener('click', e => {
            apretarBoton(e.target.textContent);
        })
    })
    document.querySelectorAll('.botonCE').forEach( el => {
        el.addEventListener('click', e => {
            borrar();
        })
    })
    document.querySelectorAll(".botonC").forEach( el => {
        el.addEventListener('click', e => {
            borrar();
        })
    })
    document.querySelectorAll(".hex").forEach( el => {
        el.addEventListener('click', e => {
            apretarBoton(e.target.textContent);
        })
    })
    document.querySelectorAll(".enviar").forEach( el => {
        el.addEventListener('click', e => {
            calcular();
        })
    })
    document.querySelectorAll(".conversion").forEach( el => {
        el.addEventListener('click', e => {
            conversion(el.textContent);
        })
    })
    document.getElementById("mostrarDivisas").addEventListener("click", mostrarDivisas);
    document.getElementById("Base").addEventListener("click", cambiarBase);
    document.getElementById("categoria").addEventListener("change", function() {
        actualizarOpciones(document.getElementById("categoria").value);
    });
    document.getElementById("limpiar").addEventListener("click", function() {
        document.querySelectorAll('.pantalla').forEach(function(elemento) {
            elemento.textContent = "";
        });
    });
    /*Comprueba que haya mas calculadoras, pasa a la siquiente y actualiza el carrusel*/
    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    /*Comprueba que haya mas calculadoras atras, pasa a la siguiente y actualiza el carrusel*/
    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    window.addEventListener("load", () => {
        updateCarousel();
        activarCalculadoraPorClick()
    });
    window.addEventListener("resize", updateCarousel);
}