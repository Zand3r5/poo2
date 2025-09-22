'use-strict';

const MarsRover = function(x,y){
    this.x = x;
    this.y = y;

    this.obtenerCoordenada= ()=>{
        return {x:this.x, y:this.y};
    }
    this.moverConComandos = (comando)=>{
        this.aVertical(comando);
        this.aHorizontal(comando);
    }
    this.aHorizontal = (comando)=>{
        if (comando === 'D'){
            this.moverX(1);
        }if (comando === 'A'){
            this.moverX(-1);
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
