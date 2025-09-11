"use-strict";
const tarjetaSube= require('./Sube.js');

const SistemaCentralizado = function () {
    this.cargas =new Carga();
    this.cargasRealizadas = [];
    this.cargarSaldo = (montoACargar,tarjetaSube)=>{
        this.cargasPendientes.push = new Carga(montoACargar,idsube);
        this.acreditarCarga(this.cargasPendientes);

    }

    this.acreditarCarga = (tarjetaSube, carga)  =>{
        this.cargas.forEach((carga) => {
            carga.acreditar(tarjetaSube);

        });
    };

    this.cantidadDeCargasPendiente = () => this.cargasPendientes;
}

module.exports = SistemaCentralizado;