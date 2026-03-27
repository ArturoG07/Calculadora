function cargarBasica() {
    document.getElementById("calc1").innerHTML = `
        <h2>Basica</h2>
        <div class="pantalla" id="pnt1"></div>
        <div class="boton botonCE">CE</div>
        <div class="boton botonOp">(</div>
        <div class="boton botonOp">)</div>
        <div class="boton botonC">C</div>
        <div class="boton botonNum">1</div>
        <div class="boton botonNum">2</div>
        <div class="boton botonNum">3</div>
        <div class="boton botonOp">/</div>
        <div class="boton botonNum">4</div>
        <div class="boton botonNum">5</div>
        <div class="boton botonNum">6</div>
        <div class="boton botonOp">*</div>
        <div class="boton botonNum">7</div>
        <div class="boton botonNum">8</div>
        <div class="boton botonNum">9</div>
        <div class="boton botonOp">.</div>
        <div class="boton botonOp">+</div>
        <div class="boton botonNum">0</div>
        <div class="boton botonOp">-</div>
        <div class="boton botonOp resultado">=</div>`;
}
function cargarProgramador() {
    document.getElementById("calc2").innerHTML = `
        <h2>Programador</h2>
        <div class="pantalla" id="pnt2"></div>
        <div class="boton botonCE">CE</div>
        <div class="boton botonOp">(</div>
        <div class="boton botonOp">)</div>
        <div class="boton botonOp">.</div>
        <div class="boton botonC">C</div>
        <div class="boton botonNum">1</div>
        <div class="boton botonNum">2</div>
        <div class="boton botonNum">3</div>
        <div class="boton botonNum">4</div>
        <div class="boton botonNum">5</div>
        <div class="boton botonNum">6</div>
        <div class="boton botonNum">7</div>
        <div class="boton botonNum">8</div>
        <div class="boton botonNum">9</div>
        <div class="boton botonNum">0</div>
        <div class="boton hex">A</div>
        <div class="boton hex">B</div>
        <div class="boton hex">C</div>
        <div class="boton hex">D</div>
        <div class="boton hex">E</div>
        <div class="boton hex">F</div>
        <div class="boton conversion">Hx</div>
        <div class="boton conversion">Dc</div>
        <div class="boton conversion">Oc</div>
        <div class="boton conversion">Bn</div>
        <div class="boton botonOp">/</div>
        <div class="boton botonOp">*</div>
        <div class="boton botonOp">+</div>
        <div class="boton botonOp">-</div>
        <div class="boton botonOp resultado">=</div>
`;
}
function cargarDivisas() {
    document.getElementById("calc3").innerHTML = `
            <h2>Divisas</h2>
            <div class="pantalla" id="pnt3"></div>
            <p>Original:</p>
            <input type="text" id="divisa">
            <p>Nueva:</p>
            <input type="text" id="divisaConvertir">
            
            <div class="boton botonCE">CE</div>
            <div class="boton botonC">C</div>
            <div class="boton botonOp resultado">=</div>
            <div class="boton botonOp">.</div>
            <div class="boton vacio"></div>
            <div class="boton botonNum">1</div>
            <div class="boton botonNum">2</div>
            <div class="boton botonNum">3</div>
            <div class="boton botonNum">4</div>
            <div class="boton botonNum">5</div>
            <div class="boton botonNum">6</div>
            <div class="boton botonNum">7</div>
            <div class="boton botonNum">8</div>
            <div class="boton botonNum">9</div>
            <div class="boton botonNum">0</div>
`;
    const divisas = [
        "USD — Dólar estadounidense",
        "AED — Dirham de Emiratos Árabes Unidos",
        "AFN — Afgani afgano",
        "ALL — Lek albanés",
        "AMD — Dram armenio",
        "ANG — Florín de las Antillas Neerlandesas",
        "AOA — Kwanza angoleño",
        "ARS — Peso argentino",
        "AUD — Dólar australiano",
        "AWG — Florín arubeño",
        "AZN — Manat azerbaiyano",
        "BAM — Marco convertible bosnio",
        "BBD — Dólar barbadense",
        "BDT — Taka bangladesí",
        "BGN — Lev búlgaro",
        "BHD — Dinar bareiní",
        "BIF — Franco burundés",
        "BMD — Dólar bermudeño",
        "BND — Dólar de Brunéi",
        "BOB — Boliviano",
        "BRL — Real brasileño",
        "BSD — Dólar bahameño",
        "BTN — Ngultrum butanés",
        "BWP — Pula botsuano",
        "BYN — Rublo bielorruso",
        "BZD — Dólar beliceño",
        "CAD — Dólar canadiense",
        "CDF — Franco congoleño",
        "CHF — Franco suizo",
        "CLF — Unidad de Fomento (Chile)",
        "CLP — Peso chileno",
        "CNH — Yuan chino (offshore)",
        "CNY — Yuan chino (Renminbi)",
        "COP — Peso colombiano",
        "CRC — Colón costarricense",
        "CUP — Peso cubano",
        "CVE — Escudo caboverdiano",
        "CZK — Corona checa",
        "DJF — Franco yibutiano",
        "DKK — Corona danesa",
        "DOP — Peso dominicano",
        "DZD — Dinar argelino",
        "EGP — Libra egipcia",
        "ERN — Nakfa eritreo",
        "ETB — Birr etíope",
        "EUR — Euro",
        "FJD — Dólar fiyiano",
        "FKP — Libra malvinense",
        "FOK — Corona feroesa",
        "GBP — Libra esterlina",
        "GEL — Lari georgiano",
        "GGP — Libra de Guernsey",
        "GHS — Cedi ghanés",
        "GIP — Libra de Gibraltar",
        "GMD — Dalasi gambiano",
        "GNF — Franco guineano",
        "GTQ — Quetzal guatemalteco",
        "GYD — Dólar guyanés",
        "HKD — Dólar de Hong Kong",
        "HNL — Lempira hondureña",
        "HRK — Kuna croata",
        "HTG — Gourde haitiano",
        "HUF — Forinto húngaro",
        "IDR — Rupia indonesia",
        "ILS — Nuevo séquel israelí",
        "IMP — Libra de la Isla de Man",
        "INR — Rupia india",
        "IQD — Dinar iraquí",
        "IRR — Rial iraní",
        "ISK — Corona islandesa",
        "JEP — Libra de Jersey",
        "JMD — Dólar jamaiquino",
        "JOD — Dinar jordano",
        "JPY — Yen japonés",
        "KES — Chelín keniano",
        "KGS — Som kirguís",
        "KHR — Riel camboyano",
        "KID — Dólar de Kiribati",
        "KMF — Franco comorense",
        "KRW — Won surcoreano",
        "KWD — Dinar kuwaití",
        "KYD — Dólar de las Islas Caimán",
        "KZT — Tenge kazajo",
        "LAK — Kip laosiano",
        "LBP — Libra libanesa",
        "LKR — Rupia de Sri Lanka",
        "LRD — Dólar liberiano",
        "LSL — Loti lesotense",
        "LYD — Dinar libio",
        "MAD — Dirham marroquí",
        "MDL — Leu moldavo",
        "MGA — Ariary malgache",
        "MKD — Denar macedonio",
        "MMK — Kyat birmano",
        "MNT — Tugrik mongol",
        "MOP — Pataca de Macao",
        "MRU — Uguiya mauritana",
        "MUR — Rupia mauriciana",
        "MVR — Rufiyaa maldiva",
        "MWK — Kwacha malauí",
        "MXN — Peso mexicano",
        "MYR — Ringgit malasio",
        "MZN — Metical mozambiqueño",
        "NAD — Dólar namibio",
        "NGN — Naira nigeriana",
        "NIO — Córdoba nicaragüense",
        "NOK — Corona noruega",
        "NPR — Rupia nepalí",
        "NZD — Dólar neozelandés",
        "OMR — Rial omaní",
        "PAB — Balboa panameño",
        "PEN — Sol peruano",
        "PGK — Kina papuana",
        "PHP — Peso filipino",
        "PKR — Rupia pakistaní",
        "PLN — Zloty polaco",
        "PYG — Guaraní paraguayo",
        "QAR — Rial catarí",
        "RON — Leu rumano",
        "RSD — Dinar serbio",
        "RUB — Rublo ruso",
        "RWF — Franco ruandés",
        "SAR — Riyal saudí",
        "SBD — Dólar de las Islas Salomón",
        "SCR — Rupia seychellense",
        "SDG — Libra sudanesa",
        "SEK — Corona sueca",
        "SGD — Dólar de Singapur",
        "SHP — Libra de Santa Elena",
        "SLE — Leone (nuevo) de Sierra Leona",
        "SLL — Leone (antiguo) de Sierra Leona",
        "SOS — Chelín somalí",
        "SRD — Dólar surinamés",
        "SSP — Libra sursudanesa",
        "STN — Dobra de Santo Tomé y Príncipe",
        "SYP — Libra siria",
        "SZL — Lilangeni suazi",
        "THB — Baht tailandés",
        "TJS — Somoni tayiko",
        "TMT — Manat turcomano",
        "TND — Dinar tunecino",
        "TOP — Paʻanga tongano",
        "TRY — Lira turca",
        "TTD — Dólar de Trinidad y Tobago",
        "TVD — Dólar de Tuvalu",
        "TWD — Dólar taiwanés",
        "TZS — Chelín tanzano",
        "UAH — Grivna ucraniana",
        "UGX — Chelín ugandés",
        "UYU — Peso uruguayo",
        "UZS — Som uzbeko",
        "VES — Bolívar venezolano",
        "VND — Dong vietnamita",
        "VUV — Vatu vanuatuense",
        "WST — Tala samoano",
        "XAF — Franco CFA de África Central",
        "XCD — Dólar del Caribe Oriental",
        "XCG — Florín del Caribe Neerlandés",
        "XDR — Derechos Especiales de Giro (FMI)",
        "XOF — Franco CFA de África Occidental",
        "XPF — Franco CFP",
        "YER — Rial yemení",
        "ZAR — Rand sudafricano",
        "ZMW — Kwacha zambiano",
        "ZWG — Dólar zimbabuense (Gold)",
        "ZWL — Dólar zimbabuense"
    ];

    document.getElementById("divisas").innerHTML = divisas.map(d => `<p>${d}</p>`).join('');
}
function cargarFechas() {
    const contenido = `
<h2>Calculo de fechas</h2>
<div class="pantalla" id="pnt4"></div>
<div class="contenedor">
    <select id="diaInicio"></select>
    <select id="mesInicio"></select>
    <select id="anioInicio"></select>
</div>
<div class="contenedor">
    <select id="diaFinal"></select>
    <select id="mesFinal"></select>
    <select id="anioFinal"></select>
</div>
<select id="tipoCalculo">
<option value="1">Diferencia de dias</option>
<option value="2">Diferencia de meses</option>
<option value="3">Diferencia de años</option>
<option value="4">Edad</option>
</select>
<div class="enviar resultado">ENVIAR</div>
`;
    document.getElementById("calc4").innerHTML = contenido;

    // Llenar días (1-31)
    for (let i = 1; i <= 31; i++) {
        const option = `<option value="${i}">${i}</option>`;
        document.getElementById("diaInicio").innerHTML += option;
        document.getElementById("diaFinal").innerHTML += option;
    }

    // Llenar meses con valor numérico y texto
    const meses = [
        { value: 1, nombre: "Enero" },
        { value: 2, nombre: "Febrero" },
        { value: 3, nombre: "Marzo" },
        { value: 4, nombre: "Abril" },
        { value: 5, nombre: "Mayo" },
        { value: 6, nombre: "Junio" },
        { value: 7, nombre: "Julio" },
        { value: 8, nombre: "Agosto" },
        { value: 9, nombre: "Septiembre" },
        { value: 10, nombre: "Octubre" },
        { value: 11, nombre: "Noviembre" },
        { value: 12, nombre: "Diciembre" },
    ];
    meses.forEach(mes => {
        const option = `<option value="${mes.value}">${mes.nombre}</option>`;
        document.getElementById("mesInicio").innerHTML += option;
        document.getElementById("mesFinal").innerHTML += option;
    });

    // Llenar años desde 1900 hasta el actual
    const añoActual = new Date().getFullYear();
    for (let i = 1900; i <= añoActual; i++) {
        const option = `<option value="${i}">${i}</option>`;
        document.getElementById("anioInicio").innerHTML += option;
        document.getElementById("anioFinal").innerHTML += option;
    }
}
function cargarInteres() {
    document.getElementById("calc5").innerHTML = `
<h2>Interes</h2>
<div class="pantalla" id="pnt5"></div>
<input type="number" required placeholder="Capital" id="capital">
<input type="number" required placeholder="Interés" id="interes">
<select id="tipoInteres">
    <option>Tipo de Interés...</option>
    <option>Simple</option>
    <option>Compuesto</option>
</select>
<input type="number" required placeholder="Años" id="aniosInteres">
<div class="enviar resultado">ENVIAR</div>
`;
}
function cargarIMC() {
    document.getElementById("calc6").innerHTML = `
<h2>IMC</h2>
<div class="pantalla" id="pnt6"></div>
<input type="number" required placeholder="Peso en Kg" id="peso">
<input type="number" required placeholder="Altura en metros" id="altura">
<div class="enviar resultado">ENVIAR</div>
`;
}
function cargarMacros() {
    document.getElementById("calc7").innerHTML = `
<h2>Macros</h2>
<div class="pantalla" id="pnt7"></div>
<input type="number" required placeholder="Peso en Kg" id="peso2">
<input type="number" required placeholder="Altura en metros" id="altura2">
<input type="number" required placeholder="Edad" id="edad">
<p>Sexo:</p>
<select id="sexo">
    <option value="1">Hombre</option>
    <option value="2">Mujer</option>
</select>
<p>Nivel de actividad:</p>
<select id="actividad">
    <option value="1.2">Sedentario</option>
    <option value="1.375">Ligero</option>
    <option value="1.55">Moderado</option>
    <option value="1.725">Alto</option>
    <option value="1.9">Muy Alto</option>
</select>
<p>Objetivo:</p>
<select id="obj">
    <option value="0.85">Perdida de peso</option>
    <option value="1">Mantenimiento</option>
    <option value="1.1">Ganancia muscular</option>
</select>
<p>Preferencia:</p>
<select id="pref">
    <option value="1">Balanceado (40/30/30)</option>
    <option value="2">Alto en proteina</option>
    <option value="3">Bajo en carbohidratos</option>
    <option value="4">Alto en carbohidratos</option>
</select>
<div class="enviar resultado">ENVIAR</div>
`;
}
function cargarConversor() {
    document.getElementById("calc8").innerHTML = `
<h2>Conversor de unidades</h2>
<div class="pantalla" id="pnt8"></div>
<p>Categoria</p>
<select id="categoria">
    <option value="1">Longitud</option>
    <option value="2">Peso</option>
    <option value="3">Temperatura</option>
    <option value="4">Velocidad</option>
    <option value="5">Almacenamiento</option>
    <option value="6">Energia</option>
    <option value="7">Area</option>
    <option value="8">Tiempo</option>
    <option value="9">Potencia</option>
    <option value="10">Presion</option>
</select>
<p>Valor:</p>
<input type="text" required id="valor">
<p>Unidad de origen</p>
<select id="origen"></select>
<p>Unidad de destino</p>
<select id="destino"></select>
<div class="enviar resultado">ENVIAR</div>
`;
}
function cargarDeportiva() {
    document.getElementById("calc9").innerHTML = `
<h2>Deportiva</h2>
<div class="pantalla" id="pnt9"></div>
<label for="kilometros">Kilometros:</label>
<input type="number" required id="kilometros">
<p>Horas:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Minutos:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Segundos:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<input type="number" id="horas" required>
<input type="number" id="minutos" required min="0" max="59">
<input type="number" id="segundos" required min="0" max="59">
<div class="enviar resultado">ENVIAR</div>
`;
}
function cargarPokemon() {
    document.getElementById("calc10").innerHTML = `
<h2>Pokemon</h2>
<div class="pantalla" id="pnt10"></div>
<p>ATQ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
DEF1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
DEF2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<div class="pkm" id="ATQ"></div>
<div class="pkm" id="DEF1"></div>
<div class="pkm" id="DEF2"></div>
<div class="boton botonPokemon" id="normal"></div>
<div class="boton botonPokemon" id="lucha"></div>
<div class="boton botonPokemon" id="volador"></div>
<div class="boton botonPokemon" id="veneno"></div>
<div class="boton botonPokemon" id="tierra"></div>
<div class="boton botonPokemon" id="roca"></div>
<div class="boton botonPokemon" id="bicho"></div>
<div class="boton botonPokemon" id="fantasma"></div>
<div class="boton botonPokemon" id="acero"></div>
<div class="boton botonPokemon" id="fuego"></div>
<div class="boton botonPokemon" id="agua"></div>
<div class="boton botonPokemon" id="planta"></div>
<div class="boton botonPokemon" id="electrico"></div>
<div class="boton botonPokemon" id="psiquico"></div>
<div class="boton botonPokemon" id="hielo"></div>
<div class="boton botonPokemon" id="dragon"></div>
<div class="boton botonPokemon" id="siniestro"></div>
<div class="boton botonPokemon" id="hada"></div>
<div class="enviar resultado">ENVIAR</div>
`;
}