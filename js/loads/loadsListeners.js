
function cargarEventListeners() {
    cargarListenersGenerales();
    cargarListenersEspecificos();

}
function cargarListenersGenerales() {
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
    document.querySelectorAll(".resultado").forEach( el => {
        el.addEventListener('click', e => {
            calcular();
        })
    })
    document.querySelectorAll(".conversion").forEach( el => {
        el.addEventListener('click', e => {
            conversion(el.textContent);
        })
    })
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
    document.getElementById("calculadorasBoton").addEventListener("click", mostrarCalculadoras);
    document.getElementById("botonHist").addEventListener("click", cambiarVista);
    document.getElementById("inf").addEventListener("click", mostrarInfo);
    document.getElementById("ocultarInfo").addEventListener("click", ocultarInfo);
    document.querySelector(".toggle").addEventListener("click", cambiarTema);
    document.getElementById("limpiar").addEventListener("click", function() {
        document.querySelectorAll('.pantalla').forEach(function(elemento) {
            elemento.textContent = "";
        });
    });

}
function cargarListenersEspecificos() {
    document.getElementById("mostrarDivisas").addEventListener("click", mostrarDivisas);
    document.getElementById("Base").addEventListener("click", cambiarBase);
    document.getElementById("categoria").addEventListener("change", function() {
        actualizarOpciones(document.getElementById("categoria").value);
    });
    // Selección de contenedores activos
    document.querySelectorAll('.pkm').forEach(cont => {
        cont.addEventListener('click', () => {
            document.querySelectorAll('.pkm').forEach(c => c.classList.remove('contenedorPokemonActivo'));
            cont.classList.add('contenedorPokemonActivo');
        });
    });
    // Eventos de selección de ataque y defensa
    document.getElementById("ATQ").addEventListener("click", () => actual = 1);
    document.getElementById("DEF1").addEventListener("click", () => actual = 2);
    document.getElementById("DEF2").addEventListener("click", () => actual = 3);

    // Cambio de tipo de Pokémon al hacer clic en un botón
    document.querySelectorAll('.botonPokemon').forEach(boton => {
        boton.addEventListener('click', () => {
            const contenedor = document.querySelector('.contenedorPokemonActivo');
            if (!contenedor) return;

            const imgUrl = `img/Pokemon_Type_Icon_${boton.id.charAt(0).toUpperCase() + boton.id.slice(1)}.png`;
            contenedor.style.backgroundImage = `url('${imgUrl}')`;
        });
    });

}