# Calculadoras Multifunción
Este proyecto consiste en un conjunto de **10 calculadoras interactivas** con interfaz gráfica y funcionalidades avanzadas. Incluye un carrusel para cambiar entre calculadoras y la opción de alternar entre **distintos estilos**.
## Autor
- Arturo Gregori 
- Email: arturogregori836@gmail.com
- GitHub: ArturoG07

## Licencia
MIT License – puede usarse, modificarse y distribuirse libremente, con atribución.

## Contacto
Para dudas, sugerencias o reportes de errores: arturogregori836@gmail.com
## Manual de Programador
Este proyecto incluye un **Manual de Programador** destinado a desarrolladores que quieran entender, mantener o ampliar la aplicación.  
El manual describe:

- Estructura de carpetas y archivos (JS, CSS, imágenes).
- Cómo añadir nuevas calculadoras.
- Cómo añadir nuevos estilos/temas.
- Flujo de la aplicación y dependencias entre módulos.
- Convenciones de nombres y buenas prácticas.

Se encuentra en:  
`docs/manual.md`.  
Se recomienda leerlo antes de realizar cambios importantes en el código.
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

## 📝 Notas del Proyecto

- Proyecto desarrollado en JavaScript vanilla sin frameworks.
- Arquitectura modular separando cálculos, funcionalidades y carga inicial.
- Sistema de temas dinámico basado en CSS.
- Escalabilidad preparada para actualizaciones futuras con facil incorporacion de nuevas calculadoras y/o estilos
- Ningun elemento introducido por el usuario se interpretara como codigo HTML en ningun momento para evitar cross site scripting