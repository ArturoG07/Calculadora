# Manual de programador
## Estructura
- **index.html**: archivo principal del programa que incluye la estructura basica
### /docs
- **manual.md**: manual de programador
### /css
#### /componentes
- **botones.css**: Dimensiones de todos los contenedores usados para botones
- **forms.css**: Dimensiones de todos los input, select y textarea
#### /funcionalidades
- **carrusel.css**: Dimensiones de los elementos usados para el carrusel de calculadoras
- **historial.css**: Dimensiones de los elementos usados para el historial
- **infoCalculadoras.css**: dimensiones de los elementos usados para el panel de informacion
#### /layout
- **contenedoresEspecificos.css**: dimensiones de contenedores especificos(usados solo una vez y en una sola calculadora)
- **contenedoresGenerales.css**: dimensiones de contenedores generales(usados en varias calculadoras o contenedores fijos en pantalla)
#### /modos
Temas visuales de la aplicación:
- **aurora.css**
- **blanco.css**
- **blue.css**
- **cyber.css**
- **green.css**
- **negro.css**
- **neon.css**
- **pastel.css**
- **plantilla.css**: plantilla para crear nuevos estilos
### /img
Imagenes usadas en el proyecto
### /js
#### /calculos  
Contiene los archivos de calculo de cada calculadora
- **Basica.js**
- **conversiones.js**
- **deportiva.js**
- **divisas.js**
- **fechas.js**
- **IMC.js**
- **interes.js**
- **macros.js**
- **pokemon.js**
- **programador.js**
#### /funcionalidades
Lógica general de la aplicación:
- **carrusel.js** → Control del carrusel
- **estilos.js** → Cambio de temas/modos
- **funcionalidadTeclado.js** → Soporte de entrada por teclado
- **generales.js** → Funciones globales reutilizables
- **historial.js** → Gestión del historial
- **resoluciones.js** → función que relaciona las calculadoras y sus funciones al resolver
#### /loads
- **loadsCalculadoras.js**: carga los contenidos de cada calculadora
- **loadsListeners.js**: carga todos los eventListeners del programa
- **start.js**: punto de entrada del programa que empieza a cargar todo

## Añadir Calculadoras
- Crear el archivo respetivo en la carpeta js/calculos
- Incluir dicho script en el array scripts de js/loads/start.js
- Añadir el metodo cargarCalculadora de la nueva calculadora en el script js/loads/loadsCalculadoras.js y llamarlo en el metodo cargarCalculadoras de js/loads/start.js
- El contenido de la calculadora se incluir en dicho metodo y no en el index, ahi unicamente se añadira una linea con un div de clase "calculadora" y un id "calcX" siendo X el proximo numero libre
  - En la importacion, la estructura basica debe tener
    - Titulo h2 con el titulo de la calculadora
    - div de clase "pantalla" e id "pntX" siendo X el mismo número que en la propia calculadora
    - Botones, selects, inputs, etc... para la calculadora
    - Boton con clase "resultado" o "enviar" en el boton que resolvera la calculadora
- Añadir el id de la calculadora junto con su respectivo método en el array situado en js/Funcionalidades/resoluciones
## Añadir Estilos
- Rellenar todos los campos de la plantilla situada en css/modos/plantilla.css sustituyendo [nombre-tema] con el nombre deseado, creando una hoja de estilos con ese mismo nombre
- Añadir el estilo al array de estilos situado en js/loads/start.js
