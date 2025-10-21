export default class Cl_mCliente {
    constructor({ cedula, servicio, }) {
        this._cedula = "";
        this._servicio = 0;
        this.cedula = cedula;
        this.servicio = servicio;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set servicio(servicio) {
        this._servicio = +servicio;
    }
    get servicio() {
        return this._servicio;
    }
    precio() {
        return 0;
    }
    descuento() {
        return 0;
    }
    montoPagar() {
        return 0;
    }
    toJSON() {
        return {
            cedula: this.cedula,
            servicio: this.servicio,
            precio: this.precio(),
            descuento: this.descuento(),
            montoPagar: this.montoPagar(),
        };
    }
}
