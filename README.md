# Mini Aplicación de Notas 

Aplicación interactiva para la gestión de notas construida con **React** y **Vite** como parte de la Actividad 4.

---

## Descripción del Proyecto
La aplicación permite crear, completar, editar y eliminar notas en tiempo real. Está construida utilizando únicamente el estado local de React (`useState`), iteración de componentes (`.map()`) y paso de propiedades (`props`) entre componentes funcionales.

---

## Cuestionario 

### ¿Qué diferencia hay entre props y state en React?
Que los props son parámetros de entrada que un componente padre transmite a sus componentes hijos,son de solo lectura dentro del componente que las recibe.Mientras que los State es la memoria interna de un componente que puede cambiar. Cuando cambia, React actualiza la pantalla automáticamente.

---

### ¿Por qué es importante usar una key al renderizar una lista de elementos?
La propiedad `key` le da un identificador único a cada elemento generado dinámicamente en una lista con `.map()`. Esto permite que el Virtual DOM de React identifique con precisión qué elementos han cambiado, se han agregado o se han eliminado, optimizando el rendimiento y evitando errores al actualizar la interfaz.

---

### Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es el Hook que usas para que un componente recuerde datos que van a cambiar. Te da dos cosas: la variable con el dato actual y la función para cambiarlo.
- **Ejemplo en la app:** Lo usé en TodoApp.jsx para guardar la lista de notas ([notas, setNotas]) y en TodoForm.jsx para guardar lo que el usuario escribe en el input ([textNote, setTextNote]).
---

### Enlace del Repositorio de GitHub
[https://github.com/AleidaPablo/t3_act4_react.git](https://github.com/TU_USUARIO/t3_act4_react)

---

### Enlace del Proyecto Desplegado en GitHub Pages
[https://aleidapablo.github.io/t3_act4_react/](https://TU_USUARIO.github.io/t3_act4_react/)
