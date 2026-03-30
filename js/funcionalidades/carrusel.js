// Referencias principales del carrusel
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.calculadora'); // Cada calculadora en el carrusel
const prevBtn = document.querySelector('.prev'); // Botón anterior
const nextBtn = document.querySelector('.next'); // Botón siguiente

// Índice actual del carrusel
let currentIndex = 0;

/* ------------------------------
   Activar calculadora por click
--------------------------------- */
function activarCalculadoraPorClick() {
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });
}

/* ------------------------------
   Actualiza el carrusel visualmente
--------------------------------- */
function updateCarousel() {
    // Remover clase 'activa' de todas las calculadoras
    cards.forEach(card => card.classList.remove('activa'));
    // Asignar clase 'activa' a la calculadora actual
    cards[currentIndex].classList.add('activa');

    // Centrar la calculadora activa en el carrusel
    const offset = -((cards[currentIndex].offsetLeft) - (track.offsetWidth / 2) + (cards[currentIndex].offsetWidth / 2));
    track.style.transform = `translateX(${offset}px)`;

    // Mostrar u ocultar elementos especiales según la calculadora activa
    handleElementosEspeciales();

    // Actualizar interactividad de botones, inputs y selects
    actualizarBotones();

    // Cargar contenido informativo relacionado con la calculadora activa
    cargarContenidoInfo(document.querySelector(".calculadora.activa"));
}

/* ------------------------------
   Mostrar u ocultar elementos especiales según la calculadora
--------------------------------- */
function handleElementosEspeciales() {
    // Base para calculadora de programador
    const baseElem = document.getElementById("Base");
    if (currentIndex === 1) { // Programador
        baseElem.style.display = "block";
    } else {
        baseElem.style.display = "none";
        baseElem.textContent = "Decimal"; // Reset base
    }
    baseElem.style.left = "5px";
    baseElem.style.top = "20px";

    // Divisas
    const mostrarDivisas = document.getElementById("mostrarDivisas");
    const divisas = document.getElementById("divisas");
    if (currentIndex === 2) { // Divisas
        mostrarDivisas.style.display = "block";
    } else {
        mostrarDivisas.style.display = "none";
        divisas.style.display = "none";
    }
    mostrarDivisas.style.left = "5px";
    mostrarDivisas.style.top = "20px";
}

/* ------------------------------
   Activar / desactivar inputs y botones según calculadora activa
--------------------------------- */
function actualizarBotones() {
    cards.forEach(calc => {
        const activa = calc.classList.contains('activa');

        // Botones
        calc.querySelectorAll('.boton').forEach(btn => {
            btn.style.pointerEvents = activa ? 'auto' : 'none';
        });

        // Inputs
        calc.querySelectorAll('input').forEach(input => input.disabled = !activa);

        // Selects
        calc.querySelectorAll('select').forEach(select => select.disabled = !activa);
    });
}