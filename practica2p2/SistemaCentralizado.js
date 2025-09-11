"use-strict";
const tarjetaSube= require('./Sube.js');

const SistemaCentralizado = function () {
    this.cargasPendientes = [];
    this.cargasRealizadas = [];
    this.cargarSaldo = (montoACargar,tarjetaSube)=>{
        this.cargasPendientes.push = new Carga(cargasPendientes,idsube);
        this.cargarTarjeta(montoACargar,tarjetaSube.obtenerIdentificador());

    }
    this.acreditarCarga = (tarjetaSube, carga) => tarjetaSube.cargarSaldo(carga);
    this.cantidadDeCargasPendiente = () => this.cargasPendientes;
}

module.exports = SistemaCentralizado;