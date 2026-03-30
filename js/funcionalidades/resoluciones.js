/**
 * Asigna a cada calculadora la operacion que le corresponde
 * @type {{calc1: *, calc2: *, calc3: *, calc4: *, calc5: *, calc6: *, calc7: *, calc8: *, calc9: *, calc10: *}}
 */
const calculadoras = {
    calc1: resolverBasica,
    calc2: resolverProgramador,
    calc3: cambioDivisa,
    calc4: calculoFecha,
    calc5: calculoInteres,
    calc6: calculoIMC,
    calc7: calcularMacros,
    calc8: calcularConversion,
    calc9: calcularRendimiento,
    calc10: calcularAtaquePokemon,
};

/**
 * Ejecuta la funcion correspondiante a la calculadora
 */
function calcular() {
    let calc = document.querySelector(".calculadora.activa");
        if (calculadoras[calc.id]) {
        calculadoras[calc.id]();
    }
}