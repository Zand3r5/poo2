'use-strict'

HistorialBancario = require('../ej1/HistorialBancario');

const CuentaBancaria = function (cbu){
    this.saldo = 0;
    this.cbu = cbu;
    this.historial2 = new HistorialBancario();

    this.obtenerSaldo = () => this.saldo;
    this.cargarSaldo = (deposito) =>{

        this.saldo += deposito;
        this.historial2.cargarOperacion(['+'+deposito, "Deposito"]);
    }
    this.extraccionSaldo = (extraccion) =>{
        this.verificarSaldo(this.saldo - extraccion);

        this.saldo -= extraccion;
        this.historial2.cargarOperacion(['-'+extraccion, "Extraccion"]);
    }
    this.verificarSaldo = function(operacion){
        if(operacion < 0){
            throw new Error("Saldo insuficiente a transferir");
        }
    }
    this.transferirSaldo = (monto,cuenta)=>{
        this.verificarSaldo(this.saldo - monto);
        cuenta.cargarSaldo(monto);
        this.saldo -= monto;
        this.historial2.cargarOperacion(['-'+monto,"Transferencia a "+cuenta.cbu]);
    }
    this.mostrarHistorial = ()=>{
        this.historial2.mostrarHistorial();
    }

}
module.exports = CuentaBancaria;