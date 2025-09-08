"use strict";

const  MapaCiudad  = require("./MapaDeCiudad");
const  Casa  = require("./Casa");
const  Hospital  = require("./Hospital");

describe("Mapa de una Ciudad Inteligente", () => {
    test("render 6x6 con edificios colocados (imagen de consola de la consigna)", () => {
        const ciudad = new MapaCiudad(6, 6);

        // Agregar edificios uno por uno
        ciudad.agregar(new Hospital({ fila: 0, columna: 0 })); // H
        ciudad.agregar(new Casa({ fila: 1, columna: 3 }));     // C
        ciudad.agregar(new Casa({ fila: 2, columna: 2, rasgos: ["panelSolar"] })); // c
        ciudad.agregar(new Hospital({ fila: 4, columna: 1, rasgos: ["wifiGratuito", "panelSolar"] })); // h*
        ciudad.agregar(new Casa({ fila: 5, columna: 5, rasgos: ["wifiGratuito", "panelSolar"] }));     // c*

        const esperado =
            "H . . . . .\n" +
            ". . . C . .\n" +
            ". . c . . .\n" +
            ". . . . . .\n" +
            ". h* . . . .\n" +
            ". . . . . c*";

        expect(ciudad.render()).toBe(esperado);
    });

    test("descripciones, filtros y conteo", () => {
        const ciudad = new MapaCiudad(6, 6);

        ciudad.agregar(new Hospital({ fila: 0, columna: 0 })); // H
        ciudad.agregar(new Casa({ fila: 1, columna: 3 }));     // C
        ciudad.agregar(new Casa({ fila: 2, columna: 2, rasgos: ["panelSolar"] })); // c
        ciudad.agregar(new Hospital({ fila: 4, columna: 1, rasgos: ["wifiGratuito", "panelSolar"] })); // h*
        ciudad.agregar(new Casa({ fila: 5, columna: 5, rasgos: ["wifiGratuito", "panelSolar"] }));     // c*

        // Descripciones (orden de inserción)
        const desc = ciudad.mapearDescripciones();
        expect(desc.length).toBe(5);
        expect(desc[0]).toBe("Hospital en (0, 0)");
        expect(desc[1]).toBe("Casa en (1, 3)");
        expect(desc[2]).toBe("Casa con panel solar en (2, 2)");
        expect(desc[3]).toBe("Hospital con wifi gratuito y panel solar en (4, 1)");
        expect(desc[4]).toBe("Casa con wifi gratuito y panel solar en (5, 5)");

        const hospitalesConWifi = ciudad.filtrarPorTipo("Hospital").filter(h => h.tieneRasgo("wifiGratuito"));

        expect(hospitalesConWifi.length).toBe(1);
        expect(hospitalesConWifi[0].descripcion()).toBe(
            "Hospital con wifi gratuito y panel solar en (4, 1)"
        );

        // Conteo por tipo
        expect(ciudad.contarPorTipo()).toEqual({ Hospital: 2, Casa: 3 });
    });

    test("reglas de símbolo según rasgos (0, 1, 2+)", () => {
        // 0 rasgos => mayúscula base
        const c0 = new Casa({ fila: 0, columna: 1 });
        expect(c0.simbolo()).toBe("C");

        // 1 rasgo => minúscula
        const c1 = new Casa({ fila: 1, columna: 1, rasgos: ["panelSolar"] });
        expect(c1.simbolo()).toBe("c");

        // 2 rasgos => minúscula + '*'
        const h2 = new Hospital({
            fila: 2,
            columna: 1,
            rasgos: ["wifiGratuito", "panelSolar"],
        });
        expect(h2.simbolo()).toBe("h*");
    });

    test("previene colocar dos edificios en la misma celda", () => {
        const ciudad = new MapaCiudad(6, 6);
        ciudad.agregar(new Casa({ fila: 3, columna: 3 }));
        expect(() => {
            ciudad.agregar(new Hospital({ fila: 3, columna: 3 }));
        }).toThrow(/ya está ocupada/i);
    });

    test("no permite posiciones fuera de rango 6x6", () => {
        expect(() => new Casa({ fila: -1, columna: 0 })).toThrow(/fuera de rango/i);
        expect(() => new Hospital({ fila: 6, columna: 0 })).toThrow(/fuera de rango/i);
    });
});
