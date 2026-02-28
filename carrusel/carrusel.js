/*Recorrido del carrusel*/
const track = document.querySelector('.carousel-track');
/*Cada elemento calculadora incluido en el carrusel*/
const cards = document.querySelectorAll('.calculadora');
/*Boton de anterior*/
const prevBtn = document.querySelector('.prev');
/*Boton de siguiente*/
const nextBtn = document.querySelector('.next');
/*Indice*/
let currentIndex = 0;

window.addEventListener("load", () => {
    updateCarousel();
});
window.addEventListener("resize", updateCarousel);
/*Funcion principal del carrusel, quita a todos la clase activa, y se la asigna al indice actual*/
function updateCarousel() {
    cards.forEach(calculadora => calculadora.classList.remove('activa'));
    cards[currentIndex].classList.add('activa');

    const offset = -((cards[currentIndex].offsetLeft) - (track.offsetWidth / 2) + (cards[currentIndex].offsetWidth / 2));
    track.style.transform = `translateX(${offset}px)`;
    /*Comprueba si esta en la calculadora de programador, en caso negativo pasa la
    base a decimal y la oculta, sino la muestra*/
    if (currentIndex != 1) {
        document.getElementById("Base").textContent = "Decimal";
        document.getElementById("Base").style.display = "none";
    } else {
        document.getElementById("Base").style.display = "block";
    }
    actualizarBotones();
}
/*Comprueba que haya mas calculadoras, pasa a la siquiente y actualiza el carrusel*/
nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});
/*Comprueba que haya mas calculadoras atras, pasa a la siguiente y actualiza el carrusel*/
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function actualizarBotones() {
    const calculadoras = document.querySelectorAll('.calculadora');

    calculadoras.forEach(calc => {
        const botones = calc.querySelectorAll('.boton');
        const inputs = calc.querySelectorAll('input');
        const selects = calc.querySelectorAll('select');

        const activa = calc.classList.contains('activa');

        // Activar / desactivar botones
        botones.forEach(btn => {
            btn.style.pointerEvents = activa ? 'auto' : 'none';
        });

        // Activar / desactivar inputs
        inputs.forEach(input => {
            input.disabled = !activa;
        });

        // Activar / desactivar selects
        selects.forEach(select => {
            select.disabled = !activa;
        });
    });
}
