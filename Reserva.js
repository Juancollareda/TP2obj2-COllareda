const Empleado=require('./Empleado');
const Validacion=require('./Validacion');

function Reserva(nombre,apellido,dni,sueldo){
    this.base=Empleado;
    this.base(nombre,apellido,dni);  
    if (Validacion.esNumero(sueldo)){
        return undefined;
    } else if (Validacion.EsPositivo(sueldo)){
        return undefined;
    } else if (!(this instanceof Reserva)){
        return new Reserva(nombre,apellido,dni,sueldo);
    }

    /** sueldo correspondiente a una hora de trabajo */
    this.sueldo=sueldo;


    this.pagarSueldo=function(horasTotales){
        if (!Validacion.esNumero(horasTotales)){
            if (!Validacion.EsPositivo){
                return (this.sueldo)*horasTotales;
            } 
        } else {
            return 0;
        }
    };


}

Reserva.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}

Reserva.prototype=Object.create(Empleado.prototype);
module.exports=Reserva;