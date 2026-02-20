#Contacto: arturogregori836@gmail.com
#Github: https://github.com/ArturoG07

# Calculadoras Multifunción

Este proyecto consiste en un conjunto de **cuatro calculadoras interactivas** con interfaz gráfica y funcionalidades avanzadas. Incluye un carrusel para cambiar entre calculadoras y la opción de alternar entre **modo claro y oscuro**.

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

## 🎨 Funcionalidades Generales

- **Carrusel de calculadoras**: navega fácilmente entre las cuatro calculadoras mediante flechas.  
- **Modo claro / oscuro**: cambia la apariencia de toda la interfaz con un solo botón.  
- **Pantallas dinámicas**: cada calculadora tiene su propia pantalla de resultados que se actualiza en tiempo real.  
- **Interfaz responsiva**: los botones y contenedores se ajustan automáticamente según la calculadora activa.  

## 📂 Estructura del Proyecto
/Calculadora

index.html # Estructura principal y carrusel
calculos.js # Lógica de cálculo para operaciones, divisas y fechas
acciones.js # Manejo de eventos y UI
carrusel.js # Control del carrusel de calculadoras
botones.css # Estilos de los botones
contenedores.css # Estilos de contenedores y pantallas
light.css # Tema claro
dark.css # Tema oscuro
carrusel.css #Control de contenedores del carrusel
README.md # Documentación del proyecto
