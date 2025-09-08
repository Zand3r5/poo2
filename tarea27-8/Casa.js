"use strict";
const Edificio = require("./edificio");


const Casa = function (args) {
    Edificio.call(this, args);
    this.tipo = () => "Casa";
    this.simboloBase = () => "C";
};


module.exports = Casa ;