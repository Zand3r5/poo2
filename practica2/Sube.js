"use strict";

const Sube =function (identificador) {
    const saldoMinimo = -999;
    this.identificador = identificador;

    this.obtenerIdentificador =()=> this.identificador;\
    this.obtenerSaldoMinimo =()=> this.saldoMinimo;
}

module.exports = Sube;