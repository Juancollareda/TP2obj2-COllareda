function Piezas(PrecioCantidad,nombre){   
    this.nombre=nombre;
    this.PrecioCantidad=PrecioCantidad;
    this.stock = 0;
    this.cantidad=0;
    this.ObtenePrecioCant=function(){
        return this.PrecioCantidad


    }
}
module.exports=Piezas