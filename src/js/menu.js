// Datos simulados de productos
const productos = {
  hamburguesas: [
    { nombre: "Hamburguesa Sencilla", precio: 12000, img: "/src/img/ChatGPT Image 25 sept 2025, 21_37_07.png" },
    { nombre: "Hamburguesa Doble", precio: 16000, img: "/src/img/ChatGPT Image 25 sept 2025, 21_37_07.png" },
    { nombre: "Hamburguesa Mixta", precio: 18000, img: "/src/img/ChatGPT Image 25 sept 2025, 21_37_07.png" },
    { nombre: "Hamburguesa Hawaiana", precio: 15000, img: "/src/img/ChatGPT Image 25 sept 2025, 21_37_07.png" },
    { nombre: "Hamburguesa Ranchera", precio: 20000, img: "/src/img/ChatGPT Image 25 sept 2025, 21_37_07.png" },
    { nombre: "Hamburguesa Especial", precio: 22000, img: "/src/img/ChatGPT Image 25 sept 2025, 21_37_07.png" }
  ],
  bebidas: [
    { nombre: "Gaseosa 350ml", precio: 4000, img: "/src/img/bebidas.png" },
    { nombre: "Jugo Natural", precio: 6000, img: "/src/img/bebidas.png" },
    { nombre: "Cerveza", precio: 8000, img: "/src/img/bebidas.png"},
    { nombre: "Gaseosa 1.5L", precio: 4000, img: "/src/img/bebidas.png" },
    { nombre: "Extra Jugo Natural", precio: 6000, img: "/src/img/bebidas.png" },
    { nombre: "Jugos Git", precio: 8000, img: "/src/img/bebidas.png" }
  ],
  combos: [
    { nombre: "Combo 1", precio: 18000, img: "/src/img/combos.png" },
    { nombre: "Combo 2", precio: 22000, img: "/src/img/combos.png"  },
    { nombre: "Combo 3", precio: 25000, img: "/src/img/combos.png"  },
    { nombre: "Combo 4", precio: 18000, img: "/src/img/combos.png"  },
    { nombre: "Combo 5", precio: 22000, img: "/src/img/combos.png"  },
    { nombre: "Combo 6", precio: 25000, img: "/src/img/combos.png"  }
  ],
  adiciones: [
    { nombre: "Papas Fritas", precio: 6000, img: "/src/img/adiciones.png"  },
    { nombre: "Queso Extra", precio: 3000, img:"/src/img/adiciones.png"  },
    { nombre: "Tocineta", precio: 4000, img: "/src/img/adiciones.png" },
    { nombre: "Huevo de codornis", precio: 6000, img: "/src/img/adiciones.png"  },
    { nombre: "Cebolla", precio: 3000, img: "/src/img/adiciones.png" },
    { nombre: "Carne", precio: 4000, img: "/src/img/adiciones.png" }
  ]
};

// Renderizar productos en el contenedor
function renderizarProductos(categoria) {
  const contenedor = document.getElementById("menu-cards");
  contenedor.innerHTML = ""; // limpiar

  productos[categoria].forEach(prod => {
    contenedor.innerHTML += `
      <div class="card">
        <span>${prod.nombre}</span>
        <img src="${prod.img}" alt="${prod.nombre}">
        <button>$${prod.precio.toLocaleString()}</button>
      </div>
    `;
  });
}

// Manejar navegación
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Quitar clase activa
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("activo"));
    // Poner activa la seleccionada
    link.classList.add("activo");

    // Cambiar productos
    const categoria = link.getAttribute("data-categoria");
    renderizarProductos(categoria);
  });
});

// Cargar por defecto hamburguesas
renderizarProductos("hamburguesas");
