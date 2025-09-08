"use strict";


const Edificio = function ({ fila, columna, rasgos = [] }) {
    const enRango = (n) => Number.isInteger(n) && n >= 0 && n < 6; // mapa por defecto 6x6
    if (!enRango(fila) || !enRango(columna)) {
        throw new RangeError(`Posición fuera de rango 6x6: (${fila}, ${columna})`);
    }


    this.fila = fila; // 0..5
    this.columna = columna; // 0..5
    this._rasgos = new Set(rasgos);


    this.obtenerFila = () => this.fila;
    this.obtenerColumna = () => this.columna;
    this.obtenerRasgos = () => Array.from(this._rasgos);
    this.tieneRasgo = (nombre) => this._rasgos.has(nombre);
    this.agregarRasgo = (nombre) => { this._rasgos.add(nombre); return this; };
    this.eliminarRasgo = (nombre) => { this._rasgos.delete(nombre); return this; };
    this.cantidadRasgos = () => this._rasgos.size;


    this.tipo = () => "Edificio"; // sobreescribir en subtipos
    this.simboloBase = () => "?"; // sobreescribir en subtipos


    this.simbolo = () => { // 0 rasgos => base; ≥1 => minúscula; ≥2 => +"*"
        const base = this.simboloBase();
        const conRasgos = this.cantidadRasgos();
        const cuerpo = conRasgos >= 1 ? base.toLowerCase() : base;
        return conRasgos >= 2 ? cuerpo + "*" : cuerpo;
    };


    this.descripcion = () => {
        const nombres = { panelSolar: "panel solar", wifiGratuito: "wifi gratuito", recargaEV: "carga EV", bateria: "batería" };
        const rasgos = this.obtenerRasgos().map(r => nombres[r] ?? r);
        const extras = rasgos.length ? ` con ${rasgos.join(" y ")}` : "";
        return `${this.tipo()}${extras} en (${this.fila}, ${this.columna})`;
    };
};


module.exports = Edificio;