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


/* Funcion de redireccion ah la vista de menú */
function menu() {
  window.location.href = "/src/views/menu.html";
}
