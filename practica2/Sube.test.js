Sube = require('./Sube.js')

test("Todas las subes son identificables",()=>{
    sube1 = new Sube(1);
    sube2 = new Sube(2);

    expect(sube1.obtenerIdentificador()).toBe(1);
    expect(sube2.obtenerIdentificador()).toBe(2);
})

test("Todas las subes tienen un saldo minimo",()=>{
    sube1 = new Sube(1);
    sube2 = new Sube(2);

    expect(sube1.obtenerSaldoMinimo()).toBe(-999);
    expect(sube2.obtenerSaldoMinimo()).toBe(-999);
})
