"use strict";

const Sube =function (identificador, saldo = 0) {
    const saldoMinimo = -999;
    this.identificador = identificador;
    this.saldo= saldo;

    this.obtenerIdentificador =()=> this.identificador;
    this.obtenerSaldoMinimo =()=> this.saldoMinimo;
    this.obtenerSaldo = () => saldo;
}

module.exports = Sube;