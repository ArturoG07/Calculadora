const atq = document.getElementById("ATQ");
const def1 = document.getElementById("DEF1");
const def2 = document.getElementById("DEF2");
const botones = document.querySelectorAll('.botonPokemon');
const contenedores = document.querySelectorAll('.pkm');
const tipos = ["normal","lucha","volador","veneno","tierra","roca","bicho","fantasma","acero","fuego","agua","planta","electrico","psiquico","hielo","dragon","siniestro","hada"];
// Tabla de multiplicadores por tipo (orden según el array tipos)
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
atq.addEventListener("click", function() {
    actual = 1;
})
def1.addEventListener("click", function() {
    actual = 2;
})
def2.addEventListener("click", function() {
    actual = 3;
})

contenedores.forEach(cont => {
    cont.addEventListener('click', () => {
        contenedores.forEach(c => c.classList.remove('contenedorPokemonActivo'));

        cont.classList.add('contenedorPokemonActivo');
    });
});
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        let contenedor = document.querySelector('.contenedorPokemonActivo');
        switch (boton.id) {
            case 'normal':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Normal.png')";
                break;
            case 'bicho':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Bug.png')";
                break;
            case 'siniestro':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Dark.png')";
                break;
            case 'dragon':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Dragon.png')";
                break;
            case 'electrico':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Electric.png')";
                break;
            case 'hada':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Fairy.png')";
                break;
            case 'lucha':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Fighting.png')";
                break;
            case 'fuego':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Fire.png')";
                break;
            case 'volador':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Flying.png')";
                break;
            case 'fantasma':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Ghost.png')";
                break;
            case 'planta':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Grass.png')";
                break;
            case 'tierra':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Ground.png')";
                break;
            case 'hielo':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Ice.png')";
                break;
            case 'veneno':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Poison.png')";
                break;
            case 'psiquico':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Psychic.png')";
                break;
            case 'roca':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Rock.png')";
                break;
            case 'acero':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Steel.png')";
                break;
            case 'agua':
                contenedor.style.backgroundImage = "url('img/Pokemon_Type_Icon_Water.png')";
                break;
        }
    });
});
function obtenerTipoPorImagen(contenedor) {
    const url = contenedor.style.backgroundImage; // ej: url("img/Pokemon_Type_Icon_Fire.png")
    if (!url) return null;
    const nombreArchivo = url.match(/Pokemon_Type_Icon_\w+\.png/);
    if (!nombreArchivo) return null;
    return imagenATipo[nombreArchivo[0]];
}
function calcularAtaquePokemon() {
    let tipoAtq = obtenerTipoPorImagen(atq);
    let tipodef1 = obtenerTipoPorImagen(def1);
    let tipodef2 = obtenerTipoPorImagen(def2);

    if (!tipoAtq) {
        console.log("No se ha seleccionado tipo de ataque.");
        return 1; // por defecto neutral
    }

    let multiplicador = 1;

    if (tipodef1) {
        const indiceDef1 = tipos.indexOf(tipodef1);
        if (indiceDef1 >= 0) {
            multiplicador *= efectividad[tipoAtq][indiceDef1];
        }
    }

    if (tipodef2) {
        const indiceDef2 = tipos.indexOf(tipodef2);
        if (indiceDef2 >= 0) {
            multiplicador *= efectividad[tipoAtq][indiceDef2];
        }
    }
    let textoEfectividad;

    if (multiplicador === 0) {
        textoEfectividad = "No es eficaz";
    } else if (multiplicador < 1) {
        textoEfectividad = "Poco eficaz";
    } else if (multiplicador === 1) {
        textoEfectividad = "Normal";
    } else if (multiplicador > 1) {
        textoEfectividad = "Muy eficaz";
    }
    obtenerPantallaActiva().textContent = `Multiplicador: ${multiplicador}
    \nEfectividad: ${textoEfectividad}`;
    if (tipodef2) {
        añadirHistorial(`Ataque de ${tipoAtq} a ${tipodef1} y ${tipodef2}`);
    }
    else {
        añadirHistorial(`Ataque de ${tipoAtq} a ${tipodef1}`);
    }
}