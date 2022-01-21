//Seteo del Display
class Display {
    constructor(displayValorActual, displayValorAnterior){
        this.displayValorActual = displayValorActual
        this.displayValorAnterior = displayValorAnterior
        this.calculador = new Calculadora()
        this.valorActual = ""
        this.valorAnterior = ""
        this.operacionEnCurso = undefined
        this.signo = {
            sumar: "+",
            restar: "-",
            multiplicar: "x",
            dividir: "/"
        }
    }

    //Operaciones
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.mostrarValores()
    }

    borrarTodo() {
        this.valorActual = ""
        this.valorAnterior = ""
        this.operacionEnCurso = undefined;
        this.mostrarValores()
    }

    computar(operacion) {
        this.operacionEnCurso !== "igual" && this.calcular()
        this.operacionEnCurso = operacion
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = ""
        this.mostrarValores()
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString()
        this.mostrarValores()
    }

    mostrarValores(){
        this.displayValorActual.textContent = this.valorActual
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signo[this.operacionEnCurso] || ""}`
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if ( isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.operacionEnCurso](valorAnterior, valorActual)
    }
}

const display = new Display(displayValorAnterior, displayValorActual)
