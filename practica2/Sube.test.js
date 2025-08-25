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

test("Verificamos el saldo inicial en una sube", ()=>{
    sube1 = new Sube(1,100);
    sube2 = new Sube(2);

    expect(sube1.obtenerSaldo()).toBe(100);
    expect(sube2.obtenerSaldo()).toBe(0);
});

test("Cargamos saldo en una sube", ()=>{
    sube1 = new Sube(1,100);
    sube2 = new Sube(2);

    sube1.cargarSaldo(100);
    sube2.cargarSaldo(100);
    expect(sube1.obtenerSaldo()).toBe(200);
    expect(sube2.obtenerSaldo()).toBe(100);
});

test("Podemos pagar un viaje con nuestra sube", ()=>{
    sube1 = new Sube(1,100);
    sube1.cargarSaldo(100);
    sube1.pagarViaje(150);
    expect(sube1.obtenerSaldo()).toBe(50);
    sube1.pagarViaje(100);
    expect(() => sube1.pagarViaje(1000)).toThrow("Saldo insuficiente");
})