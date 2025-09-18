"use strict";

const Empleado = require("Empleado.js");
const Feriados = require("Feriados.js");



const SistemaDeFeriados = function (empleado,feriado){
    this.empleados = [];
    this.feriados = [];
    this.noDisponible = [];

    this.consultarFeriado = function(fechaConsulta){
        this.noDisponible.forEach((noDisponible)=>{
            if (fechaConsulta === fechaConsulta){
                return "Empleado de vacaciones";
            }
            return "Empleado Disponible";
        })
    }

    this.asignarFeriados = function (empleado,feriado){
        this.noDisponible.push(empleado,feriado);
    }



}

module.exports=SistemaDeFeriados;