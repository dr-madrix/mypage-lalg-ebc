/* =========================================================
   Sitio de Adrián Lara · Fase 4: JavaScript en el sitio web
   1. Saludo en la consola
   2. Botón "Me sirvió" con evento clic y contador en un h2
   3. Inicialización de las animaciones AOS
   ========================================================= */

// ---------- 1. SALUDO EN LA CONSOLA ----------
console.log(
  '%c¡Hola! 👋 Soy Adrián, Product Manager.',
  'font-size: 18px; font-weight: bold; color: #2f5bea;'
);
console.log(
  '%cGracias por visitar mi sitio. Aquí hablo de cómo decidir con datos y experimentos, no con plantillas.',
  'font-size: 13px; color: #4a4f5c;'
);

// ---------- 2. BOTÓN CON EVENTO CLIC Y CONTADOR ----------
const boton = document.getElementById('btn-like');
const contador = document.getElementById('contador');
let total = 0;

boton.addEventListener('click', function () {
  total = total + 1;
  contador.textContent = total;

  // Pequeña animación del número en cada clic
  contador.classList.remove('likes__count--pop');
  void contador.offsetWidth; // reinicia la animación
  contador.classList.add('likes__count--pop');

  console.log('Clic en "Me sirvió". Total: ' + total);
});

// ---------- 3. AOS · Bloque 3: inicialización ----------
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,   // duración de la animación en milisegundos
    once: true       // cada elemento se anima solo la primera vez
  });
} else {
  // Si la librería no carga, se muestran los elementos sin animación
  document.querySelectorAll('[data-aos]').forEach(function (el) {
    el.removeAttribute('data-aos');
  });
}
