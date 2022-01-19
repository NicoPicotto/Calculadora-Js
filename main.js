//Obteniendo elementos del HTML
const displayValorAnterior = document.getElementById("valorAnterior")
const displayValorActual = document.getElementById("valorActual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")

//Funcionamiento
class Calculadora {
    sumar = (num1, num2) => {return num1 + num2}
    restar = (num1, num2) => {return num1 - num2}
    multiplicar = (num1, num2) => {return num1 * num2}
    dividir = (num1, num2) => {return num1 / num2}
}

const calcu = new Calculadora()

console.log(calcu.sumar(2,3))