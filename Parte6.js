const productos = [
    {nombre: "Mouse", precio: 30},
    {nombre: "Teclado", precio: 80},
    {nombre: "Monitor", precio: 150}
];
function buscarProducto(productos, nombre) {
    return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}
function productosCaros(productos) {
    return productos.filter(p => p.precio > 50);
}
function promedio(numeros) {
    const suma = numeros.reduce((acc, n) => acc + n, 0);
    return suma / numeros.length;
}

function probarCaros() {
    const caros = productosCaros(productos);

    document.getElementById("resultado").innerText =
    "Caros: " + caros.map(p => p.nombre + " ($" + p.precio + ")").join(", ");
}

function probarPromedio() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    let n4 = Number(document.getElementById("num4").value);

    let numeros = [n1, n2, n3, n4];

    const prom = promedio(numeros);

    document.getElementById("resultado").innerText =
    "Promedio: " + prom;
}