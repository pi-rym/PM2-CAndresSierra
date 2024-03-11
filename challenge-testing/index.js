class CarritoCompra  {
    constructor() {
        this.products = [];
    }

    agregarProducto (product) {
       this.products.push(product);
    }

    calcularTotal () {
        let total = 0;

        for(let i = 0 ; i < this.products.length ; i++){
           total += this.products[i].precio * this.products[i].quantity
        }

        return total;
    }

    aplicarDescuento(porcentaje) {
       const subtotal = this.calcularTotal();
       const descuento = this.calcularTotal() * (porcentaje / 100);

       return subtotal - descuento;
    }
}



module.exports = CarritoCompra;