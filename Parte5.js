const producto = {

nombre:"Notebook",

precio:1000

}
function ej14() {
  const { nombre, precio } = producto;

  document.getElementById("res14").textContent =
    `${nombre} cuesta ${precio}`;
}

function ej15() {
  const productoConStock = {
    ...producto,
    stock: 5
  };

  document.getElementById("res15").textContent =
    `${productoConStock.nombre} cuesta ${precio} y tiene un stock: ${productoConStock.stock}`;
}
