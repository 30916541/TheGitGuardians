import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_mCabelloCorto extends Cl_mCliente {
    constructor({ cedula, servicio, extension, }) {
        super({ cedula, servicio });
        this._extension = "";
        this.extension = extension;
    }
    set extension(extension) {
        this._extension = extension;
    }
    get extension() {
        return this._extension;
    }
    precio() {
        if (this.servicio === 1)
            return 35;
        else if (this.servicio === 2)
            return 50;
        else if (this.servicio === 3)
            return 75;
        else
            return 0;
    }
    precioExtension() {
        if (this.extension === "SI")
            return 500;
        else
            return 0;
    }
    descuento() {
        if (this.servicio === 3)
            return (this.precio() + this.precioExtension()) * 20 / 100;
        else
            return 0;
    }
    montoPagar() {
        return this.precio() + this.precioExtension() - this.descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { extension: this.extension, precioExtension: this.precioExtension(), tipo: "Cabello Corto" });
    }
}
