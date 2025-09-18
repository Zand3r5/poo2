"use-strict";

const Empleado = require("../ejercicio4/Empleado");
const Feriados = require("../ejercicio4/Feriados");
const SistemaDeFeriados = require("../ejercicio4/SistemaDeFeriados");


test("Probando empleados",()=>{
    persona1 = new Empleado("francisco","DeGrandis",4300000);
    feriado = new Feriado(new Date("2024-10-28T10:30:00Z"));

    const SistemaDeFeriados = new SistemaDeFeriados();

    SistemaDeFeriados.asginarFeriado(persona1, feriado);


})