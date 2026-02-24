## Contacto: arturogregori836@gmail.com
## Github: https://github.com/ArturoG07

# Calculadoras Multifunción

Este proyecto consiste en un conjunto de **cinco calculadoras interactivas** con interfaz gráfica y funcionalidades avanzadas. Incluye un carrusel para cambiar entre calculadoras y la opción de alternar entre **distintos estilos**.

## 🖥️ Calculadoras Incluidas

1. **Calculadora Básica**  
   Realiza operaciones matemáticas comunes: suma, resta, multiplicación, división, paréntesis y decimales.

2. **Calculadora de Programador**
   - Soporta números en **decimal, hexadecimal, octal y binario**.
   - Conversión automática entre bases.
   - Botones para números hexadecimales (`A-F`) y operadores comunes.
   - Interfaz con indicación de la base actual.

3. **Calculadora de Divisas**
   - Convierte entre múltiples monedas: EUR, USD, JPY, GBP, CNY, CHF, CAD, AUD.
   - Funciona mediante selección de moneda de origen y destino.
   - Conversión basada en tasas fijas definidas en el código.

4. **Calculadora de Fechas**
   - Permite calcular la diferencia entre dos fechas en **días, meses o años**.
   - Permite calcular la **edad** de una persona a partir de su fecha de nacimiento.
   - Incluye selectores para día, mes y año de inicio y fin.
5. **Calculadora de  Interes**
   - Permite calcular el total pagado, el total de intereses y la cuota mensual de un interes
   - Incluye interes simple y compuesto
## 🎨 Funcionalidades Generales

- **Carrusel de calculadoras**: navega fácilmente entre las cinco calculadoras mediante flechas.
- **Estilos**: cambia la apariencia de toda la interfaz con un solo botón.
- **Pantallas dinámicas**: cada calculadora tiene su propia pantalla de resultados que se actualiza en tiempo real.
- **Interfaz responsiva**: los botones y contenedores se ajustan automáticamente según la calculadora activa.
- **Historial**: guarda cada operacion en un historial de operaciones

## 📂 Estructura del Proyecto
### /Calculadora
- **index.html** Estructura principal y carrusel
- **README.md** Documentación del proyecto
- #### /Acciones
   - **acciones.js**: incluye funciones generales de la calculadora
- #### /calculos
   - Incluye un archivo de scripts para cada calculadora, con las funciones necesarias para sus calculos
   - **programador.js**
   - **divisas.js**
   - **fechas.js**
   - **interes.js**
- #### /carrusel
   - Incluye los estilos y funciones para el funcionamiento del carrusel
   - **carrusel.js**
   - **carrusel.css**
- #### /historial
   - Incluye los estilos y funciones para el funcionamiento del historial
   - **historial.css**
   - **historial.js**
- #### /contenedores
   - **calcpnt.css**: hoja de estilos para asignar estilo a una calculadora, pantalla o elemento especifico de una calculadora
   - **contenedores.css**: hoja de estilos para asignar el tamaño de ciertos contenedores genericos
- #### /modos
   - Incluye las hojas de estilo de todos los modos que tiene la calculadora
   - **plantilla.css**: contiene una plantilla con todos los elementos a los que hay que dar estilo, y una explicacion de ellos, como soporte para crear nuevos estilos de manera sencilla
   - **blanco.css**
   - **blue.css**
   - **cyber.css**
   - **green.css**
   - **negro.css**
   - **pastel.css**
