## Contacto: arturogregori836@gmail.com
## Github: https://github.com/ArturoG07

# Calculadoras Multifunción

Este proyecto consiste en un conjunto de **10 calculadoras interactivas** con interfaz gráfica y funcionalidades avanzadas. Incluye un carrusel para cambiar entre calculadoras y la opción de alternar entre **distintos estilos**.

## 🖥️ Calculadoras Incluidas

1. **Calculadora Básica**  
   Realiza operaciones matemáticas comunes: suma, resta, multiplicación, división, paréntesis y decimales.

2. **Calculadora de Programador**
   - Soporta números en **decimal, hexadecimal, octal y binario**.
   - Conversión automática entre bases.
   - Botones para números hexadecimales (`A-F`) y operadores comunes.
   - Interfaz con indicación de la base actual.

3. **Calculadora de Divisas**
   - Convierte entre múltiples monedas 
   - Funciona mediante selección de moneda de origen y destino.
   - Conversión basada en tasas en tiempo real usando una api

4. **Calculadora de Fechas**
   - Permite calcular la diferencia entre dos fechas en **días, meses o años**.
   - Permite calcular la **edad** de una persona a partir de su fecha de nacimiento.
   - Incluye selectores para día, mes y año de inicio y fin.
5. **Calculadora de  Interes**
   - Permite calcular el total pagado, el total de intereses y la cuota mensual de un interes
   - Incluye interes simple y compuesto
6. **Calculadora de IMC**
   - Permite calcular el indice de masa corporal a partir de un peso en kilos y una altura en metros
7. **Calculadora de Macros**
   - Permite calcular el total de calorias, y macronutrientes (proteinas, carbohidratos y grasas) de una persona
dado su peso, altura, edad, sexo, nivel de actividad, objetivo, y preferencia de distribucion
8. **Conversor de unidades**
   - Convierte una diversa cantidad de unidades
9. **Deportiva**
  - Permite calcular el rendimiento deportivo en m/s y km/h dada una cantida de kilometros, horas, minutos, y segundos
0**Pokemon**
   - Permite calcular la efectividad de un ataque de un tipo a otro
## 🎨 Funcionalidades Generales

- **Carrusel de calculadoras**: navega fácilmente entre las calculadoras mediante flechas o mediante un click a la calculadora deseada
- **Teclado funcional**: en una parte de las calculadoras se puede operar directamente con el teclado
- **Estilos**: cambia la apariencia de toda la interfaz con un solo botón.
- **Pantallas dinámicas**: cada calculadora tiene su propia pantalla de resultados que se actualiza en tiempo real.
- **Interfaz responsiva**: los botones y contenedores se ajustan automáticamente según la calculadora activa.
- **Historial**: guarda cada operacion en un historial de operaciones
- **Informacion**: las calculadoras disponen de un boton de informacion en la esquina superior derecha  que muestra una breve descripcion
- **Menu de calculadoras con vinculos**
- **Boton para limpiar las pantallas**
- **localstorage**: para guardar la preferencia de estilo y el historial

## 📂 Estructura del Proyecto

### 📁 Raíz
- **index.html** → Estructura principal de la aplicación
- **README.md** → Documentación del proyecto
- **.gitignore** → Archivos ignorados por Git

---

### 📁 /css
Contiene todos los estilos organizados por responsabilidad.

#### 📁 /componentes
Estilos reutilizables de elementos UI:
- **botones.css**
- **forms.css**

#### 📁 /funcionalidades
Estilos de funcionalidades concretas:
- **carrusel.css**
- **historial.css**
- **infoCalculadoras.css**

#### 📁 /layout
Estructura y distribución:
- **contenedoresEspecificos.css**
- **contenedoresGenerales.css**

#### 📁 /modos
Temas visuales de la aplicación:
- **aurora.css**
- **blanco.css**
- **blue.css**
- **cyber.css**
- **green.css**
- **negro.css**
- **neon.css**
- **pastel.css**

---

### 📁 /js

#### 📁 /calculos
Scripts de cada calculadora:
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

---

#### 📁 /Funcionalidades
Lógica general de la aplicación:
- **carrusel.js** → Control del carrusel
- **estilos.js** → Cambio de temas/modos
- **funcionalidadTeclado.js** → Soporte de entrada por teclado
- **generales.js** → Funciones globales reutilizables
- **historial.js** → Gestión del historial
- **resoluciones.js** → Adaptación a diferentes tamaños de pantalla

---

#### 📁 /loads
Inicialización de la aplicación:
- **loadsCalculadoras.js** → Carga de calculadoras
- **loadsListeners.js** → Registro de eventos
- **start.js** → Punto de entrada de la app

---

### 📁 /img
Imágenes utilizadas en la aplicación (principalmente iconos de tipos Pokémon):
- **Pokemon_Type_Icon_Bug.png**
- **Pokemon_Type_Icon_Dark.png**
- **Pokemon_Type_Icon_Dragon.png**
- **Pokemon_Type_Icon_Electric.png**
- **Pokemon_Type_Icon_Fairy.png**
- **Pokemon_Type_Icon_Fighting.png**
- **Pokemon_Type_Icon_Fire.png**
- **Pokemon_Type_Icon_Flying.png**
- **Pokemon_Type_Icon_Ghost.png**
- **Pokemon_Type_Icon_Grass.png**
- **Pokemon_Type_Icon_Ground.png**
- **Pokemon_Type_Icon_Ice.png**
- **Pokemon_Type_Icon_Normal.png**
- **Pokemon_Type_Icon_Poison.png**
- **Pokemon_Type_Icon_Psychic.png**
- **Pokemon_Type_Icon_Rock.png**
- **Pokemon_Type_Icon_Steel.png**
- **Pokemon_Type_Icon_Water.png**
