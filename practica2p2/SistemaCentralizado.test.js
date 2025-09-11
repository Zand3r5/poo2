const Sube = require('./Sube.js')
const SistemaCentralizado = require('./SistemaCentralizado')

test("Todas las subes son identificables",()=>{
    sube1 = new Sube(1);
    sube2 = new Sube(2);
    sistemaCentralizado = new SistemaCentralizado();

    sistemaCentralizado.cargarSaldo(100,sube1);
    expect(sube1.obtenerSaldo()).toBe(100);
})
