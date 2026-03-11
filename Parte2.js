function sumarArrays( numeros)
{
let sumaTotal = 0;
for(let i = 0; i < numeros.length; i++)
{
    sumaTotal = sumaTotal + numeros[i];
}
return sumaTotal;
}

function ejercicioSuma()
{
    let numeros = pedirNumeros();

    let resultado = sumarArrays(numeros);

    document.getElementById("resultado").innerText = "La suma es: " + resultado;
}
function mayorNumero(numeros)
{
    let numeroMayor = 0;
    for(let i = 0; i < numeros.length; i++)
{
 if (numeros[i]> numeroMayor)
 {
    numeroMayor = numeros[i];
 }
}
console.log(numeroMayor);
return numeroMayor;
}

function ejercicioMayor()
{
    let numeros = pedirNumeros();

    let resultado = mayorNumero(numeros);

     document.getElementById("resultado").innerText = "El número mayor es: " + resultado;
}
function obtenerPares(numeros)
{
    let pares = [];

    for(let i = 0; i < numeros.length; i++)
    {
        if(numeros[i] % 2 == 0)
        {
            pares.push(numeros[i]);
        }
    }

    return pares;

}
function ejercicioPares()
{
    let numeros = pedirNumeros();

    let resultado = obtenerPares(numeros);

    document.getElementById("resultado").innerText =
    "Los pares son: " + resultado;
}



function pedirNumeros()
{ 
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);

    let numeros = [n1, n2, n3];

    return numeros;
}