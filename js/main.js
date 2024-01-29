
import { comprarProducto } from "./carrito.js"

const divProductos = document.getElementById("productos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))


document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";
  
    productos.forEach((producto) => {

    const { nombre, categoria, precio, id } = producto
     
      let card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-title">${nombre}</p>
      <p class="card-text">Categoria: ${categoria}</p>
  
      <p class="card-text">Precio: <b>$${precio}</b></p>
      <button id="btn${id}" class="btn btn-primary">Comprar</button>
  
      </div>
      </div>`;
  
      divProductos.appendChild(card);

      const btnComprar = document.getElementById(`btn${id}`)
      btnComprar.addEventListener("click", () => comprarProducto(id))
  
  
    });
  };

  let boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'tu compra se ha realizado con éxito ',
      showConfirmButton: false,
      timer: 1500
    });
 })

 
