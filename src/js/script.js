/* carrusel */
const carrusel = document.querySelector(".carrusel-contenedor");
const items = document.querySelectorAll(".carrusel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicadores = document.querySelector(".indicadores");

let index = 0;

// Crear indicadores
items.forEach((_, i) => {
  let dot = document.createElement("div");
  if (i === 0) dot.classList.add("activo");
  dot.addEventListener("click", () => moverCarrusel(i));
  indicadores.appendChild(dot);
});

function actualizarIndicadores() {
  document.querySelectorAll(".indicadores div").forEach((dot, i) => {
    dot.classList.toggle("activo", i === index);
  });
}

function moverCarrusel(i) {
  index = i;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
  actualizarIndicadores();
}

prev.addEventListener("click", () => {
  index = index > 0 ? index - 1 : items.length - 1;
  moverCarrusel(index);
});

next.addEventListener("click", () => {
  index = index < items.length - 1 ? index + 1 : 0;
  moverCarrusel(index);
});

/* Funcion de redireccion a la vista de menú */
function menu() {
  window.location.href = "/src/views/menu.html";
}
/* Funcion de redirecion a la vista de login o registro*/
function login() {
  window.location.href = "/src/views/login.html";
}
/* Funcion de redireccion  */
function sugerencias() {
  window.location.href = "/src/views/sugerencia.html";
}
/* funcion de redireccion a la vista de las sedes de la empresa */
function sedes() {
  window.location.href = "/src/views/sedes.html";
}