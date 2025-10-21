export default class Cl_mCliente{
    public _cedula = "";
    public _servicio = 0;

    constructor({
        cedula,
        servicio,
    }: {
        cedula: string,
        servicio: number,

    }){
        this.cedula = cedula;
        this.servicio = servicio;
    }

    set cedula(cedula: string){
        this._cedula = cedula;
    }

    get cedula(){
        return this._cedula;
    }

    set servicio(servicio: number){
        this._servicio = +servicio;
    }

    get servicio(){
        return this._servicio;
    }

    precio(): number {
        return 0;
    }

    descuento(): number {
        return 0;
    }

    montoPagar(): number {
        return 0;
    }

    toJSON() {
        return {
            cedula: this.cedula,
            servicio : this.servicio,
            precio: this.precio(),
            descuento: this.descuento(),
            montoPagar: this.montoPagar(),
        };
    }
}