'use-strict';

const MarsRover = function(x,y){
    this.x = x;
    this.y = y;
    this.mapa = ["N","E","S","O"];
    this.orientacion = 0;
    this.orientacionActual = this.mapa[this.orientacion];
    this.colaComandos;


    this.obtenerOrientacion = ()=> {
        return this.orientacionActual;
    }
    this.obtenerCoordenada= ()=>{
        return {x:this.x, y:this.y};
    }

    this.moverConComandos = (comandos)=>{
        this.colaComandos = comandos.split("");
        this.colaComandos.forEach((comando)=>{
            this.rotar(comando);
            this.validarRotacion();
            this.movimientoOrientado(comando);
        })
    }
    this.rotar = (comando)=>{
        if (comando === 'D'){
            this.orientacion += 1;
        }if (comando === 'A'){
            this.orientacion -= 1;
        }
        this.orientacionActual = this.mapa[this.orientacion];
    }
    this.validarRotacion = ()=>{
        if (this.orientacion > 3){
            this.orientacion = 0;
        }if (this.orientacion < 0){
            this.rotacion = 3;
        }
    }

    this.movimientoOrientado = (comando) => {
        if (this.orientacion === "N"){
            this.movimientoNorte(comando);
        }if (this.orientacion === "E"){
            this.movimientoEste(comando);
        }
        if (this.orientacion === "S"){
            this.movimientoSur(comando);
        }
        if (this.orientacion === "O"){
            this.movimientoOeste(comando);
        }
    }
    this.movimientoNorte = (comando) => {
        if (this.comando === "W"){
            moverY(1);
        }
        moverY(-1);

    }
    this.movimientoEste = (comando) => {
        if (this.comando === "W"){
            moverX(1);
        }
        moverX(-1);

    }
    this.movimientoOeste = (comando) => {
        if (this.comando === "W"){
            moverX(-1);
        }
        moverX(1);

    }
    this.movimientoSur = (comando) => {
        if (this.comando === "W"){
            moverY(-1);
        }
        moverY(-1);

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
