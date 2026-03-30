// Elementos del DOM para ataque y defensa
const atq = document.getElementById("ATQ");
const def1 = document.getElementById("DEF1");
const def2 = document.getElementById("DEF2");

// Botones de selección de tipo y contenedores de Pokémon
const botones = document.querySelectorAll('.botonPokemon');
const contenedores = document.querySelectorAll('.pkm');

// Lista de tipos de Pokémon
const tipos = [
    "normal","lucha","volador","veneno","tierra","roca","bicho","fantasma",
    "acero","fuego","agua","planta","electrico","psiquico","hielo","dragon",
    "siniestro","hada"
];

// Tabla de efectividad (multiplicadores) según el tipo atacante y defensor
const efectividad = {
    normal:    [1,1,1,1,1,0.5,1,0,0.5,1,1,1,1,1,1,1,1,1],
    lucha:     [2,1,0.5,0.5,1,2,0.5,0,2,1,1,1,1,0.5,2,1,2,0.5],
    volador:   [1,2,1,1,1,0.5,2,1,0.5,1,1,2,0.5,1,1,1,1,1],
    veneno:    [1,1,1,0.5,0.5,0.5,1,0.5,0,1,1,2,1,1,1,1,1,2],
    tierra:    [1,1,0,2,1,2,0.5,1,2,2,1,0.5,2,1,1,1,1,1],
    roca:      [1,0.5,2,1,0.5,1,2,1,0.5,2,1,1,1,1,2,1,1,1],
    bicho:     [1,0.5,0.5,0.5,1,1,1,0.5,0.5,0.5,1,2,1,2,1,1,2,0.5],
    fantasma:  [0,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,0.5,1],
    acero:     [1,1,1,1,1,2,1,1,0.5,0.5,0.5,1,0.5,1,2,1,1,2],
    fuego:     [1,1,1,1,1,0.5,2,1,2,0.5,0.5,2,1,1,2,0.5,1,1],
    agua:      [1,1,1,1,2,2,1,1,1,2,0.5,0.5,1,1,1,0.5,1,1],
    planta:    [1,1,0.5,0.5,2,2,0.5,1,0.5,0.5,2,0.5,1,1,1,0.5,1,1],
    electrico: [1,1,2,1,0,1,1,1,1,1,2,0.5,0.5,1,1,0.5,1,1],
    psiquico:  [1,2,1,2,1,1,1,1,0.5,1,1,1,1,0.5,1,1,1,1],
    hielo:     [1,1,2,1,2,1,1,1,0.5,0.5,0.5,2,1,1,0.5,2,1,1],
    dragon:    [1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,2,1,0],
    siniestro: [1,0.5,1,1,1,1,1,2,1,1,1,1,1,2,1,1,0.5,0.5],
    hada:      [1,2,1,0.5,1,1,1,1,0.5,1,1,1,1,1,1,2,2,1]
};

// Map de imágenes a tipos de Pokémon
const imagenATipo = {
    "Pokemon_Type_Icon_Normal.png": "normal",
    "Pokemon_Type_Icon_Bug.png": "bicho",
    "Pokemon_Type_Icon_Dark.png": "siniestro",
    "Pokemon_Type_Icon_Dragon.png": "dragon",
    "Pokemon_Type_Icon_Electric.png": "electrico",
    "Pokemon_Type_Icon_Fairy.png": "hada",
    "Pokemon_Type_Icon_Fighting.png": "lucha",
    "Pokemon_Type_Icon_Fire.png": "fuego",
    "Pokemon_Type_Icon_Flying.png": "volador",
    "Pokemon_Type_Icon_Ghost.png": "fantasma",
    "Pokemon_Type_Icon_Grass.png": "planta",
    "Pokemon_Type_Icon_Ground.png": "tierra",
    "Pokemon_Type_Icon_Ice.png": "hielo",
    "Pokemon_Type_Icon_Poison.png": "veneno",
    "Pokemon_Type_Icon_Psychic.png": "psiquico",
    "Pokemon_Type_Icon_Rock.png": "roca",
    "Pokemon_Type_Icon_Steel.png": "acero",
    "Pokemon_Type_Icon_Water.png": "agua"
};

// Variables de control de selección (1 = ataque, 2/3 = defensa)
let actual = 1;

// Eventos de selección de ataque y defensa
atq.addEventListener("click", () => actual = 1);
def1.addEventListener("click", () => actual = 2);
def2.addEventListener("click", () => actual = 3);

// Selección de contenedores activos
contenedores.forEach(cont => {
    cont.addEventListener('click', () => {
        contenedores.forEach(c => c.classList.remove('contenedorPokemonActivo'));
        cont.classList.add('contenedorPokemonActivo');
    });
});

// Cambio de tipo de Pokémon al hacer clic en un botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const contenedor = document.querySelector('.contenedorPokemonActivo');
        if (!contenedor) return;

        const imgUrl = `img/Pokemon_Type_Icon_${boton.id.charAt(0).toUpperCase() + boton.id.slice(1)}.png`;
        contenedor.style.backgroundImage = `url('${imgUrl}')`;
    });
});

// Obtiene el tipo de Pokémon según la imagen de fondo del contenedor
function obtenerTipoPorImagen(contenedor) {
    if (!contenedor || !contenedor.style.backgroundImage) return null;
    const match = contenedor.style.backgroundImage.match(/Pokemon_Type_Icon_\w+\.png/);
    return match ? imagenATipo[match[0]] : null;
}

// Calcula el multiplicador de daño de un ataque según tipos
function calcularAtaquePokemon() {
    const tipoAtq = obtenerTipoPorImagen(atq);
    const tipodef1 = obtenerTipoPorImagen(def1);
    const tipodef2 = obtenerTipoPorImagen(def2);

    if (!tipoAtq) {
        console.log("No se ha seleccionado tipo de ataque.");
        return;
    }

    let multiplicador = 1;

    if (tipodef1) multiplicador *= efectividad[tipoAtq][tipos.indexOf(tipodef1)];
    if (tipodef2) multiplicador *= efectividad[tipoAtq][tipos.indexOf(tipodef2)];

    let textoEfectividad;
    if (multiplicador === 0) textoEfectividad = "No es eficaz";
    else if (multiplicador < 1) textoEfectividad = "Poco eficaz";
    else if (multiplicador === 1) textoEfectividad = "Normal";
    else textoEfectividad = "Muy eficaz";

    obtenerPantallaActiva().textContent = `Multiplicador: ${multiplicador}\nEfectividad: ${textoEfectividad}`;

    // Registro en historial
    const defText = tipodef2 ? `${tipodef1} y ${tipodef2}` : tipodef1;
    añadirHistorial(`Ataque de ${tipoAtq} a ${defText}`);
}