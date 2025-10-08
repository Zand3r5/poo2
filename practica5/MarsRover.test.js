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
});
describe("Probando comandos rotacion", ()=>{
    marsRover = new MarsRover(0, 0);
    marsRover1 = new MarsRover(50,50);
    marsRover.moverConComandos("DW");

    expect(marsRover.obtenerOrientacion()).toBe("E");
    expect(marsRover.obtenerCoordenada(1,0));

    marsRover1.moverConComandos("DWDW");
    expect(marsRover1.obtenerOrientacion()).toBe("S");
    expect(marsRover1.obtenerCoordenada(1,1));
});




