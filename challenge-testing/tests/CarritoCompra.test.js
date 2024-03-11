 const CarritoCompra = require('../index');

//Debe tener un metodo 'constructor()' que iniciliza el  carrito como un array vacío.
//Debe tener un metodo 'agregarProducto(producto)' que recibe un objeto representando un producto y lo agrega al carrito.
//Debe tener un metodo 'calcularTotal()' el cual calcula el total de la compra sumando los precios de todos los productos en el carrito.
//Debe tener un metodo 'aplicarDescuento(porcentaje)'el cual aplica un descuento al total de la compra según el porcentaje especificado.


describe('', () => {
    let carritoCompra;

    beforeEach( () => {
        carritoCompra = new CarritoCompra()
    })

    describe('Constructor de la clase CarritoCompra', () => {
        it('Constructor deberia ser una clase', () => {
          expect(typeof CarritoCompra.prototype.constructor).toBe('function');
        }) 

        it('carritoCompra deberia ser una instancia de CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        })
    })

    describe('Metodos de la clase CarritoCompra', () => {
        const p1 = {
            id: 1,
            name: 'teclado',
            precio: 200,
            quantity: 2
        }

        const p2 = {
            id: 2,
            name: 'mouse',
            precio: 100,
            quantity: 3
        }

        it('agregarProducto deberia ser un metodo de CarritoCompra', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        it('calcularTotal deberia ser un metodo de CarritoCompra', () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        it('aplicarDescuento deberia ser un metodo de CarritoCompra', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })


        it('El metodo agregarProducto deberia añadir un producto', () => {
            carritoCompra.agregarProducto(p1);

            expect(carritoCompra.products).toContain(p1);
        })

        it('El metodo calcularTotal deberia calcular el total de la compra', () => {
            carritoCompra.agregarProducto(p1);
            carritoCompra.agregarProducto(p2);

            const totalExpect = p1.precio * p1.quantity + p2.precio * p2.quantity;

            const total = carritoCompra.calcularTotal();

            expect(total).toEqual(totalExpect);
        })

        it('El metodo aplicarDescuento deberia aplicar el porcentaje de descuento al total', () => {
           carritoCompra.agregarProducto(p1);
           carritoCompra.agregarProducto(p2);

           const subtotal = p1.precio * p1.quantity + p2.precio * p2.quantity;
           const descuento = 20;

           const totalExpect = subtotal - (subtotal * (descuento / 100));

           const total = carritoCompra.aplicarDescuento(descuento)

           expect(totalExpect).toBe(total);
        })
    })
})



