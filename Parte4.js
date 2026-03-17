const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
];

function ejercicioMap() {
 const nombres = usuarios.map(u => u.nombre);

    document.getElementById("resultado").innerText =
    "Nombres: " + nombres.join(", ");
}
function ejercicioFilter()
{
     const mayores = usuarios.filter(u => u.edad >= 18);

    let texto = mayores.map(u => u.nombre + " (" + u.edad + ")");

    document.getElementById("resultado").innerText =
    "Mayores: " + texto.join(", ");
}
function ejercicioReduce() {
    const suma = usuarios.reduce((total, u) => total + u.edad, 0);

    document.getElementById("resultado").innerText =
    "Suma de edades: " + suma;
}
