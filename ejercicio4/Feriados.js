"use strict";

const Feriado = function (fechas){
    this.dias = fechas;

    this.verficarFecha = function (fecha){
        if (fecha != this.dias.fecha) {
            throw new Error ("No es feriado");
        }
    }
}
module.exports = Feriado;