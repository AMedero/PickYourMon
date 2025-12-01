# 🧢 PickYourMon - Tienda de Peluches Pokémon

¡Hola! Bienvenido a **PickYourMon**. Este es un proyecto de desarrollo web Front-End que simula un e-commerce dedicado a la venta de peluches de Pokémon (específicamente Eevee y sus evoluciones)

El objetivo de este proyecto fue poner en práctica lógica de programación con **JavaScript puro**, manipulación del DOM y persistencia de datos, sin depender de frameworks.

🔗 **[Pruebe la Demo usted mismo] https://amedero.github.io/PickYourMon/*


## 🚀 Funcionalidades Clave

Lo que podés hacer en la aplicación:

* **Catálogo Dinámico:** Los productos no están "harcodeados" en el HTML, sino que se cargan dinámicamente desde un archivo `JSON` local simulando una API
* **Carrito de Compras Full:**
    * Agregar productos (detecta si ya existe y suma cantidad)
    * Sumar/Restar unidades desde el modal
    * Eliminar productos individuales o vaciar todo el carrito
    * Cálculo automático del precio total
* **Persistencia de Datos:** Uso de `localStorage` para que, si recargás la página, no pierdas lo que tenías en el carrito
* **Notificaciones (Toasts):** Avisos visuales al agregar productos o finalizar la compra para mejorar la experiencia de usuario (UX)
* **Diseño Responsive:** Se adapta la vista a celulares, tablets y escritorio usando CSS Flexbox y Media Queries
* **Formulario de Contacto:** Funcional, integrado con **Formspree** para recibir los mensajes en mi mail real


## 🛠️ Tecnologías y Herramientas

Este proyecto está construido con las bases fundamentales de la web:

* **HTML5:** Estructura semántica
* **CSS3:**
    * Uso de Variables CSS (Custom Properties) para los colores
    * **Flexbox** para el maquetado
    * Animaciones clave (`keyframes`) para las notificaciones
    * Fuentes de Google Fonts (*Knewave* y *Coiny* para darle ese toque "cartoon")
* **JavaScript (ES6+):**
    * `async/await` y `fetch API` para consumir el JSON
    * Manipulación del DOM
    * Lógica de Arrays (`map`, `filter`, `find`, `reduce`)
* **Control de Versiones:** Git y GitHub


## 🧠 Detalle Técnico (Cómo funciona)

Para los curiosos del código, acá explico un poco cómo resolví la lógica:

1.  **Carga de Datos:** Al iniciar, el script hace un `fetch` al archivo `./js/productos.json`. Usé una función asíncrona para esperar la respuesta antes de "pintar" las tarjetas en el HTML
2.  **Manejo del Estado:** Tengo dos arrays principales: `productosDisponibles` (el catálogo) y `carrito` (lo que elige el usuario)
3.  **El Carrito:** Cada vez que se modifica el carrito (agregar/sacar), se ejecuta una función que:
    * Actualiza el array `carrito`
    * Recalcula el HTML del modal
    * Actualiza el contador rojo del header
    * Guarda el estado actual en el **LocalStorage**
4.  **Sincronización:** Agregué un evento `window.addEventListener('storage', ...)` por si el usuario tiene la tienda abierta en dos pestañas diferentes; si actualiza el carrito en una, se refleja en la otra
