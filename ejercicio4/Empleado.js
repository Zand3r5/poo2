"use strict";

const Feriados = require("../ejercicio4/Feriados.js");


const Empleado = function (nombre,apellido,dni,feriado=0){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.feriados = new Feriados(feriado);

    this.disponibilidad = (fecha)=>{

        this.feriados.forEach(element => {
            if (feriado == fecha){
                return "Empleado de vacaciones";
            }
        })
        return "Emepleado Disponible";
    }

    this.asignarFeriados = (fecha)=>{
        this.feriados.forEach(feriado => {
            if (feriado == fecha){
                throw new Error ("Feriado ya existente");
            }
        })
    }

}

module.exports=Empleado;