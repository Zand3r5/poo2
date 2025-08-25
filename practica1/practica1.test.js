Practica1 = require('./practica1');

test("Test que siempre es verdadero", () => {
    expect(true).toBe(true);
});

test("Si ingreso un numero, me devuelve su cuadrado", () => {
    const obj = new Practica1();
    expect(obj.obtenerCuadrado(5)).toBe(25);
});
test("Si ingreso dos numeros, me realiza la resta", () =>{
    const obj = new Practica1();
    expect(obj.crearResta(5,3)).toBe(-2);
} )
