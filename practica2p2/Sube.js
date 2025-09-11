"use strict";

const Sube =function (identificador, saldo = 0) {
    const saldoMinimo = -999;
    this.identificador = identificador;
    this.saldo= saldo;

    this.obtenerIdentificador = (identificador) => (this.identificador === identificador);
    this.obtenerSaldoMinimo =()=> saldoMinimo;
    this.obtenerSaldo = () => this.saldo;
    this.cargarSaldo = (recarga) => this.saldo += recarga;
    this.pagarViaje = (montoAPagar) => {
        this.verificarSaldo(montoAPagar);
        this.saldo -= montoAPagar;
    }
    this.verificarSube = (identificador) => {
        if (identificador === this.identificador) {
            return 1;
        }
        return 0;
    }
    this.verificarSaldo = (montoAPagar) => {
        if (this.saldo - montoAPagar < saldoMinimo ){
            throw new Error("Saldo insuficiente");
        };
    }
}

module.exports = Sube;