"use strict";
const Edificio = require("./edificio");

const Hospital = function (args) {
    const base = new Edificio(args);

    this.fila = base.fila;
    this.columna = base.columna;
    this._rasgos = base._rasgos;

    this.obtenerFila = base.obtenerFila;
    this.obtenerColumna = base.obtenerColumna;
    this.obtenerRasgos = base.obtenerRasgos;
    this.tieneRasgo = base.tieneRasgo;
    this.agregarRasgo = base.agregarRasgo;
    this.eliminarRasgo = base.eliminarRasgo;
    this.cantidadRasgos = base.cantidadRasgos;

    this.tipo = () => "Hospital";
    this.simboloBase = () => "H";

    this.simbolo = () => base.simbolo.call(this);
    this.descripcion = () => base.descripcion.call(this);
};

module.exports = Hospital;