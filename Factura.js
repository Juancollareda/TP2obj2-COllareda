
const Stock = require("./Stock");
function Factura (vendedor,id) {
    this.Producto = [];
    this.id = id;
    this.vendedor = vendedor;
    this.montoTotal = 0
    this.Factura = function () {
      console.log(
        "Factura id:" +
          this.id +
          "Vendedor: " +
          this.vendedor.nombre +
          "Monto total: " +
          this.montoTotal +
          "\n==========\n"
      );
    };
  
    this.agregarProducto = function (pieza, cantidad) {
      if (Stock.mirarStock(pieza)==true) {
        pieza.cantidad = cantidad;
        Stock.restarStock(pieza, cantidad);
        this.Producto.push(pieza);
        this.montoTotal += pieza.PrecioCantidad * pieza.cantidad;
        this.vendedor.venta+=this.montoTotal
      } 
    };
  };
  
  module.exports = Factura;