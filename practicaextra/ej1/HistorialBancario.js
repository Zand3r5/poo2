'use-strict'

cuentaBancaria = require("../ej1/CuentaBancaria.js")

const HistorialBancario = function(){
    this.historial = [];
    this.cargarOperacion = (monto,operacion)=>{
        this.historial.push([monto,operacion]);
    }
    this.mostrarHistorial = ()=>{
        this.historial.forEach((movimiento) =>{
            console.log(`Monto: ${movimiento[0]}`);
        });
    }
}

module.exports = HistorialBancario;