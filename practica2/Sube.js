"use strict";

const Sube =function (identificador, saldo = 0) {
    const saldoMinimo = -999;
    this.identificador = identificador;
    this.saldo= saldo;

    this.obtenerIdentificador =()=> this.identificador;
    this.obtenerSaldoMinimo =()=> saldoMinimo;
    this.obtenerSaldo = () => this.saldo;
    this.cargarSaldo = (recarga) => this.saldo += recarga;
    this.pagarViaje = (montoAPagar) => {
        this.verificarSaldo(montoAPagar);
        this.saldo -= montoAPagar;
    }
    this.verificarSaldo = (montoAPagar) => {
        if (this.saldo - montoAPagar < saldoMinimo ){
            throw new Error("Saldo insuficiente");
        };
    }
}

module.exports = Sube;