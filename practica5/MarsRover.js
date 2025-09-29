'use-strict';

const MarsRover = function(x,y){
    this.x = x;
    this.y = y;
    this.mapa = ["N","E","S","O"];
    this.colaComandos;
    this.orientacion = 0;
    this.orientacionActual = this.mapa[this.orientacion];

    this.obtenerCoordenada= ()=>{
        return {x:this.x, y:this.y};
    }

    this.moverConComandos = (comandos)=>{
        this.colaComandos = comandos.split("");
        this.colaComandos.forEach((comando)=>{
            this.rotar(comando);
            this.validarRotacion();
            this.aVertical(comando);
        })
    }
    this.rotar = (comando)=>{
        if (comando === 'D'){
            this.orientacion += 1;
        }if (comando === 'A'){
            this.orientacion -= 1;
        }
    }
    this.validarRotacion = ()=>{
        if (this.orientacion > 3){
            this.orientacion = 0;
        }if (this.orientacion < 0){
            this.rotacion = 3;
        }
    }
    this.aVertical = (comando)=>{

        if (comando === 'W'){
            this.moverY(1);
        }if (comando === 'S'){
            this.moverY(-1);
        }
    }

    this.moverX= function(x){
        this.validarPosicionX(x);
        this.x += x;
    }
    this.moverY= function(y){
        this.validarPosicionY(y);
        this.y += y;
    }
    this.validarPosicionX = function(x){
        this.validarPosicion(x+this.x);
    }
    this.validarPosicionY = function(y){
        this.validarPosicion(y + this.y)
    }

    this.validarPosicion = function(valorAValidar){
        if (valorAValidar >= 100 || valorAValidar < 0) {
            throw new Error("Fuera de los limites del mapa");
        };
    }
}

module.exports = MarsRover;
