export const productos = [
  {
    id: 1,
    nombre: "Remera",
    precio: 8500,
    categoria: "indumentaria"
  },

  {
    id: 2,
    nombre: "Pantalon",
    precio: 10200,
    categoria: "indumentaria"
  },

  {
    id: 3,
    nombre: "Campera",
    precio: 15000,
    categoria: "indumentaria"
  },

];
JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
