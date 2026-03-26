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
}