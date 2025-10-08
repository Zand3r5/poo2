'use-strict'
cuentaBancaria = require('../ej1/CuentaBancaria.js');

test('Primeros movimientos cuenta bancaria',()=>{
    cuentaBancaria1 = new cuentaBancaria(1);
    cuentaBancaria2 = new cuentaBancaria(2);

    cuentaBancaria1.cargarSaldo(100);
    expect(cuentaBancaria1.obtenerSaldo()).toBe(100);

    cuentaBancaria1.extraccionSaldo(100);
    expect(cuentaBancaria1.obtenerSaldo()).toBe(0);

    expect(()=>{
        cuentaBancaria1.extraccionSaldo(100);
    }).toThrow("Saldo insuficiente a transferir");
    cuentaBancaria1.cargarSaldo(200);
    cuentaBancaria1.transferirSaldo(100,cuentaBancaria2);

    expect(cuentaBancaria2.obtenerSaldo()).toBe(100);

    expect(cuentaBancaria1.obtenerSaldo()).toBe(100);

    expect(()=>{
        cuentaBancaria1.transferirSaldo(101,cuentaBancaria2);
    }).toThrow("Saldo insuficiente a transferir");
    cuentaBancaria1.mostrarHistorial();
});