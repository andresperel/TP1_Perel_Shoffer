const formatearNombre = (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
function ej1() {
  const nombre = document.getElementById("nombre").value;
  document.getElementById("res1").textContent = formatearNombre(nombre);
}
const contarLetras = (texto) => { return texto.replaceAll(" ", "").length;};
function ej2() {
  const texto = document.getElementById("texto").value;
  document.getElementById("res2").textContent = contarLetras(texto);
}

const maximo = (a, b, c) => {
  let mayor = a;

  if (b > mayor) mayor = b;
  if (c > mayor) mayor = c;

  return mayor;
};
function ej3() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);

  document.getElementById("res3").textContent = maximo(a, b, c);
}
const validarPassword = (password) => {
    if(password.length >= 8 && /\d/.test(password)) 
    {
        return true;
    }
    else return false;
 }
 function ej4() {
  const password = document.getElementById("password").value;
  document.getElementById("res4").textContent = validarPassword(password);
}