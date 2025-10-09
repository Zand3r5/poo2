'use strict'


const Factorial = function() {
    this.rta = 1;

    this.factoreo = (num)=>{

        if (num != 0){
            this.rta *= num;
            this.factoreo(num-1);
        }
    };
    this.obtenerFactorial =()=>{
        const aux = this.rta;
        this.rta = 1;
        return aux;
    }


}

module.exports= Factorial;