'use-strict'

const MaquinaExpendedora = function (){
    this.stock = [
        [Jorgito, 80,5],
        [CocaCola, 50,5],
        [Pepitos, 100,5],
        [Oreo, 100,5],
        [Cereales, 150,5]
    ];
    this.saldo = 0;

    this.cargarSaldo = (carga)=> {
        this.saldo += carga;
    }
    this.devolucion = ()=>{
        const aux = this.saldo;
        this.saldo = 0;
        return aux;
    }
    this.comprar = (producto) => {
        this.verificarStock(producto);
        this.verificarSaldo();
    }
    this.verificarSaldo = ()=> {
        const product = this.stock.find(p => p[0] === producto);
        if (this.saldo - product[1] < 0) {
            throw new Error("Saldo insuficiente")
        }
        product[2] -= 1;
    }
    this.verificarStock = (producto) => {
        const product = this.stock.find(p => p[0] === producto);
            if (!product) {
                throw new Error("Producto no existe");
            }
            if (product[2] <= 0) {
                throw new Error("Producto sin stock");
            }
    };





}