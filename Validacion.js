const Empleado=require('./Empleado');
const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');


const Validacion = (function () {
  return {
    EsPositivo: function (cantidad) {
      if (cantidad >= 0) {
      return false
      } else {
        throw new Error("error");
      }
    },
    esNumero: function (numero) {
      if (typeof numero =='number') {
        return false
      } else {
        throw new Error("no es un numero");
      }
    },
  };
})();

module.exports = Validacion