"use strict";
"use strict";

// Sistema centralizado: Mapa de la Ciudad
const MapaCiudad = function (filas = 6, columnas = 6) {
    const dentro = (f, c) =>
        Number.isInteger(f) &&
        Number.isInteger(c) &&
        f >= 0 && f < filas &&
        c >= 0 && c < columnas;

    const celdas = Array.from({ length: filas }, () => Array(columnas).fill(null));
    let edificios = [];

    this.obtenerFilas = () => filas;
    this.obtenerColumnas = () => columnas;

    this.hayEdificioEn = (fila, columna) =>
        dentro(fila, columna) ? celdas[fila][columna] !== null : false;

    this.edificioEn = (fila, columna) =>
        dentro(fila, columna) ? celdas[fila][columna] : null;

    this.agregar = (edificio) => {
        const { fila, columna } = edificio;
        if (!dentro(fila, columna)) {
            throw new RangeError(`Fuera de rango: (${fila}, ${columna})`);
        }
        if (this.hayEdificioEn(fila, columna)) {
            throw new Error(`La celda (${fila}, ${columna}) ya está ocupada.`);
        }
        celdas[fila][columna] = edificio;
        edificios.push(edificio);
        return this;
    };

    this.quitar = (fila, columna) => {
        if (!dentro(fila, columna)) return this;
        const ed = celdas[fila][columna];
        if (ed) {
            celdas[fila][columna] = null;
            edificios = edificios.filter(x => x !== ed);
        }
        return this;
    };

    // Métodos con map/filter/reduce
    this.filtrarPorTipo = (nombreTipo) =>
        edificios.filter(e => e.tipo().toLowerCase() === nombreTipo.toLowerCase());

    this.filtrarPorRasgo = (rasgo) =>
        edificios.filter(e => e.tieneRasgo(rasgo));

    this.mapearDescripciones = () =>
        edificios.map(e => e.descripcion());

    this.contarPorTipo = () =>
        edificios.reduce((acc, e) => {
            const k = e.tipo();
            acc[k] = (acc[k] || 0) + 1;
            return acc;
        }, {});


    this.render = () => {
        return celdas.map(fila => fila.map(celda => (celda ? celda.simbolo() : ".")).join(" ")).join("\n");
    };

    this.imprimir = () => console.log(this.render());
};

module.exports = MapaCiudad ;
