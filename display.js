//Seteo del Display
class Display {
    constructor(displayValorActual, displayValorAnterior){
        this.displayValorActual = displayValorActual
        this.displayValorAnterior = displayValorAnterior
        this.calculador = new Calculadora()
        this.valorActual = ""
        this.valorAnterior = ""
        this.operacionEnCurso = undefined
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

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if ( isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.operacionEnCurso](valorAnterior, valorActual)
    }

    computar(operacion) {
        this.operacionEnCurso !== "igual" && this.calcular()
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString()
        this.mostrarValores()
    }

    mostrarValores(){
        this.displayValorActual.innerHTML = this.valorActual
        this.displayValorAnterior.innerHTML = this.valorAnterior
    }
}

const display = new Display(displayValorAnterior, displayValorActual)