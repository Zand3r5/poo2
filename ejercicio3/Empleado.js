"use strict";

const Feriados = require("./Feriados.js");


const Empleado = function (nombre,apellido,dni,feriado=0){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.feriados = new Feriados(feriado);
}

module.exports=Empleado;