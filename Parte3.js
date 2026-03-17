const descripcionUsuario = (usuario) => {  return `${usuario.nombre} tiene ${usuario.edad} años`;};

function ej8() {
  const nombre = document.getElementById("nombreUsuario").value;
  const edad = Number(document.getElementById("edadUsuario").value);

  const usuario = {
    nombre: nombre,
    edad: edad,
    activo: false
  };
    document.getElementById("res8").textContent = descripcionUsuario(usuario);

}
const activarUsuario = (usuario) => { usuario.activo = true;};
function ej9() {
  const nombre = document.getElementById("nombre9").value;
  const edad = Number(document.getElementById("edad9").value);

  const usuario = {
    nombre: nombre,
    edad: edad,
    activo: false
  };

  activarUsuario(usuario);

  document.getElementById("res9").textContent =
    `${usuario.nombre} activo: ${usuario.activo}`;
}
const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]
const precioTotal = (productos) => productos.reduce((total, producto) => total + producto.precio, 0);
function ej10() {
  const total = precioTotal(productos);
  document.getElementById("res10").textContent = total;
}