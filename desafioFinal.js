const usuarios = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]
const obtenerUsuarios = () =>  usuarios; 
function ejUsuarios() {
  const lista = obtenerUsuarios();

  document.getElementById("resUsuarios").textContent =
    JSON.stringify(lista);
}
const obtenerUsuariosPorId = (id) =>  usuarios.find(usuario => usuario.id === id);
function ejBuscar() {
  const id = Number(document.getElementById("idUsuario").value);
  const usuario = obtenerUsuarioPorId(id);

  document.getElementById("resBuscar").textContent =
    usuario ? `${usuario.nombre} (${usuario.edad})` : "No encontrado";
}
const obtenerMayores = () => usuarios.filter(usuario => usuario.edad >= 18);
function ejMayores() {
  const mayores = obtenerMayores();

  document.getElementById("resMayores").textContent =
    JSON.stringify(mayores);
}
const crearUsuario = (nombre, edad) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    edad
  };

  usuarios.push(nuevoUsuario);

  return nuevoUsuario;
};
function ejCrear() {
  const nombre = document.getElementById("nombreNuevo").value;
  const edad = Number(document.getElementById("edadNueva").value);

  const nuevo = crearUsuario(nombre, edad);

  document.getElementById("resCrear").textContent =
    `${nuevo.nombre} creado con id ${nuevo.id}`;
}