Factorial = require("../ej1/Factorial");


test( "Testeo de Factorial" , ()=>{

    const factorial = new Factorial();
    factorial.factoreo(1);
    expect(factorial.obtenerFactorial()).toBe(1);

    factorial.factoreo(2);
    expect(factorial.obtenerFactorial()).toBe(2);

    factorial.factoreo(3);
    expect(factorial.obtenerFactorial()).toBe(6);

    factorial.factoreo(4);
    expect(factorial.obtenerFactorial()).toBe(24);

    factorial.factoreo(5);
    expect(factorial.obtenerFactorial()).toBe(120);

    factorial.factoreo(10);
    expect(factorial.obtenerFactorial()).toBe(3628800);

    }

);