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

function calcular() {
    let calc = document.querySelector(".calculadora.activa");
        if (calculadoras[calc.id]) {
        calculadoras[calc.id]();
    }
}