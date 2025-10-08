'use-strict';

const Marte = function(x,y){
    this.x = x;
    this.y = y;

    this.obtenerCoordenadas()
    {
        return (this.x, this.y);
    }
}
module.exports = Marte;