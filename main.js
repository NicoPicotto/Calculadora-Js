//Obteniendo elementos del HTML
const displayValorAnterior = document.getElementById("valorAnterior")
const displayValorActual = document.getElementById("valorActual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")

//Funciones operadoras
class Calculadora {
    sumar = (num1, num2) => {return num1 + num2}
    restar = (num1, num2) => {return num1 - num2}
    multiplicar = (num1, num2) => {return num1 * num2}
    dividir = (num1, num2) => {return num1 / num2}
}

//Relacionando la función de agregar números con el HTML
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => 
        display.agregarNumero(boton.innerHTML)
    )
})

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
})