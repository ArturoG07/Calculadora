const calculadoras = {
    calc1: resolverBasica,
    calc2: resolverProgramador,
    calc3: cambioDivisa,
    calc4: calculoFecha,
    calc5: calculoInteres,
    calc6: calculoIMC,
    calc7: calcularMacros,
    calc8: buscarClima,
    calc9: calcularConversion,
    calc10: calcularRendimiento,
    calc11: calcularAtaquePokemon,
};
document.querySelectorAll('.resultado').forEach(calculadora => {
    calculadora.addEventListener("click", () => calcular());
});

function calcular() {
    let calc = document.querySelector(".calculadora.activa");
        if (calculadoras[calc.id]) {
        calculadoras[calc.id]();
    }
}