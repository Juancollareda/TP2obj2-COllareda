const Empleado=require('./Empleado');
const Validacion=require('./Validacion.js');
function Ventas(nombre,apellido,dni,comision,antiguedadEnAnios){
    var antiguedadRequerida=20;
    var sueldoPorAntiguedad=200;
    this.venta=0

    this.base=Empleado;
    this.base(nombre,apellido,dni);  
    if (Validacion.esNumero(comision) || Validacion.esNumero(antiguedadEnAnios)){
        return undefined;
    } else if (Validacion.EsPositivo(comision)|| Validacion.EsPositivo(antiguedadEnAnios)){
        return undefined;
    } else if (!(this instanceof Ventas)){
        return new Ventas(nombre,apellido,dni,comision,antiguedadEnAnios);
    }

    this.comision=comision; /** porcentaje */
    this.antiguedadEnAnios=antiguedadEnAnios;

    Ventas.prototype.antiguedadRequerida=function(nuevaAntiguedad){
        antiguedadRequerida=nuevaAntiguedad;
    }
    Ventas.prototype.sueldoPorAntiguedad=function(nuevaSueldo){
        sueldoPorAntiguedad=nuevaSueldo;
    }
    
    this.pagarSueldo=function(){
        if (!Validacion.esNumero(comision)){
            var retorno=0;
            if (!Validacion.EsPositivo(comision)){
                retorno+=this.venta*(comision/100);
            } 
            if (this.antiguedadEnAnios>=antiguedadRequerida){
                retorno+=sueldoPorAntiguedad;
            } 
            return retorno;
        } else {
            return 0;
        }
    }

}

Ventas.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}
Ventas.prototype=Object.create(Empleado.prototype);

module.exports=Ventas;
