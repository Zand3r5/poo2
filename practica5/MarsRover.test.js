const MarsRover = require("./MarsRover.js");

describe("Mars Rover Pruebas preliminares",()=> {
    test("Probando coordenadas iniciales", () => {
        const marsRover = new MarsRover(0, 0);
        const marsRover1 = new MarsRover(50,50);

        expect(marsRover.obtenerCoordenada()).toEqual({ x: 0, y: 0 });
        expect(marsRover1.obtenerCoordenada()).toEqual({ x: 50, y: 50 });
    });
    test("Probando movimientos iniciales", () => {
        const marsRover = new MarsRover(0, 0);
        const marsRover1 = new MarsRover(50,50);

        marsRover.moverX(1);
        marsRover1.moverX(49);

        expect(marsRover.obtenerCoordenada()).toEqual({ x: 1, y: 0 });
        expect(marsRover1.obtenerCoordenada()).toEqual({ x: 99, y: 50 });

        marsRover.moverY(1);
        marsRover1.moverY(49);

        expect(marsRover.obtenerCoordenada()).toEqual({ x: 1, y: 1 });
        expect(marsRover1.obtenerCoordenada()).toEqual({ x: 99, y: 99 });
    });
    test("Probando movimientos limites del mapa", () => {
        const marsRover = new MarsRover(0, 0);
        const marsRover1 = new MarsRover(50, 50);


        expect(() => {
            marsRover.moverX(101)
        }).toThrow("Fuera de los limites del mapa");
        expect(() => {
            marsRover1.moverX(-51)
        }).toThrow("Fuera de los limites del mapa");

        expect(() => {
            marsRover.moverY(101)
        }).toThrow("Fuera de los limites del mapa");
        expect(() => {
            marsRover1.moverY(-51)
        }).toThrow("Fuera de los limites del mapa");
    })
    test("Agregando comandos de movimientos",()=>{
        const marsRover = new MarsRover(0, 0);

        marsRover.moverConComandos('D');
        expect(marsRover.obtenerCoordenada()).toEqual({ x: 1, y: 0 });

        marsRover.moverConComandos('A');
        expect(marsRover.obtenerCoordenada()).toEqual({ x: 0, y: 0 });

        marsRover.moverConComandos('W');
        expect(marsRover.obtenerCoordenada()).toEqual({ x: 0, y: 1 });

        marsRover.moverConComandos('S');
        expect(marsRover.obtenerCoordenada()).toEqual({ x: 0, y: 0 });

        marsRover.moverConComandos('D');
        marsRover.moverConComandos('D');
        marsRover.moverConComandos('D');
        expect(marsRover.obtenerCoordenada()).toEqual({ x: 3, y: 0 });
    });
    test("Probando comandos de errores",()=>{
        const marsRover = new MarsRover(0, 0);
        const marsRover1 = new MarsRover(99,99);
        expect(() => {
            marsRover.moverConComandos('A')
        }).toThrow("Fuera de los limites del mapa");
        expect(() => {
            marsRover.moverConComandos('S');
        }).toThrow("Fuera de los limites del mapa");

        expect(() => {
            marsRover1.moverConComandos('W');
        }).toThrow("Fuera de los limites del mapa");

        expect(() => {
            marsRover1.moverConComandos('D');
        }).toThrow("Fuera de los limites del mapa");
    });

});
describe("Probando comandos anexados", ()=>{
   test("Probando movimientos en secuencias", () => {
       const marsRover = new MarsRover(0, 0);

       marsRover.moverConComandos('DD');

       expect(marsRover.obtenerCoordenada()).toEqual({ x: 2, y: 0 });



   })
});




